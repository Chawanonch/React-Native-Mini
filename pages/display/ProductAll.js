import { FlatList, StyleSheet, View, Text } from "react-native";
import React,{useEffect} from "react";
import Productdt from "../page-product/Productdt";
import { useState } from "react";
import { Card } from "react-native-paper";
import UseOrientation from "../../components/hooks/Orient";

export default function ProductAll({
  dataItem,
  persons,
  numCart,
  addToCard,
  startCart,
  endCart,
  modalCart,
  addtocard,
  navigation,
  confirm,
  data,
  addReview,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const formation = UseOrientation();

  function start() {
    setModalVisible(true);
  }

  function end() {
    setModalVisible(false);
  }

  return (
    <View style={{backgroundColor: addtocard ? "#b1b0b0" : "#fff",paddingHorizontal: 10,marginTop: 10}}>
      <Card
        onPress={start}
        style={{ width: formation.height > 400 ? 175 : 182 }}
      >
        <Card.Cover
          style={{ padding: 8 }}
          source={{
            uri: dataItem.item.image,
          }}
        />
        <Card.Content>
          <Text style={{ fontSize: 16, color: "#2c2b2b" }}>
            {dataItem.item.name}
          </Text>

          <View style={{ flexDirection: "row" }}>
            {dataItem.item.price >= 150 ? (
              <>
                <Text
                  style={{
                    color: "#777777",
                    marginRight: 10,
                    textDecorationLine: "line-through",
                  }}
                >
                  ${dataItem.item.price * 6}
                </Text>
                <Text style={{ color: "#e93a3a" }}>${dataItem.item.price}</Text>
              </>
            ) : (
              <>
                <Text style={{ color: "#111111" }}>${dataItem.item.price}</Text>
              </>
            )}
          </View>
        </Card.Content>
      </Card>
      {modalVisible && (
        <Productdt
          addReview={addReview}
          data={data}
          confirm={confirm}
          visible={modalVisible}
          dataItem={dataItem}
          persons={persons}
          numCart={numCart}
          addToCard={addToCard}
          modalCart={modalCart}
          startCart={startCart}
          endCart={endCart}
          onCancel={end}
          navigation={navigation}
        />
      )}
    </View>
  );
}
