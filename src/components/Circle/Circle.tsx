import React, { useState } from "react";
import styled from "styled-components";
import { ActivityIndicator, Animated, Easing } from "react-native";
import { Image } from "react-native-elements";
const image = require("../../../assets/png/milk-bottle.png");

const Circle: any = (props: any) => {
  const spinValue = new Animated.Value(0);

  const [record, setRecord] = useState(false);
  // First set up animation
  Animated.timing(spinValue, {
    toValue: 2,
    duration: 6000,
    easing: Easing.linear
  }).start();

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  const spinOut = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "0deg"]
  });
  return (
    <CircleStyled onPress={props.changeRecordState}>
      <Animated.Image
        source={image}
        style={{
          width: 200,
          height: 200,
          transform: props.recording
            ? [{ rotate: spin }]
            : [{ rotate: spinOut }]
        }}
      />
    </CircleStyled>
  );
};

const CircleStyled = styled.TouchableOpacity`
  height: 350px;
  width: 350px;
  border: 3px solid white;
  border-radius: 300px;
  box-shadow: 1px 22px 41px white;
  margin: 50px;
  align-items: center;
  justify-content: center;
`;

export default Circle;
