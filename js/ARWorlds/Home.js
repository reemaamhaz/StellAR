"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

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
  ViroText,
  ViroNode,
} from "react-viro";

var createReactClass = require("create-react-class");

var MainScene = createReactClass({
  render: function () {
    return (
      <ViroNode>
        <ViroNode
          animation={{
            name: "spinFast",
            run: true,
            loop: true,
          }}
          position={[-1.5, 2.5, -5]}
        >
          <Viro3DObject
            source={require("../res/Home/ISS/ISS.vrx")}
            resources={[
              require("../res/Home/ISS/InternationalSpaceStation_BaseColor.jpg"),
            ]}
            scale={[0.005, 0.005, 0.005]}
            rotation={[0, 0, 0]}
            onDrag={() => {}}
            onClick={() => {}}
            type="VRX"
          />

          <Viro3DObject
            source={require("../res/Home/Earth/Earth.vrx")}
            resources={[require("../res/Home/Earth/earth_texture.jpg")]}
            scale={[0.025, 0.025, 0.025]}
            rotation={[0, 90, 0]}
            position={[0.0, -2, 0]}
            onDrag={() => {}}
            onClick={() => {}}
            type="VRX"
          />
        </ViroNode>

        <Viro3DObject
          source={require("../res/Home/StellarText.vrx")}
          position={[-1, -0.6, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[-90, 0, 0]}
          type="VRX"
        />
      </ViroNode>
    );
  },
});

module.exports = MainScene;