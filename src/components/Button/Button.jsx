import React from "react";
import styled from "styled-components/native";

const Button = ({ children, color, onPress }) => {
  return (
    <CustomButton color={color} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </CustomButton>
  );
};

const CustomButton = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.color === "green" ? "#2ecc71" : "#2a86ff")};
  border-radius: 30px;
  overflow: hidden;
  height: 45px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default Button;
