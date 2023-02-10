import {
  View,
  Text,
  SectionList,
  Image,
  VirtualizedList,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import UseOrientation from "../../components/hooks/Orient";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  {
    title: "Picture Size 4k",
    data: [
      "https://wallpapershome.com/images/pages/ico_h/24205.jpg",
      "https://wallpapershome.com/images/pages/ico_h/20445.jpg",
      "https://wallpapershome.com/images/pages/ico_h/23187.jpg",
      "https://wallpapershome.com/images/pages/ico_h/23165.jpg",
      "https://wallpapershome.com/images/pages/ico_h/20523.jpg",
      "https://wallpapershome.com/images/pages/ico_h/20446.jpg",
      "https://wallpapershome.com/images/pages/ico_h/20329.jpg",
      "https://wallpapershome.com/images/pages/ico_h/20447.jpg",
    ],
  },
  {
    title: "Picture Size 5k",
    data: [
      "https://wallpapershome.com/images/pages/ico_h/23360.jpg",
      "https://wallpapershome.com/images/pages/ico_h/22714.jpg",
      "https://wallpapershome.com/images/pages/ico_h/12199.jpg",
    ],
  },
  {
    title: "Picture Size 8k",
    data: [
      "https://wallpapershome.com/images/pages/ico_h/19715.jpg",
      "https://wallpapershome.com/images/pages/ico_h/21456.jpg",
      "https://wallpapershome.com/images/pages/ico_h/258.jpg",
    ],
  },
];

const getItem = (_data, index) => ({
  id: index,
  title: `__`,
});

const getItemCount = (_data) => 100;

const Item = ({ id, title }) => (
  <View
    style={{
      backgroundColor: id && id % 2 === 1 ? "#fbec4f" : "#f86a6a",
      height: id && id % 2 === 1 ? 30 : 35,
      borderBottomEndRadius: 15,
      borderBottomStartRadius: 15,
    }}
  >
    <Text
      style={{
        fontSize: 22,
        color: id && id % 2 === 1 ? "#f86a6a" : "#fbec4f",
      }}
    >
      {title}
    </Text>
  </View>
);

export default function PictureCategory() {
  const formation = UseOrientation();

  return (
    <View>
      <SectionList
        ListHeaderComponent={
          <>
            <VirtualizedList
              horizontal={true}
              initialNumToRender={100}
              renderItem={({ item }) => (
                <Item id={item.id} title={item.title} />
              )}
              keyExtractor={(item) => item.id}
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </>
        }
        sections={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                alignItems: "center",
                marginVertical: 5,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{
                  width: formation.height > 400 ? 400 : 800,
                  height: 100,
                }}
                source={{
                  uri: item,
                }}
              />
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text
              style={{
                fontSize: formation.height > 400 ? 32 : 60,
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
