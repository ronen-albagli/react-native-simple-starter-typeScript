import * as React from "react";
import { Header } from "react-native-elements";

const AppHeader: React.FC = () => {
  return (
    <Header
      statusBarProps={{ barStyle: "light-content" }}
      barStyle="light-content" // or directly
      leftComponent={{ text: "left TITLE", style: { color: "#fff" } }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      containerStyle={{
        backgroundColor: "#3D6DCC",
        justifyContent: "space-around"
      }}
    />
  );
};

export default AppHeader;
