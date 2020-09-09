"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import { connect } from "react-redux";

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroAnimations,
  ViroNode,
  ViroText,
} from "react-viro";

var Home = require("../js/ARWorlds/Home.js");
var ARWorld1 = require("../js/ARWorlds/ARWorld1.js");
var ARWorld2 = require("../js/ARWorlds/ARWorld2.js");
var ARWorld3 = require("../js/ARWorlds/ARWorld3.js");

var allWorlds = [<Home />, <ARWorld1 />, <ARWorld2 />, <ARWorld3 />];

export default class MainScene extends Component {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        {allWorlds[this.props.arSceneNavigator.viroAppProps]}
      </ViroARScene>
    );
  }
}

ViroAnimations.registerAnimations({
  spin: {
    properties: {
      rotateY: "+=45",
    },
    easing: "Linear",
    duration: 2000,
  },

  spinSlow: {
    properties: {
      rotateY: "+=45",
    },
    easing: "Linear",
    duration: 3500,
  },

  spinFast: {
    properties: {
      rotateY: "+=45",
    },
    easing: "Linear",
    duration: 1000,
  },
  ZSpin: {
    properties: {
      rotateZ: "+=45",
    },
    easing: "Linear",
    duration: 3500,
  },
});
