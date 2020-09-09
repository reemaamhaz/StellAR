"use strict";

import React, { Component } from "react";

import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";

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

import { createStore } from "redux";
import StellARApp from "./src/StellARApp.js";
import { Provider } from "react-redux";

const initialState = {
  activeWorld: 0,
  newWorld: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 0:
      return { activeWorld: 0 };
    case 1:
      return { activeWorld: 1 };
    case 2:
      return { activeWorld: 2 };
    case 3:
      return { activeWorld: 3 };
  }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StellARApp />
      </Provider>
    );
  }
}
