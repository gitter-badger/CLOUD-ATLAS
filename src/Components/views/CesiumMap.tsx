import React, { useEffect } from 'react';
import { Viewer } from 'cesium';
import { makeStyles } from '@material-ui/core';

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
  // @ts-expect-error we never touch the variable again

  let viewer: Viewer;
  useEffect(() => {
    viewer = new Viewer(containerId);
  });

  const classes = styles();

  return <div id={containerId} className={classes.container} />;
};

export default CesiumMap;
