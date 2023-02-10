import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  ImageBackground,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import { ScrollView } from "react-native-gesture-handler";
import UseOrientation from "../../components/hooks/Orient";
import { StatusBar } from "expo-status-bar";

const image = {
  uri: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148901163.jpg?w=1060&t=st=1675312564~exp=1675313164~hmac=cb37a2cb8ff2dfde3ffa3edef36c351caa113d4e77e736de3ee4e46880641add",
};

export default function Login({
  modalLogin,
  hideLogin,
  changeLogin,
  data,
  createUser,
}) {
  const [openReg, setOpenReg] = useState(false);
  const [openForgotpw, setOpenForgotpw] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitVa, setSubmitVa] = useState(false);

  const formation = UseOrientation();

  const userName = data.find((c) => c.username === username);
  const userPassword = data.find((c) => c.password === password);

  const submitLogin = () => {
    setSubmitVa(true);
    if (userName) {
      if (userName.password === password) {
        Alert.alert("Login complete");
        setTimeout(() => {
          changeLogin(username);
        }, 1200);
      } else {
        Alert.alert("Wrong password");
      }
    } else {
      Alert.alert("Please enter the correct user.");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const showReg = () => setOpenReg(true);
  const hideReg = () => setOpenReg(false);

  const showForgotpw = () => setOpenForgotpw(true);
  const hideForgotpw = () => setOpenForgotpw(false);

  return (
    <View>
      <StatusBar backgroundColor="#fff" style="auto" />
      
      <Modal animationType="slide" visible={modalLogin}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="left" size={24} color="#000" onPress={hideLogin} />
            <TouchableWithoutFeedback onPress={hideLogin}>
              <Text style={{ color: "#000000", fontSize: 16 }}>Back</Text>
            </TouchableWithoutFeedback>
          </View>

          <View>
            <Text style={{ fontSize: 24 }}>Sign in</Text>
          </View>

          <View>
            <Text style={{ color: "#fff" }}>ddsadsa</Text>
          </View>
        </View>

        <ImageBackground
          source={image}
          resizeMode="cover"
          imageStyle={{ opacity: 0.8 }}
        >
          <ScrollView>
            <View style={{ alignItems: "center", top: 30 }}>
              <Text style={{ fontSize: 32 }}>Ching1App</Text>
              <Text>React Native Minip</Text>
              <View style={{ marginTop: 80 }} />
            </View>
            <View style={{ padding: 10 }}>
              <View
                style={{
                  flex: 1,
                  padding: 30,
                  borderWidth: 1,
                  borderRadius: 15,
                  backgroundColor: "#fff",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        borderColor:
                          submitVa && (!userName ? "#ff0000" : "#40ff00"),
                      },
                    ]}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                  />
                  {submitVa && !userName && (
                    <Text style={{ color: "#ff0000", marginTop: -10 }}>
                      This user account does not exist.
                    </Text>
                  )}
                  <TextInput
                    style={[
                      styles.input,
                      {
                        borderColor: submitVa && !userPassword && "#ff0000"
                      },
                    ]}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <Button
                    style={{ paddingHorizontal: 10 }}
                    mode="contained-tonal"
                    buttonColor="#ffd8d8"
                    onPress={submitLogin}
                  >
                    Sign in
                  </Button>
                </View>
                <View style={{ borderBottomWidth: 1, marginVertical: 15 }}></View>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TouchableOpacity onPress={showReg} activeOpacity={0.4}>
                    <Text style={{ color: "#565656" }}>Register?</Text>
                  </TouchableOpacity>

                  <TouchableHighlight
                    onPress={showForgotpw}
                    underlayColor="#95efff"
                  >
                    <Text style={{ color: "#565656" }}>Forgot Password?</Text>
                  </TouchableHighlight>

                  {openReg && (
                    <Register
                      openReg={openReg}
                      hideReg={hideReg}
                      createUser={createUser}
                      data={data}
                    />
                  )}
                  {openForgotpw && (
                    <ForgotPassword
                      openForgotpw={openForgotpw}
                      hideForgotpw={hideForgotpw}
                      data={data}
                    />
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50,
                  }}
                >
                  <View
                    style={{
                      borderBottomWidth: 1,
                      width: 100,
                      marginHorizontal: 10,
                      marginTop: 5,
                    }}
                  ></View>
                  <View>
                    <Text style={{ fontSize: 16 }}>or</Text>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      width: 100,
                      marginHorizontal: 10,
                      marginTop: 5,
                    }}
                  ></View>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "space-evenly" }}
                >
                  <AntDesign name="google" size={24} color="black" />
                  <AntDesign name="facebook-square" size={24} color="black" />
                  <AntDesign name="instagram" size={24} color="black" />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 50 }} />
          </ScrollView>
          <View style={{ marginTop: 250 }} />
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
    borderColor: "#cdcccc",
    borderRadius: 25,
  },
});
