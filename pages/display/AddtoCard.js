import {
  View,
  Text,
  Modal,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import UseOrientation from "../../components/hooks/Orient";

export default function AddtoCard({
  addtocard,
  onChanged,
  outAddtocart,
  dataItem,
  number,
  cLoseAddtocart,
}) {
  const formation = UseOrientation();

  return (
    <Modal transparent={true} animationType="slide" visible={addtocard}>
      <View style={{ flex: formation.height > 400 ? 1.5 : 0.2 }} />
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Button
          icon="close-thick"
          mode="contained-tonal"
          buttonColor="#f8fffe"
          onPress={cLoseAddtocart}
        >
          Close
        </Button>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 15,
              }}
            >
              <Image
                style={{ width: 100, height: 100, marginVertical: 25 }}
                source={{
                  uri: dataItem.item.image,
                }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#12008a",
                  }}
                >
                  Amount : {dataItem.item.amount}
                </Text>
              </View>
              <View style={{ borderRadius: 20, borderWidth: 1.2, padding: 8 }}>
                <TextInput
                  onChangeText={onChanged}
                  value={number}
                  placeholder="Count"
                  keyboardType="numeric"
                  selectionColor="#500081"
                />
              </View>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <Button
                style={{ padding: 10 }}
                mode="contained"
                buttonColor="#c25252"
                onPress={outAddtocart}
              >
                Add to cart
              </Button>
            </View>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
}
