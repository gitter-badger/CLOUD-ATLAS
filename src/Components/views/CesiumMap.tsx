import React, { useEffect } from 'react';
import {
  createDefaultImageryProviderViewModels,
  Ion,
  Viewer,
  Cartesian3,
  CustomDataSource,
} from 'cesium';
import { makeStyles } from '@material-ui/core';
import appConfig from 'src/getConfig';

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

const CesiumMap: React.FunctionComponent = () => {
  const containerId = 'cesiumContainer';

  let viewer: Viewer;
  useEffect(() => {
    void (async (): Promise<void> => {
      let userLocation = null;

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
        selectedImageryProviderViewModel:
          openStreetMapModelIndex === -1
            ? viewModels[0]
            : viewModels[openStreetMapModelIndex],
      });

      if (userLocation !== null) {
        const userDestination = Cartesian3.fromDegrees(
          userLocation.coords.longitude,
          userLocation.coords.latitude,
          1005.0
        );

        const source = new CustomDataSource();
        await viewer.dataSources.add(source);

        // Focus the destination once
        viewer.camera.flyTo({ destination: userDestination });

        // Fly to the destination if the user presses the home button
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
          (e) => {
            e.cancel = true;

            viewer.camera.flyTo({
              destination: userDestination,
            });
          }
        );
      }
    })();
  }, []);

  const classes = styles();

  return <div id={containerId} className={classes.container} />;
};

export default CesiumMap;
