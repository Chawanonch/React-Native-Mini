import { View, Text } from "react-native";
import React from "react";
import { Linking } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Contact() {
  return (
    <View style={{ padding: 50 ,flex:1}}>
      <View>
        <Button
          mode="elevated"
          onPress={() =>
            Linking.openURL("https://www.facebook.com/ChawanonChgame")
          }
        >
          <Icon name="facebook" size={18} />
          <View style={{ width: 16, height: 1 }} />
          <Text>Facebook</Text>
        </Button>
      </View>
      <View style={{marginTop:25}}>
        <Button
          mode="elevated"
          onPress={() =>
            Linking.openURL("https://www.instagram.com/chawanon_/")
          }
        >
          <Icon name="instagram" size={18} />
          <View style={{ width: 16, height: 1 }} />
          <Text>Instagram</Text>
        </Button>
      </View>

    </View>
  );
}
