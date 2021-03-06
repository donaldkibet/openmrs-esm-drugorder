import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ExtensionRoot from './root-medication-summary';

const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ExtensionRoot,
});

export default { bootstrap, mount, unmount };
