import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Button } from "../components/Button";
import BadgeGreen from "../components/BadgeGreen";
import Badge from "../components/Badge";
import GreyText from "../components/GreyText/GreyText";
import PlusButton from "../components/PlusButton/";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, FlatList, ActivityIndicator, Linking } from "react-native";
import patientApi from "../api/patient";

const PatientScreen = ({ route, navigation }) => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);
  const { patient } = route.params;

  useEffect(async () => {
    await patientApi
      .getOne(patient._id)
      .then(function ({ data }) {
        setData(data.data);
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
        console.error(err);
      });
  }, []);
  return (
    <Container>
      <PatientName>{patient.username}</PatientName>
      <GreyText>{patient.phone}</GreyText>

      <PatientButtons>
        <Button>Формула зубів</Button>
        <CallButtonView>
          <Button
            color="green"
            onPress={() => Linking.openURL("tel:" + patient.phone)}
          >
            <Foundation name="telephone" size={22} color="white" />
          </Button>
        </CallButtonView>
      </PatientButtons>

      <PatientDetails>
        <DetailsTitle>Прийоми</DetailsTitle>
        <Cards>
          {refreshing ? (
            <ActivityIndicator size="large" color="#2a86ff" />
          ) : (
            <FlatList
              data={data?.appointments}
              renderItem={({ item }) => {
                return (
                  <Card>
                    <CardLine>
                      <MaterialCommunityIcons
                        name="tooth"
                        size={16}
                        color="#a3a3a3"
                      />
                      <CardLabel>
                        Зуб:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                          {item.tooth_number}
                        </Text>
                      </CardLabel>
                    </CardLine>
                    <CardLine>
                      <MaterialCommunityIcons
                        name="note-text"
                        size={16}
                        color="#a3a3a3"
                      />
                      <CardLabel>
                        Діагноз:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                          {item.diagnosis}
                        </Text>
                      </CardLabel>
                    </CardLine>
                    <CardLine
                      style={{ justifyContent: "space-between", marginTop: 15 }}
                    >
                      <Badge active>
                        {item.date} - {item.time}
                      </Badge>
                      <BadgeGreen>{item.price} р</BadgeGreen>
                    </CardLine>
                  </Card>
                );
              }}
              keyExtractor={(item) => item._id}
            />
          )}
        </Cards>
      </PatientDetails>
      <PlusButton onPress={() => navigation.navigate("AddAppointment")} />
    </Container>
  );
};

const CallButtonView = styled.View`
  margin-left: 15px;
  width: 45px;
`;
const CardLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
`;
const CardLabel = styled.Text`
  font-size: 16px;
  color: #212121;
  margin-left: 15px;
`;
const PatientDetails = styled.View`
  margin-top: 40px;
`;
const PatientButtons = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
const PatientName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;
const DetailsTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  line-height: 36px;
  color: #212121;
`;
const Container = styled.View`
  padding: 25px;
  position: relative;
`;
const Cards = styled.View`
  margin-top: 15px;
`;
const Card = styled.View`
  margin-bottom: 15px;
  shadow-color: #e3e3e3;
  shadow-opacity: 0.4;
  shadow-radius: 3px;
  elevation: 0.5;
  padding: 14px 20px;
  border-radius: 10px;
  background: #fff;
`;

export default PatientScreen;
