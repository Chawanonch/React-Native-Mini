import {
  TextInput,
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import ProductAll from "../display/ProductAll";
import { Rating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BadgeHD from "../display/BadgeHome-Detial";
import Cart from "./Cart";
import AddtoCard from "../display/AddtoCard";
import { StatusBar } from "expo-status-bar";

export default function Productdt({
  visible,
  dataItem,
  onCancel,
  persons,
  numCart,
  addToCard,
  modalCart,
  startCart,
  endCart,
  navigation,
  confirm,
  data,
  addReview,
}) {
  const [number, onChangeNumber] = useState(0);
  const [addtocard, setAddtocard] = useState(false);

  function openAddtocart() {
    setAddtocard(true);
  }

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }
    onChangeNumber(newText);
  };

  function outAddtocart() {
    Number(number);
    if (number > dataItem.item.amount) {
      alert("Quantity Count.... \nplease try again");
      onChangeNumber("");
    } else {
      addToCard(
        Number(number),
        dataItem.item.id,
        dataItem.item.name,
        dataItem.item.image,
        dataItem.item.price
      );
      dataItem.item.amount -= number;
      onChangeNumber("");
      setAddtocard(false);
    }
  }

  function cLoseAddtocart() {
    setAddtocard(false);
  }

  const review = () => {
    addReview(dataItem.item.id);
  };

  return (
    <View>
      <StatusBar backgroundColor="#fff" style="auto" />
      <Modal animationType="fade" visible={visible}>
        <>
          <View style={{ backgroundColor: "#43383c" }}>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="left"
                  size={24}
                  color="white"
                  onPress={onCancel}
                />
                <Text
                  onPress={onCancel}
                  style={{ color: "#ffffff", fontSize: 16 }}
                >
                  Back
                </Text>
              </View>
              <View>
                <Feather
                  onPress={startCart}
                  name="shopping-cart"
                  size={24}
                  color="white"
                />
                <BadgeHD numCart={numCart} />
                {modalCart && (
                  <Cart
                    data={data}
                    confirm={confirm}
                    numCart={numCart}
                    modalCart={modalCart}
                    endCart={endCart}
                  />
                )}
              </View>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                flex: 1,
                padding: 20,
                backgroundColor: addtocard ? "#b1b0b0" : "#fff",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{
                    width: 250,
                    height: 250,
                    marginVertical: 25,
                    opacity: addtocard ? 0.5 : 1,
                  }}
                  source={{
                    uri: dataItem.item.image,
                  }}
                />
              </View>
              <View style={{ padding: 15 }}>
                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: 28,
                        color: addtocard ? "#646363" : "#000",
                      }}
                    >
                      {dataItem.item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <View style={{ marginVertical: 8 }}>
                        <Rating
                          fractions={1}
                          startingValue={dataItem.item.star}
                          imageSize={22}
                          tintColor={addtocard ? "#b1b0b0" : "#fff"}
                          readonly
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: addtocard ? "#646363" : "#000" }}>
                          ({dataItem.item.review} reviews)
                        </Text>
                        <Pressable
                          onPress={review}
                          style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? "rgb(144, 249, 121)"
                                : "#00ff0d",
                              opacity: addtocard ? 0.5 : 1,
                            },
                            { marginLeft: 5 },
                          ]}
                        >
                          {({ pressed }) => (
                            <Text>{pressed ? "Pressed!" : "Add"}</Text>
                          )}
                        </Pressable>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {dataItem.item.price >= 150 ? (
                          <>
                            <Text
                              style={{
                                color: "#777777",
                                marginRight: 10,
                                textDecorationLine: "line-through",
                                fontSize: 22,
                              }}
                            >
                              ${dataItem.item.price * 6}
                            </Text>
                            <Text
                              style={{
                                color: addtocard ? "#d76c6c" : "#e93a3a",
                                fontSize: 28,
                              }}
                            >
                              ${dataItem.item.price}
                            </Text>
                          </>
                        ) : (
                          <>
                            <Text style={{ color: "#111111", fontSize: 28 }}>
                              ${dataItem.item.price}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 10,
                      color: addtocard ? "#646363" : "#000",
                    }}
                  >
                    About this item
                  </Text>
                  <View>
                    <Text style={styles.size}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: addtocard ? "#b1b0b0" : "#fff" }}>
              <View>
                <Text
                  style={{
                    fontSize: 32,
                    textAlign: "center",
                    marginTop: 20,
                    fontWeight: "bold",
                    color: addtocard ? "#646363" : "#000",
                  }}
                >
                  Other products
                </Text>
              </View>
              <FlatList
                horizontal={true}
                data={persons}
                renderItem={(item) => (
                  <>
                    {item.item.id === dataItem.item.id ? (
                      <></>
                    ) : (
                      <View style={{ opacity: addtocard ? 0.5 : 1 }}>
                        <ProductAll
                          addReview={addReview}
                          data={data}
                          confirm={confirm}
                          dataItem={item}
                          persons={persons}
                          numCart={numCart}
                          startCart={startCart}
                          endCart={endCart}
                          addToCard={addToCard}
                          modalCart={modalCart}
                          navigation={navigation}
                        />
                      </View>
                    )}
                  </>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={{ marginTop: 10 }}></View>
          </ScrollView>
          <View style={{ backgroundColor: addtocard ? "#b1b0b0" : "#fff" }}>
            <View style={{ marginVertical: 20, marginHorizontal: 30 }}>
              <Button
                style={{ padding: 10 }}
                mode="contained"
                buttonColor="#c25252"
                onPress={openAddtocart}
              >
                Add To Cart
              </Button>
              {addtocard && (
                <AddtoCard
                  dataItem={dataItem}
                  number={number}
                  addtocard={addtocard}
                  onChanged={onChanged}
                  outAddtocart={outAddtocart}
                  cLoseAddtocart={cLoseAddtocart}
                  navigation={navigation}
                />
              )}
            </View>
          </View>
        </>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  size: {
    fontSize: 16,
    color: "#959494",
  },
});
