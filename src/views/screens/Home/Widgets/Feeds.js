import { View, Text } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import HomeStyles from "../HomeStyleSheet";

export default function Feeds() {
  return (
    <View>
      <View>
        <Text style={HomeStyles.title}>
          What's
          <Text style={HomeStyles.subTitle}> interesting in celengan</Text>
        </Text>
        <Text style={HomeStyles.subDescription}>
          Don't claim to be an update if you haven't tried this feature!
        </Text>
      </View>
      <View style={HomeStyles.containerBox}>
        <View style={{ ...HomeStyles.box, marginTop: 20 }}>
          <View style={HomeStyles.subBox}>
            <Icons name="help-circle-outline" size={25} color={"#EDBC10"} />
            <Text style={HomeStyles.textBox}>Help center</Text>
          </View>
          <Text style={HomeStyles.descriptionBox}>
            Have problems or questions related to finances? you can post here
          </Text>
          <Text style={HomeStyles.navBox}>See help</Text>
        </View>
        <View style={{ ...HomeStyles.box, marginTop: 20 }}>
          <View style={HomeStyles.subBox}>
            <Icons name="pricetags-outline" size={25} color={"#EDBC10"} />
            <Text style={HomeStyles.textBox}>Voucher promo</Text>
          </View>
          <Text style={HomeStyles.descriptionBox}>
            Let's check various interesting promos in the celengan application
            now!
          </Text>
          <Text style={HomeStyles.navBox}>Click here</Text>
        </View>
      </View>
      <View style={{ ...HomeStyles.containerBox, marginBottom: 45 }}>
        <View style={{ ...HomeStyles.box, marginTop: 20 }}>
          <View style={HomeStyles.subBox}>
            <Icons name="analytics-outline" size={25} color={"#EDBC10"} />
            <Text style={HomeStyles.textBox}>Financial smart</Text>
          </View>
          <Text style={HomeStyles.descriptionBox}>
            Let's be financially literate with finance! you will be briefed by
            the experts
          </Text>
          <Text style={HomeStyles.navBox}>Learn more</Text>
        </View>
        <View style={{ ...HomeStyles.box, marginTop: 20 }}>
          <View style={HomeStyles.subBox}>
            <Icons name="cash-outline" size={25} color={"#EDBC10"} />
            <Text style={HomeStyles.textBox}>Financial tips</Text>
          </View>
          <Text style={HomeStyles.descriptionBox}>
            Financial investment can start from IDR 1 million from IDR 1
            million!
          </Text>
          <Text style={HomeStyles.navBox}>Learn more</Text>
        </View>
      </View>
    </View>
  );
}
