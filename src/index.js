import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props =>
  <Provider store={store}>
    <Widget
      handleNewUserMessage={props.handleNewUserMessage}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      customLauncher={props.launcher}
    />
  </Provider>;

ConnectedWidget.propTypes = {
  handleNewUserMessage: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  launcher: PropTypes.func
};

ConnectedWidget.defaultProps = {
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
};

export default ConnectedWidget;
