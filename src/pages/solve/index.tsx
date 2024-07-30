"use client";

import { BlurFilter, TextStyle } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useMemo } from "react";

export default function Test() {
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  
  return(
    <>
      <h1>Solve</h1>
      <Stage>
        <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" x={400} y={270} anchor={{ x: 0.5, y: 0.5 }} />
        <Container x={400} y={330}>
          <Text 
            text="Hello World" 
            anchor={{ x: 0.5, y: 0.5 }} 
            filters={[blurFilter]} 
            style={
              new TextStyle({
                fill: '0xffffff'
                })
              }
          />
        </Container>
      </Stage>
    </>
  );
}