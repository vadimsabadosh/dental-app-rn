import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Alert } from "react-native";
import GreyText from "../GreyText/GreyText";
import Badge from "../Badge";
import SwipeRow from "../../modules/SwipeRow";
import Avatar from "../Avatar";
import { MaterialIcons } from "@expo/vector-icons";
import appointmentApi from "../../api/appointment";

const Appointment = ({ item, navigation, fetchData }) => {
  const { patient, diagnosis, active, time } = item;
  const [loading, setLoading] = useState(false);
  const onRemove = () => {
    Alert.alert("Видалити прийом", "Ви дійсно хочете видалити прийом?", [
      {
        text: "Скасувати",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Видалити",
        onPress: async () => {
          setLoading(true);
          await appointmentApi
            .delete(item._id)
            .then(function () {
              fetchData();
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              console.error(err);
            });
        },
      },
    ]);
  };
  return (
    <SwipeRow
      right={[
        {
          titleColor: "blue",
          backgroundColor: "#b4c1cb",
          icon: <MaterialIcons name="edit" size={28} color="white" />,
        },
        {
          backgroundColor: "#f85a5a",
          icon: <MaterialIcons name="delete-outline" size={28} color="white" />,
          onPress: onRemove,
        },
      ]}
      style={{ marginVertical: 1 }}
    >
      <GroupItem onPress={() => navigation.navigate("Patient", item)}>
        <Avatar name={patient.username} />
        <View style={{ flex: 1 }}>
          <FullName>{patient.username}</FullName>
          <GreyText>{diagnosis}</GreyText>
        </View>
        <Badge active={active}>{time}</Badge>
      </GroupItem>
    </SwipeRow>
  );
};

export default Appointment;

const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #212121;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #f3f3f3;
  padding: 20px;
`;
