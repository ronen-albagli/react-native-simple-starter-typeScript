import * as React from "react";
import { Animated, Easing, View } from "react-native";
import styled from "styled-components";
import { Text } from "react-native-elements";
const image = require("../../../assets/png/milk-bottle.png");
const up = require("../../../assets/png/good.png");
const down = require("../../../assets/png/bad.png");

const Results = () => {
  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 2,
    duration: 3000,
    easing: Easing.linear
  }).start();

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 0.2, 0.5, 0.7, 1],
    outputRange: [1, 1.5, 1.2, 1.5, 1.5]
  });
  return (
    <ResultsView>
      <Text h3>He Wants To Eat!</Text>
      <View>
        <Animated.Image
          source={image}
          style={{ width: 100, height: 100, transform: [{ scale: spin }] }}
        />
      </View>
      <View>
        <Text h4>This info was helpful? </Text>
      </View>
      <SubmitView>
        <Animated.Image
          source={up}
          style={{ width: 50, height: 50, transform: [{ scale: spin }] }}
        />
        <Animated.Image
          source={down}
          style={{ width: 50, height: 50, transform: [{ scale: spin }] }}
        />
      </SubmitView>
    </ResultsView>
  );
};

const ResultsView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
`;

const SubmitView = styled.View`
  height: 100px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export default Results;
