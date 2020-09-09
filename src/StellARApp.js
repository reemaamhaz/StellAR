"use strict";

import React, { Component } from "react";

import { View, Dimensions, TouchableOpacity, ImageBackground, StyleSheet} from "react-native";

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroAnimations,
  ViroText,
} from "react-viro";

import { connect } from "react-redux";

import MainScene from "./MainScene.js";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class StellARApp extends Component {
    render() {
      return (
        <View style={styles.container}>
          <ViroARSceneNavigator
            initialScene={{ scene: MainScene }}
            viroAppProps={this.props.activeWorld}>
          </ViroARSceneNavigator>
          <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.increaseWorld(0)}>
                <ImageBackground source={require('./images/back.png')}
                    style={{
                      height: 50,
                      width: 50
                  }}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.increaseWorld(1)}
              >
                <ImageBackground source={require('./images/mars.png')}
                    style={{
                      height: 50,
                      width: 50
                  }}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.increaseWorld(2)}
              >
                <ImageBackground source={require('./images/saturn.png')}
                    style={{
                      height: 50,
                      width: 50
                  }}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.increaseWorld(3)}
              >
                <ImageBackground source={require('./images/asteroid.png')}
                    style={{
                      height: 50,
                      width: 50
                  }}/>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
);

function mapStateToProps(state) {
  return {
    activeWorld: state.activeWorld,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseWorld: (id) => dispatch({ type: id }),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    bottom: 12
  },
  ARView: {
    flex: 20,
  },
  bottomTab: {
    flex: 0.1,
    backgroundColor: "red",
  },
  buttonSlider: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {},
});
