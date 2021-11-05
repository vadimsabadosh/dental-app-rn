import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  PatientScreen,
  AddPatientScreen,
  AddAppointmentScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();
const homeOptions = {
  title: "Пацієнти",
  headerTintColor: "#fff",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#2a86ff",
    fontWeight: "bold",
  },
};
const patientOptions = {
  title: "Карта пацієнта",
  headerTintColor: "#fff",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#2a86ff",
    color: "#fff",
    fontWeight: "bold",
  },
};
const addPatientOptions = {
  title: "Додати пацієнта",
  headerTintColor: "#fff",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#2a86ff",
    color: "#fff",
    fontWeight: "bold",
  },
};
const addAppointmentOptions = {
  title: "Додати прийом",
  headerTintColor: "#fff",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#2a86ff",
    color: "#fff",
    fontWeight: "bold",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeOptions}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={patientOptions}
        />
        <Stack.Screen
          name="AddPatient"
          component={AddPatientScreen}
          options={addPatientOptions}
        />
        <Stack.Screen
          name="AddAppointment"
          component={AddAppointmentScreen}
          options={addAppointmentOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
