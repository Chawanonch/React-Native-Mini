import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
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
  uri: "https://wallpapershome.com/images/pages/ico_h/18950.jpg",
};
export default function Register({ openReg, hideReg, createUser, data }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [submitVa, setSubmitVa] = useState(false);
  
  const formation = UseOrientation();

  let checkUserName = /^[a-z0-9A-Z-_]+$/;
  let checkPassword = /^[a-z0-9A-Z-_]+$/;
  let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const userName = data.find((c) => c.username === username);
  const userEmail = data.find((c) => c.email === email);
  
  const createUsers = () => {
    setSubmitVa(true)
    if (
      checkUserName.test(username) &&
      username.length > 4 &&
      checkPassword.test(password) &&
      password.length > 4 &&
      checkEmail.test(email)
    ) {
      if (userName) {
          Alert.alert(
            "Already have an account ","Username : "+ username 
          );
      }
      else if(userEmail){
        Alert.alert(
          "Already have an user email?","Email : "+ email
        );
      } 
      else {
        Alert.alert("Completed registration \nPlease wait a moment.");
        setTimeout(() => {
          createUser(username, password, email);
          hideReg();
        }, 1000);
      }
    } else {
      Alert.alert("Error","Please complete the information.");
    }
  };

  return (
    <View>
    <StatusBar backgroundColor="#fff" style="auto" />
    <Modal animationType="fade" visible={openReg}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="left" size={24} color="#000" onPress={hideReg} />
          <Text onPress={hideReg} style={{ color: "#000000", fontSize: 16 }}>
            Back
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 24 }}>Register</Text>
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
                      borderColor:
                        submitVa && (
                          checkUserName.test(username) && username.length > 4
                            ? userName
                              ? userName.username === username && "#ffbf00"
                              : "#0faf06"
                          : "#ff0000"
                        )
                    },
                  ]}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
                {submitVa && (checkUserName.test(username) && username.length > 4 ? (
                  <Text style={{ marginTop: -10 }}>
                    {userName
                      ? userName.username === username && (
                          <Text style={{ color: "#ffbf00" }}>
                            Already have an account
                          </Text>
                        )
                      : ""}
                  </Text>
                ) : (
                  <Text style={{ color: "#ff0000", marginTop: -10 }}>
                    Enter greater than or equal to 5 (a-z,0-9)
                  </Text>
                ))}
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor:
                      submitVa && (
                        checkPassword.test(password) && password.length > 4
                          ? "#0faf06"
                          : "#ff0000"
                          )
                    },
                  ]}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                {submitVa && (checkPassword.test(password) && password.length > 4 ? (
                  <></>
                ) : (
                  <Text style={{ color: "#ff0000", marginTop: -10 }}>
                    Enter greater than or equal to 5 (a-z,0-9)
                  </Text>
                ))}
                <TextInput
                  style={[
                    styles.input,
                    {
                      borderColor: submitVa && 
                      (checkEmail.test(email)
                        ? userEmail
                          ? userEmail.email === email && "#ffbf00"
                          : "#0faf06"
                        : "#ff0000"
                        )
                    },
                  ]}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                {submitVa && (checkEmail.test(email) ? (
                  <Text style={{ marginTop: -10 }}>
                    {userEmail
                      ? userEmail.email === email && (
                          <Text style={{ color: "#ffbf00" }}>
                            Already have an email
                          </Text>
                        )
                      : ""}
                  </Text>
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
                  onPress={createUsers}
                >
                  Register
                </Button>
              </View>
              <View style={{ marginTop: 15 }} />
            </View>
          </View>
          <View style={{marginTop:50}}/>

        </ScrollView>
        <View style={{ marginTop: 350 }} />
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
