import React, { useEffect } from 'react';
import {
  createDefaultImageryProviderViewModels,
  Ion,
  Viewer,
  Cartesian3,
  Color,
  Cartesian2,
} from 'cesium';
import { makeStyles } from '@material-ui/core';
import appConfig from 'src/getConfig';
import createPulsatingPoint from 'src/utils/cesium/createPulsatingPoint';
import pickEntity from 'src/utils/cesium/pickEntity';
import getCameraPositionWithNewHeight from 'src/utils/cesium/getCameraPositionWithNewHeight';

const getLocationFromNavigator = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

const styles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
});

let viewer: Viewer;
let userDestination: Cartesian3 | null;
let zoomOutOnLocationClick = false;
const containerId = 'cesiumContainer';
const userLocationPointId = 'user-location';

const CesiumMap: React.FunctionComponent = () => {
  useEffect(() => {
    void (async (): Promise<void> => {
      let userLocation: GeolocationPosition | null = null;

      try {
        userLocation = await getLocationFromNavigator();
      } catch (error) {
        // Ignore user decline
      }

      // Set custom token
      Ion.defaultAccessToken = appConfig.app.cesium.accessToken;

      // Get the index of OpenStreetMap provider to select it first
      const viewModels = createDefaultImageryProviderViewModels();
      const openStreetMapModelIndex = viewModels.findIndex((model) =>
        model.iconUrl.includes('openStreetMap')
      );

      viewer = new Viewer(containerId, {
        ...appConfig.app.cesium,
        shouldAnimate: true,
        selectedImageryProviderViewModel:
          openStreetMapModelIndex === -1
            ? viewModels[0]
            : viewModels[openStreetMapModelIndex],
      });
      viewer.scene.screenSpaceCameraController.enableTilt = false;

      if (userLocation !== null) {
        userDestination = Cartesian3.fromDegrees(
          userLocation.coords.longitude,
          userLocation.coords.latitude,
          appConfig.app.zoomHeightUser * 1000
        );

        viewer.entities.add(
          createPulsatingPoint(
            viewer,
            userLocationPointId,
            Cartesian3.fromDegrees(
              userLocation.coords.longitude,
              userLocation.coords.latitude,
              0
            ),
            Color.CORNFLOWERBLUE
          )
        );

        // Fly to the destination if the user presses the home button
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
          (e: { cancel: boolean }) => {
            if (!userDestination) {
              return;
            }

            e.cancel = true;

            viewer.camera.flyTo({
              destination: userDestination,
            });
          }
        );
      }
    })();

    window.addEventListener('click', (event: MouseEvent) => {
      if (!userDestination) {
        return;
      }

      const clickPosition = new Cartesian2(event.x, event.y);
      const pickedEntity = pickEntity(viewer, clickPosition);

      if (pickedEntity?.id !== userLocationPointId) {
        return;
      }

      if (zoomOutOnLocationClick) {
        viewer.camera.flyTo({
          destination: getCameraPositionWithNewHeight(
            viewer,
            appConfig.app.zoomHeightStart
          ),
        });
      } else {
        viewer.camera.flyTo({
          destination: userDestination,
        });
      }

      zoomOutOnLocationClick = !zoomOutOnLocationClick;
    });
  }, []);

  const classes = styles();

  return <div id={containerId} className={classes.container} />;
};

export default CesiumMap;
