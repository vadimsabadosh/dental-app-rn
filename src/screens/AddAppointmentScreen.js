import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/Button";
import patientApi from "../api/patient";
const formData = [
  {
    placeholder: "Номер зуба",
    name: "tooth_number",
    keyboardType: "numeric",
  },
  {
    placeholder: "Діагноз",
    name: "diagnosis",
    keyboardType: "default",
  },
  {
    placeholder: "Ціна",
    name: "price",
    keyboardType: "numeric",
  },
  {
    placeholder: "Дата",
    name: "date",
    keyboardType: "default",
  },
  {
    placeholder: "Час",
    name: "time",
    keyboardType: "default",
  },
];
const AddAppointmentScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      tooth_number: "",
      diagnosis: "",
      price: "",
      date: "",
      time: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(": onSubmit -> data", data);
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
      {formData.map((item) => {
        return (
          <Controller
            key={item.name}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                keyboardType={item.keyboardType}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder={item.placeholder}
              />
            )}
            name={item.name}
          />
        );
      })}

      <View style={styles.button}>
        <Button color="green" onPress={handleSubmit(onSubmit)}>
          + Додати прийом
        </Button>
      </View>
    </View>
  );
};

export default AddAppointmentScreen;

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
