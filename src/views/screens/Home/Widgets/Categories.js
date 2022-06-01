import { View, Text } from "react-native";
import React from "react";
import Icons from 'react-native-vector-icons/Ionicons';
import HomeStyles from "../HomeStyleSheet";

export default function Categories() {
  return (
    <View style={HomeStyles.category}>
      <View style={HomeStyles.subCategory}>
        <Icons name="add-circle-outline" color={"#395C61"} size={24} />
        <Text style={HomeStyles.textCategory}>Top up</Text>
      </View>
      <View style={HomeStyles.subCategory}>
        <Icons name="paper-plane-outline" color={"#395C61"} size={24} />
        <Text style={HomeStyles.textCategory}>Transfer</Text>
      </View>
      <View style={HomeStyles.subCategory}>
        <Icons name="scan-outline" color={"#395C61"} size={24} />
        <Text style={HomeStyles.textCategory}>Scan</Text>
      </View>
      <View style={HomeStyles.subCategory}>
        <Icons name="reader-outline" color={"#395C61"} size={24} />
        <Text style={HomeStyles.textCategory}>History</Text>
      </View>
    </View>
  );
}
