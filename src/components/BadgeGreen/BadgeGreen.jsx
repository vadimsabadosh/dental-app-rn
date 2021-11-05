import React from "react";
import styled from "styled-components/native";

const BadgeGreen = ({ children }) => {
  return <Date>{children}</Date>;
};

export default BadgeGreen;

const Date = styled.Text`
  background: #84d26933;
  color: #61bb44;
  border-radius: 16px;
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  overflow: hidden;
  line-height: 32px;
`;
