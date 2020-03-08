import React, { useState } from "react";
import { Text, StyleSheet, Animated, Easing } from "react-native";
import { Overlay } from "react-native-elements";
import Circle from "../../Circle/Circle";
import styled from "styled-components";
import { transform } from "@babel/core";
import Results from "../../Results/Results";

const HomeScreen: any = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState(false);
  if (record) {
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }
  const growthValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(growthValue, {
    toValue: 2,
    duration: 800,
    easing: Easing.linear
  }).start();

  const growth = growthValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "40%"]
  });
  return (
    <HomeContainer>
      <Text style={styles.homeTitle}>Scan Now !</Text>
      <CircleView>
        <Circle changeRecordState={setRecord} recording={record} />
      </CircleView>
      <Text></Text>
      {show ? (
        <OverlayResults style={{ height: growth }}>
          <Results />
        </OverlayResults>
      ) : (
        <React.Fragment />
      )}
    </HomeContainer>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(100, 200, 000, .5)",
    height: 0,
    position: "absolute",
    bottom: 0
  },
  homeTitle: {
    color: "#fff"
  }
});

const HomeContainer = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  background-color: #3e3b3b;
  align-items: center;
`;

const CircleView = styled.View`
  height: 390px;
  width: 390px;
  border: 6px solid white;
  border-radius: 300px;
  box-shadow: 1px 1px 1px white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OverlayResults = styled(Animated.View)`
  height: 90%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: white;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export default HomeScreen;
