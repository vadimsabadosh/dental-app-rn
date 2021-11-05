import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const PlusButton = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <Ionicons name="ios-add" size={36} color="white" />
    </Button>
  );
};
export default PlusButton;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  border-radius: 50px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
  elevation: 4;
`;
