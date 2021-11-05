import React from "react";
import styled from "styled-components/native";

const Badge = ({ children, active }) => {
  return <Date active={active}>{children}</Date>;
};

export default Badge;

const Date = styled.Text`
  background: ${(props) => (props.active ? "#2a86ff" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  border-radius: 16px;
  font-weight: bold;
  font-size: 14px;
  min-width: 70px;
  height: 32px;
  padding: 0 15px;
  text-align: center;
  overflow: hidden;
  line-height: 32px;
`;
