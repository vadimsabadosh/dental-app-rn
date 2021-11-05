import styled from "styled-components/native";
import React from "react";
import { getAvatarColor } from "../../utils/getAvatarColor";

const Avatar = ({ name }) => {
  const color = getAvatarColor(name[0]);
  return (
    <Circle style={{ backgroundColor: color.background, borderRadius: 50 }}>
      <Name style={{ color: color.color }}>{name[0].toUpperCase()}</Name>
    </Circle>
  );
};

const Circle = styled.View`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;
const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export default Avatar;
