import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Alert,
  RefreshControl
} from "react-native";
import ProductAll from "./display/ProductAll";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BadgeHD from "./display/BadgeHome-Detial";
import Cart from "./page-product/Cart";
import UseOrientation from "../components/hooks/Orient";

export default function Product({ navigation }) {
  const [numCart, setnumCart] = useState(0);
  const [modalCart, setModalCart] = useState(false);
  const [persons, setPersons] = useState([
    {
      id: "1",
      name: "Earnest Green",
      star: 3.46,
      image:
        "https://e0.pxfuel.com/wallpapers/542/850/desktop-wallpaper-dual-monitor-space-cool-hawaii-best-jpg-png-gif-raw-tiff-psd-pdf-and-watch-online.jpg",
      price: 209,
      review: 24,
      amount: 7,
    },
    {
      id: "2",
      name: "Winston Orn",
      star: 2.78,
      image:
        "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 155,
      review: 62,
      amount: 14,
    },
    {
      id: "3",
      name: "Carlton Collins",
      star: 1.54,
      image:
        "https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 145,
      review: 6,
      amount: 5,
    },
    {
      id: "4",
      name: "Malcolm Labadie",
      star: 3.44,
      image:
        "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 194,
      review: 4,
      amount: 5,
    },
    {
      id: "5",
      name: "Michelle Dare",
      star: 2.89,
      image:
        "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 134,
      review: 2,
      amount: 2,
    },
    {
      id: "6",
      name: "Carlton Zieme",
      star: 4.33,
      image:
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 249,
      review: 3,
      amount: 11,
    },
    {
      id: "7",
      name: "Jessie Dickinson",
      star: 2.41,
      image:
        "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 172,
      review: 44,
      amount: 12,
    },
    {
      id: "8",
      name: "Julian Gulgowski",
      star: 0.89,
      image:
        "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 109,
      review: 25,
      amount: 8,
    },
  ]);

  const [data, setData] = useState([])
  const formation = UseOrientation();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const startCart = () => setModalCart(true)
  
  const endCart = () => setModalCart(false)
  
  const addToCard = (amount,id,name,image,price) => {
    setnumCart(numCart + amount);
    setData([
      ...data,
      {
        id,
        name,
        image,
        price,
        amount
      }
    ]);
  }

  const addReview = (id) => {
    setPersons(persons.map(person => {
      if (person.id === id) {
        return { ...person, review: person.review + 1 };
      }
      return person;
    }));
  }

  const reNumCart = () => {
    if(numCart > 0){
      setTimeout(()=>{
        setnumCart(0)
        setData([])
      }, 500)
    }
  }

  const confirm = () => {
    Alert.alert(
      'You want to buy products!',
      '-',
      [
        {text: 'No', onPress: () => console.log('No clicked')},
        {text: 'Yes', onPress: reNumCart},
      ],
      { 
        cancelable: true 
      }
    );
  }
  
  if (!persons) {
    return (
      <View style={{ marginTop: 250 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.bg}>
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
            <Text style={{ color: "#ffffff", fontSize: 18 }}>Product</Text>
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
              <Cart data={data} persons={persons} confirm={confirm} numCart={numCart} modalCart={modalCart} endCart={endCart} />
            )}
          </View>
        </View>
      </View>

      <FlatList
        key={formation.height > 400 ? "rowTwo" : "rowFour"}
        numColumns={formation.height > 400 ? 2 : 4}
        data={persons}
        renderItem={(item) => (
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
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={{ marginTop: 50 }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
