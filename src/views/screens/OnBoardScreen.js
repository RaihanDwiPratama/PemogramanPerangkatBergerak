import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
//import AppLoading from "expo-app-loading";

//ADDED BY FEBRY @ 1 JUN
import * as SplashScreen from "expo-splash-screen"; //change library APP-LOADING because is Deprecated
import useFonts from "../hooks/useFonts"; //change the font become EXTERNAL
//END ADDED BY FEBRY @ 1 JUN

export default function OnBoardScreen({ navigation }) {

//ADDED BY FEBRY @ 1 JUN
  const [fontIsReady, SetFontIsReady] = useState();

  // SETTUP REACT HOOKS
    //HOOK USEEFFECT
    useEffect(() => {
        async function prepare() {
        try {
            await SplashScreen.preventAutoHideAsync();
            await useFonts();
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (e) {
            console.warn(e);
        } finally {
            SetFontIsReady(true);
        }
        }

        prepare();
    }, []);
    //END HOOK USEEFFECT

    //HOOK USECALLBACK
    const onLayoutRootView = useCallback(async () => {
        if (fontIsReady) {
        SetFontIsReady(true);
        await SplashScreen.hideAsync();
        }
    }, [fontIsReady]);
    if (!fontIsReady) {
        return null;
    }
    //END HOOK USECALLBACK
  // END SETTUP RFC HOOKS
//END ADDED BY FEBRY @ 1 JUN

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={onLayoutRootView}
      //onLayoutRootView => Load font if is ready
    >
      <ScrollView>
        <View style={styles.header}>
          <Image source={require("../../assets/bubble.png")} />
          <Text style={styles.headerText}>Celengan</Text>
        </View>
        <Text style={styles.title}>Find the way to manage your finance</Text>
        <Text style={styles.description}>
          prepare your savings to prepare for the future with us
        </Text>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Navigation")}
        >
          <Text style={styles.textBtn}>Get Started</Text>
          <Ionicons
            name="arrow-forward"
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    marginTop: 60,
    marginHorizontal: 105,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#395C61",
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    marginLeft: 12,
  },
  title: {
    marginTop: 258,
    color: "#395C61",
    fontFamily: "Roboto_700Bold",
    fontSize: 28,
    marginHorizontal: 30,
    textAlign: "center",
  },
  description: {
    marginTop: 8,
    color: "#637173",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    marginHorizontal: 68,
    textAlign: "center",
  },
  btn: {
    flexDirection: "row",
    marginTop: 77,
    width: 167,
    height: 54,
    borderRadius: 12,
    backgroundColor: "#395C61",
    marginHorizontal: "29%",
  },
  textBtn: {
    marginVertical: 15,
    color: "#FFFFFF",
    fontFamily: "Roboto_900Black",
    fontSize: 17,
    marginRight: 9,
    marginLeft: 17,
  },
  icon: {
    marginVertical: 12,
    marginHorizontal: 5,
  },
});
