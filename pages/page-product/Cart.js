import { View, Text, Modal, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, Card } from "react-native-paper";
import UseOrientation from "../../components/hooks/Orient";
import { StatusBar } from "expo-status-bar";

export default function Cart({ modalCart, endCart, numCart, confirm, data }) {
  const formation = UseOrientation();

  return (
    <View>
      <StatusBar backgroundColor="#fff" style="auto" />

    <Modal animationType="fade" visible={modalCart}>
      <View style={{ backgroundColor: "#43383c" }}>
        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="left" size={24} color="white" onPress={endCart} />
            <Text onPress={endCart} style={{ color: "#ffffff", fontSize: 16 }}>
              Back
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, color: "#fffefe" }}>Cart</Text>
          </View>
          <View>
            <Text style={{ color: "#43383c" }}>456654</Text>
          </View>
        </View>
      </View>

      {data && (
        <FlatList
          key={formation.height > 400 ? "rowOne" : "rowTwo"}
          numColumns={formation.height > 400 ? 1 : 2}
          data={data}
          renderItem={({ item }) => (
            <View style={{padding:10}}>
              <Card style={{backgroundColor:"#f9e7e7"}}>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 15,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 5,
                    }}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, textAlign: "center" }}>
                      Name
                    </Text>
                    <Text style={{ textAlign: "center" }}>{item.name}</Text>
                  </View>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, textAlign: "center" }}>
                      Price
                    </Text>
                    <Text style={{ textAlign: "center" }}>${item.price}</Text>
                  </View>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 17, textAlign: "center" }}>
                      Amount
                    </Text>
                    <Text style={{ textAlign: "center" }}>{item.amount}</Text>
                  </View>
                </View>
              </Card>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      )}
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Button
          mode="contained"
          style={{ padding: 10 }}
          onPress={confirm}
          buttonColor="#b08080"
        >
          Pay for all {numCart} item
        </Button>
      </View>
    </Modal>
    </View>

  );
}
