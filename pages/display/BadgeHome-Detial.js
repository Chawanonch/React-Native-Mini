import { View, Text } from "react-native";
import React,{useState} from "react";
import { Badge } from "react-native-paper";

export default function BadgeHD({numCart}) {

  return (
    <View>
      {numCart > 0 && (
        <>
          <Badge  style={{ marginTop: -40, marginLeft: 15 }} size={25}>
            {numCart}
          </Badge>
        </>
      )}
    </View>
  );
}
