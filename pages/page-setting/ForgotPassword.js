import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import UseOrientation from "../../components/hooks/Orient";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://wallpapershome.com/images/pages/ico_h/21456.jpg",
};
export default function ForgotPassword({ openForgotpw, hideForgotpw, data }) {
  const [email, setEmail] = useState("");
  const [submitVa, setSubmitVa] = useState(false);

  const formation = UseOrientation();

  let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {
    console.log(data);
  }, [data]);

  const userEmail = data.find((c) => c.email === email);

  const submitForgotpw = () => {
    setSubmitVa(true)
    if (checkEmail.test(email)) {
      if (userEmail) {
        if (userEmail.email === email) {
          Alert.alert(
            "Your email is : " +
              userEmail.email +
              "\nYour password is : " +
              userEmail.password
          );
          setTimeout(() => {
            hideForgotpw();
          }, 1000);
        }
      } else {
        Alert.alert("This email does not exist.");
      }
    } else {
      Alert.alert("Enter your email correctly", "eg c@c.com, Asa@2d.cs");
    }
  };

  return (
    <View>
    <StatusBar backgroundColor="#fff" style="auto" />
    <Modal animationType="fade" visible={openForgotpw}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="left"
            size={24}
            color="#000"
            onPress={hideForgotpw}
          />
          <Text
            onPress={hideForgotpw}
            style={{ color: "#000000", fontSize: 16 }}
          >
            Back
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 24 }}>Forgot Password</Text>
        </View>

        <View>
          <Text style={{ color: "#fff" }}>ddsadsa</Text>
        </View>
      </View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={{ opacity: 0.4 }}
      >
        <ScrollView>
          <View style={{ padding: 10 }}>
            <View
              style={{
                flex: 1,
                padding: 10,
                borderWidth: 1,
                borderRadius: 15,
                marginTop: formation.height > 400 ? 50 : 0,
                backgroundColor: "#fff",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginVertical: formation.height > 400 ? 20 : 0,
                }}
              >
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor: submitVa && 
                      (checkEmail.test(email)
                        ? "#0faf06"
                        : "#ff0000"
                        )
                    },
                  ]}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                {submitVa && (checkEmail.test(email) ? (
                  <></>
                ) : (
                  <Text style={{ color: "#ff0000", marginTop: -10 }}>
                    Enter your email correctly (eg c@c.com)
                  </Text>
                ))}
              </View>
              <View style={{ alignItems: "center" }}>
                <Button
                  style={{ paddingHorizontal: 10 }}
                  mode="contained-tonal"
                  buttonColor="#ffd8d8"
                  onPress={submitForgotpw}
                >
                  Submit
                </Button>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 50 }} />
        </ScrollView>
        <View style={{ marginTop: 500 }} />
      </ImageBackground>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 55,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25,
  },
});
