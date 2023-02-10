import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, List } from "react-native-paper";
import Login from "./page-setting/Login";

const imageBgWIA = {
  uri: "https://wallpapershome.com/images/pages/ico_h/24388.jpg",
};

export default function Setting({ navigation }) {
  const [modalLogin, setModalLogin] = useState(false);
  const [loginout, setLoingOut] = useState(false);
  const [data, setData] = useState([
    {
      username: "chawanon",
      password: "123456",
      email: "c@c.com",
      image:
        "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/330291193_877111683497650_6860554677309659286_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHSHpNmDKmVG6s_eIOgb7G-kHKQNQ1iQO-QcpA1DWJA78TmLsW9JWzZyi_9yQgHHQKcmyySiYjC_J5bJOO3OZzI&_nc_ohc=9mbyTlfsuiEAX-9l05S&_nc_ht=scontent.fbkk10-1.fna&oh=03_AdQem04bXUPuV-RTQAYGTmSADewoe_HfpGpuRjROFmQfnA&oe=640C4793",
    },
  ]);
  const [profile, setProfile] = useState("");

  const user = data.find((c) => c.username === profile);

  const createUser = (username, password, email) => {
    setData([
      ...data,
      {
        username,
        password,
        email,
      },
    ]);
  };

  const showLogin = () => setModalLogin(true);
  const hideLogin = () => setModalLogin(false);

  const changeLogin = (username) => {
    setProfile(username);
    setLoingOut(true);
    setModalLogin(false);
  };

  const changeLogout = () =>
    setTimeout(() => {
      setProfile("");
      setLoingOut(false);
    }, 1000);
    
  return (
    <View>
      <ImageBackground
        source={imageBgWIA}
        resizeMode="cover"
        imageStyle={{ opacity: 0.3 }}
      >
        <ScrollView style={styles.main}>
          <View style={{ marginTop: 24 }}></View>

          <View style={{ backgroundColor: "#43383c" }}>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ color: "#ffffff", fontSize: 18 }}>Setting</Text>
              </View>
            </View>
          </View>
          <List.Accordion
            title="Account"
            left={(props) => <List.Icon {...props} icon="account" />}
            description="บัญชีผู้ใช้"
          >
            <List.Item
              disabled={!user}
              title={!user ? "Not logged in yet" : "Profile"}
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Profile", { data: data, profile: profile })
              }
            />
          </List.Accordion>

          <List.Accordion
            title="Contact"
            description="แจ้งปัญหา"
            left={(props) => <List.Icon {...props} icon="contacts" />}
          >
            <List.Item
              title="Contacts"
              style={styles.listItem}
              onPress={() => navigation.navigate("Contact")}
            />
          </List.Accordion>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Button
              icon={loginout ? "logout" : "login"}
              onPress={loginout ? changeLogout : showLogin}
              style={{ padding: 5 }}
              buttonColor="#5e4c4c"
              mode="contained"
            >
              {loginout ? "Logout" : "Login"}
            </Button>
          </View>
          {modalLogin && (
            <Login
              data={data}
              createUser={createUser}
              modalLogin={modalLogin}
              hideLogin={hideLogin}
              changeLogin={changeLogin}
            />
          )}

          <View style={{ marginTop: 50 }}></View>
        </ScrollView>
        <View style={{marginTop:400}}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginLeft: -40,
    backgroundColor: "#e8ece8",
  },
});
