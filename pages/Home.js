import {
  Button,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Switch,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import React, { useState } from "react";
import UseOrientation from "../components/hooks/Orient";

const imageBgWIA = {
  uri: "https://wallpapershome.com/images/pages/ico_h/16431.jpg",
};

export default function Home({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const formation = UseOrientation();

  const cilckLoaded = () => {
    setLoaded(true);

    setTimeout(() => {
      setLoaded(false);
    }, 1500);

    setTimeout(() => {
      navigation.navigate("PictureCategory");
    }, 1800);
  };

  return (
    <View>
      <ImageBackground
        source={imageBgWIA}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
      >
        <ScrollView>
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
                <Text style={{ color: "#ffffff", fontSize: 18 }}>Home</Text>
              </View>
            </View>
          </View>
          <View>
            <ImageSlider
              data={[
                {
                  img: "https://wallpapershome.com/images/pages/ico_h/23175.jpg",
                },
                {
                  img: "https://wallpapershome.com/images/pages/ico_h/19730.jpg",
                },
                {
                  img: "https://wallpapershome.com/images/pages/ico_h/19731.jpg",
                },
              ]}
              autoPlay={false}
              timer={2000}
              preview={false}
              // onItemChanged={(item) => console.log("item", item)}
              closeIconColor="#fff"
              caroselImageStyle={{
                width: formation.height > 400 ? 400 : 800,
                height: formation.height > 400 ? 225 : 250,
              }}
            />
          </View>

          <View style={{ padding: 5 }}>
            <View
              style={{
                marginTop: 5,
                padding: 15,
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: "#fff",
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 32 }}>What is Art!</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81ffcd" }}
                  thumbColor={isEnabled ? "#4bf564" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              {isEnabled ? (
                <View>
                  <View>
                    <Text style={{ fontSize: 17.5 }}>
                      {"\t"}
                      {"\t"}Art is a diverse range of human activity, and
                      resulting product, that involves creative or imaginative
                      talent expressive of technical proficiency, beauty,
                      emotional power, or conceptual ideas.
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Image
                      style={{
                        width: formation.height > 400 ? 100 : 230,
                        height: 100,
                        marginHorizontal: 10,
                      }}
                      source={{
                        uri: "https://wallpapershome.com/images/pages/ico_h/24116.jpg",
                      }}
                    />
                    <Image
                      style={{
                        width: formation.height > 400 ? 100 : 230,
                        height: 100,
                        marginHorizontal: 10,
                      }}
                      source={{
                        uri: "https://wallpapershome.com/images/pages/ico_h/23244.jpg",
                      }}
                    />
                    <Image
                      style={{
                        width: formation.height > 400 ? 100 : 230,
                        height: 100,
                        marginHorizontal: 10,
                      }}
                      source={{
                        uri: "https://wallpapershome.com/images/pages/ico_h/23165.jpg",
                      }}
                    />
                  </View>
                  <View style={{ marginTop: 10, zIndex: 1 }}>
                    <Button
                      onPress={cilckLoaded}
                      title={!loaded ? "Picture Category" : ""}
                      color="#54a239"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                  <ActivityIndicator
                    size="small"
                    color="#000"
                    style={{ top: -25, zIndex: !loaded ? 0 : 2 }}
                    animating={loaded}
                  />
                </View>
              ) : (
                <View>
                  <Text style={{ fontSize: 18 }}>
                    {"\t"}
                    {"\t"}To view information about what art is, press the
                    switch.
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={{ marginTop: 400 }} />
        </ScrollView>
        <View style={{ marginTop: 300 }}></View>
      </ImageBackground>
    </View>
  );
}
