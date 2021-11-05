import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/Button";
import patientApi from "../api/patient";

const AddPatientScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      phone: "",
    },
  });
  const onSubmit = async (data) => {
    setRefreshing(true);
    await patientApi
      .add(data)
      .then(function () {
        setRefreshing(false);
        navigation.navigate("Home");
      })
      .catch((err) => {
        setRefreshing(false);
        console.error(err);
      });
  };

  if (refreshing) {
    return (
      <View style={styles.container}>
        <Text>Загрузка...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Ім'я та прізвище"
          />
        )}
        name="username"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Номер телефону"
          />
        )}
        name="phone"
      />

      <View style={styles.button}>
        <Button color="green" onPress={handleSubmit(onSubmit)}>
          + Додати пацієнта
        </Button>
      </View>
    </View>
  );
};

export default AddPatientScreen;

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 25,
    backgroundColor: "#fff",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#212121",
    borderRadius: 6,
    height: 40,
    marginBottom: 30,
    padding: 10,
    borderRadius: 4,
  },
});
