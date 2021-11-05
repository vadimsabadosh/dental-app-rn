import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Appointment from "../components/Appointment";
import GroupTitle from "../components/GroupTitle";
import PlusButton from "../components/PlusButton";
import { SectionList } from "react-native";
import appointmentApi from "../api/appointment";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);

  const fetchData = async () => {
    try {
      await appointmentApi
        .getAll()
        .then(function ({ data }) {
          setData(data.data);
          setRefreshing(false);
        })
        .catch((err) => {
          setRefreshing(false);
          console.error(err);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <SectionList
        sections={data}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
          <Appointment
            navigation={navigation}
            item={item}
            key={item._id}
            fetchData={fetchData}
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderSectionHeader={({ section: { title } }) => (
          <GroupTitle title={title} />
        )}
      />
      <PlusButton onPress={() => navigation.navigate("AddPatient")} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export default HomeScreen;
