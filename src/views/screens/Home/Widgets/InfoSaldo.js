import React from "react";
import { View, Text } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import HomeStyles from "../HomeStyleSheet";

export default function InfoSaldo() {
  return (
    <View style={HomeStyles.header}>
      <View style={HomeStyles.celengan}>
        <Icons name="card-outline" color={"#395C61"} size={40} />
        <View style={HomeStyles.text}>
          <Text style={HomeStyles.h1}>Celengan</Text>
          <Text style={HomeStyles.h2}>Celengan cash</Text>
        </View>
        <View style={HomeStyles.upgrade}>
          <Text style={HomeStyles.h3}>Upgrade</Text>
        </View>
      </View>
      <View style={HomeStyles.description}>
        <Text style={{ ...HomeStyles.point, marginRight: 50 }}>
          Celengan point
          <Text style={{ color: "#EDBC10" }}> 0</Text>
        </Text>
        <Text style={HomeStyles.h1}>Rp. 195.000</Text>
      </View>
    </View>
  );
}
