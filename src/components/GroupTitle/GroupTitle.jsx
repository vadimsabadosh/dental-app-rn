import React from "react";
import styled from "styled-components/native";

const AppointmentTitle = ({ title }) => {
  return <GroupTitle>{title}</GroupTitle>;
};
export default AppointmentTitle;
const GroupTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #212121;
  margin-top: 25px;
  padding: 0 20px;
`;
