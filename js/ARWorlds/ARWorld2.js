"use strict";

import React, { Component } from "react";

import {
  ViroAmbientLight,
  Viro360Video,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroNode,
} from "react-viro";

var createReactClass = require("create-react-class");

var MainScene = createReactClass({
  render: function () {
    return (
      <ViroNode>
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroAmbientLight color="#ffffff" />
          <ViroPortal position={[1.2, -1, -4]} scale={[0.01, 0.01, 0.01]}>
            <Viro3DObject
              source={require("../ARPortals/portal_res/portal/source/gate.vrx")}
              resources={[
                require("../ARPortals/portal_res/portal/source/GateMisc.jpeg"),
                require("../ARPortals/portal_res/portal/source/GateMisc.jpg_specular.jpg"),
                require("../ARPortals/portal_res/portal/source/mqdefault.jpg"),
                require("../ARPortals/portal_res/portal/source/mqdefault.jpg_specular.jpg")
              ]}
              rotation={[90, 180, 0]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Video
            source={require("../ARPortals/portal_res/space2.mp4")}
            loop={true}
          /> 
        </ViroPortalScene>
        <Viro3DObject
          source={require("../res/GasGiants/Jupiter/Jupiter.vrx")}
          resources={[require("../res/GasGiants/Jupiter/Jupiter_diff_1.jpg")]}
          position={[0.0, 0.0, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[0, 0, 0]}
          onDrag={() => {}}
          animation={{
            name: "spin",
            run: true,
            loop: true,
          }}
          onClick={() => {}}
          type="VRX"
        />

        <Viro3DObject
          source={require("../res/GasGiants/Neptune/Neptune.vrx")}
          resources={[
            require("../res/GasGiants/Neptune/13908_Neptune_planet_diff.jpg"),
          ]}
          position={[0.0, 0.0, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[-90, 0, 0]}
          onDrag={() => {}}
          animation={{
            name: "spin",
            run: true,
            loop: true,
          }}
          type="VRX"
        />

        <Viro3DObject
          source={require("../res/GasGiants/Saturn/Saturn.vrx")}
          resources={[require("../res/GasGiants/Saturn/Saturn_diff.jpg")]}
          position={[0.0, -1, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[-10, 0, 0]}
          onDrag={() => {}}
          animation={{
            name: "spinSlow",
            run: true,
            loop: true,
          }}
          type="VRX"
        />

        <Viro3DObject
          source={require("../res/GasGiants/Uranus/Uranus.vrx")}
          resources={[
            require("../res/GasGiants/Uranus/13907_Uranus_planet_diff.jpg"),
          ]}
          position={[0.0, 0.0, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[-90, 0, 0]}
          onDrag={() => {}}
          animation={{
            name: "spinFast",
            run: true,
            loop: true,
          }}
          type="VRX"
        />

        <Viro3DObject
          source={require("../res/GasGiants/GasGiantsText.vrx")}
          position={[0.0, 0.0, -5]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[-90, 0, 0]}
          type="VRX"
        />
      </ViroNode>
    );
  },
});

module.exports = MainScene;
