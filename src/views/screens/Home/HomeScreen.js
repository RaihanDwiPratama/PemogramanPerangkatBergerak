import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import HomeStyles from "./HomeStyleSheet";
import InfoSaldo from "./Widgets/InfoSaldo";
import Categories from "./Widgets/Categories";
import Feeds from "./Widgets/Feeds";
import CategoryTabs from "./Widgets/CategoryTabs";

export function HomeScreen({ navigate }) {
  return (
    <SafeAreaView style={{backgroundColor:'#F8F8FA'}}>
      <ScrollView style={{backgroundColor:'#F8F8FA'}}>
        <View style={HomeStyles.container}>
          <InfoSaldo />
          <Categories />
          <CategoryTabs />
          <Feeds />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
