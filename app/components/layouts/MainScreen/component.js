import React from 'react';
import { View, ViewPropTypes, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    const { children, style, bgColorStatusBar, colorStatusBar } = this.props
    return (
      <View style={[styles.container, style]}>
        <StatusBar backgroundColor={bgColorStatusBar} barStyle={colorStatusBar}/>
        {children}
      </View>
    );
  }
}

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]).isRequired,
  style: ViewPropTypes.style,
  bgColorStatusBar: PropTypes.string,
  colorStatusBar: PropTypes.string
};

Component.defaultProps = {
  style: {},
  bgColorStatusBar: "#FFFFFF",
  colorStatusBar: 'dark-content'
};