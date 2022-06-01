import { View, Text, TouchableOpacity, Dimensions,StyleSheet } from "react-native";
import React, { useState } from "react";

const SelectionScreen = () => {
  return <Text>This is the selection screen</Text>;
};
const BillScreen = () => {
  return <Text>This is the bill screen</Text>;
};
const InsuranceScreen = () => {
  return <Text>This is the Insurance screen</Text>;
};

const ItemName = [
  { id: 1, name: "Selection" },
  { id: 2, name: "Bill" },
  { id: 3, name: "Insurance" },
];

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const windowWidth = Dimensions.get("window").width;

  const ButtonItem = (param) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handlerChangeTab(param)}
      >
        <View
          style={{
            padding: 15,
            borderBottomWidth: param.selectedTab === param.id ? 2 : 0,
            borderBottomColor: param.selectedTab === param.id ? "orange" : "",
          }}
        >
          <Text
            style={{
              color: param.selectedTab === param.id ? "orange" : "grey",
              fontWeight: "bold",
            }}
          >
            {param.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlerChangeTab = (param) => {
    setActiveTab(param.id);
  };

  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
        marginBottom: 30,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {ItemName.map((v, index) => (
          <ButtonItem
            id={v.id}
            title={v.name}
            key={index}
            selectedTab={activeTab}
          />
        ))}
      </View>

      <View style={{ flex: 1, flexDirection: "column",marginTop:15 }}>
        <View tabIndex={1} style={{...styles.tabContent, display:((activeTab == 1) ? 'flex' : 'none')}} >
          <SelectionScreen />
        </View>
        <View tabIndex={2} style={{...styles.tabContent, display:((activeTab == 2) ? 'flex' : 'none')}} >
          <BillScreen />
        </View>
        <View tabIndex={3} style={{...styles.tabContent, display:((activeTab == 3) ? 'flex' : 'none')}} >
          <InsuranceScreen />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tabContent:{
        display:'none',
        alignItems:'flex-start',
        paddingHorizontal:25
    }
})
