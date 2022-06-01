import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreenOld() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.celengan}>
                    <Icons name='card-outline' color={'#395C61'} size={40} />
                    <View style={styles.text}>
                        <Text style={styles.h1}>Celengan</Text>
                        <Text style={styles.h2}>Celengan cash</Text>
                    </View>
                    <View style={styles.upgrade}>
                        <Text style={styles.h3}>Upgrade</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={{...styles.point, marginRight: 50,}}>Celengan point
                        <Text style={{color: '#EDBC10'}}> 0</Text>
                    </Text>
                    <Text style={styles.h1}>Rp. 195.000</Text>
                </View>
            </View>
            <View style={styles.category}>
                <View style={styles.subCategory}>
                    <Icons name='add-circle-outline' color={'#395C61'} size={24} />
                    <Text style={styles.textCategory}>Top up</Text>
                </View>
                <View style={styles.subCategory}>
                    <Icons name='paper-plane-outline' color={'#395C61'} size={24} />
                    <Text style={styles.textCategory}>Transfer</Text>
                </View>
                <View style={styles.subCategory}>
                    <Icons name='scan-outline' color={'#395C61'} size={24} />
                    <Text style={styles.textCategory}>Scan</Text>
                </View>
                <View style={styles.subCategory}>
                    <Icons name='reader-outline' color={'#395C61'} size={24} />
                    <Text style={styles.textCategory}>History</Text>
                </View>
            </View>
            <Text style={styles.title}>What's 
                <Text style={styles.subTitle}> interesting in celengan</Text>
            </Text>
            <Text style={styles.subDescription}>Don't claim to be an update if you haven't tried this feature!</Text>
            <View style={styles.containerBox}>
                <View style={{...styles.box, marginTop: 20}}>
                    <View style={styles.subBox}>
                        <Icons name='help-circle-outline' size={25} color={'#EDBC10'} />
                        <Text style={styles.textBox}>Help center</Text>
                    </View>
                    <Text style={styles.descriptionBox}>Have problems or questions related to finances? you can post here</Text>
                    <Text style={styles.navBox}>See help</Text>
                </View>
                <View style={{...styles.box, marginTop: 20}}>
                    <View style={styles.subBox}>
                        <Icons name='pricetags-outline' size={25} color={'#EDBC10'} />
                        <Text style={styles.textBox}>Voucher promo</Text>
                    </View>
                    <Text style={styles.descriptionBox}>Let's check various interesting promos in the celengan application now!</Text>
                    <Text style={styles.navBox}>Click here</Text>
                </View>
            </View>
            <View style={{...styles.containerBox, marginBottom: 45}}>
                <View style={{...styles.box, marginTop: 20}}>
                    <View style={styles.subBox}>
                        <Icons name='analytics-outline' size={25} color={'#EDBC10'} />
                        <Text style={styles.textBox}>Financial smart</Text>
                    </View>
                    <Text style={styles.descriptionBox}>Let's be financially literate with finance! you will be briefed by the experts</Text>
                    <Text style={styles.navBox}>Learn more</Text>
                </View>
                <View style={{...styles.box, marginTop: 20}}>
                    <View style={styles.subBox}>
                        <Icons name='cash-outline' size={25} color={'#EDBC10'} />
                        <Text style={styles.textBox}>Financial tips</Text>
                    </View>
                    <Text style={styles.descriptionBox}>Financial investment can start from IDR 1 million from IDR 1 million!</Text>
                    <Text style={styles.navBox}>Learn more</Text>
                </View>
            </View>
            <Navigation />
        </ScrollView>
    </SafeAreaView>
  )
}

function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#395C61',
                tabBarInactiveTintColor: 'rgba(57, 92, 97, 0.45)',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'transparent'},
                tabBarIndicatorStyle: { backgroundColor: '#EDBC10', width: 60 },
            }}
        >
            <Tab.Screen name="Selection" component={SelectionScreen} />
            <Tab.Screen name="Bill" component={BillScreen} />
            <Tab.Screen name="Insurance" component={InsuranceScreen} />
        </Tab.Navigator>
    )
}

function SelectionScreen() {
  return (
    <View style={styles.headerSelection}>
        <View style={styles.selection}>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='bar-chart-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Invest</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='umbrella-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Protection</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='globe-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Data plans</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='wifi-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Wifi</Text>
            </View>
        </View>
        <View style={styles.selection}>
            <View style={{...styles.menu}}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='bed-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Furniture</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='phone-portrait-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Credit</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='pricetag-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>Deals</Text>
            </View>
            <View style={styles.menu}> 
                <View style={{...styles.subSelection, marginTop: 20}}>
                    <Icons name='grid-outline' size={24} color={'#637173'} />
                </View>
                <Text style={{...styles.point, marginTop: 5}}>More</Text>
            </View>
        </View>
    </View>
  )
}

function BillScreen() {
  return (
    <Text>Settings</Text>
  )
}

function InsuranceScreen() {
  return (
    <Text>Settings</Text>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8FA',
        flex: 1
    },
    header: {
        width: 353,
        height: 110,
        borderRadius: 20,
        marginTop: 45,
        marginBottom: 31,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFC',
        shadowColor: "#E8E8FA",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.67,
        shadowRadius: 5,
        elevation: 30,
    },
    celengan: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text: {
        marginLeft: 15
    },
    h1: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        color: '#395C61'
    },
    h2: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#637173'
    },
    upgrade: {
        borderColor: '#EDBC10',
        borderWidth: 1.5,
        width: 70,
        height: 35,
        borderRadius: 20,
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h3: {
        fontFamily: 'Roboto_900Black',
        fontSize: 12,
        color: '#EDBC10',
    },
    description: {
        marginTop: 7, 
        marginBottom: 17,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    point: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#637173'
    },
    category: {
        backgroundColor: '#FFFFFF',
        width: 353,
        height: 71,
        borderRadius: 20,
        marginHorizontal: 30,
        flexDirection: 'row',
        shadowColor: "#E8E8FA",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.83,
        shadowRadius: 2,
        elevation: 30,
        paddingHorizontal: 15,
        marginBottom: 30
    },
    subCategory: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14
    },
    textCategory: {
        color: '#395C61',
        fontFamily: 'Roboto_400Regular',
        fontSize: 15
    },
    title: {
        color: '#EDBC10',
        fontSize: 20,
        fontFamily: 'Roboto_900Black',
        marginLeft: 30
    },
    subTitle: {
        color: '#395C61',
        fontSize: 18,
        fontFamily: 'Roboto_500Medium'
    },
    subDescription: {
        color: '#808D8E',
        fontSize: 13,
        fontFamily: 'Roboto_400Regular',
        marginLeft: 30
    },
    containerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35
    },
    box: {
        backgroundColor: '#FAFAFC',
        width: 165 ,
        height: 120,
        borderRadius: 20,
        shadowColor: "#E8E8FA",
        shadowOffset: {
        width: 4,
        height: 4,
        },
        shadowOpacity: 0.67,
        shadowRadius: 2,
        elevation: 50,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    subBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBox: {
        color: '#395C61',
        fontSize: 14,
        fontFamily: 'Roboto_400Regular',
        marginLeft: 10
    },
    descriptionBox: {
        color: '#808D8E',
        fontSize: 10,
        marginTop: 2,
        fontFamily: 'Roboto_400Regular',
    },
    navBox: {
        color: '#395C61',
        fontSize: 12,
        fontFamily: 'Roboto_500Medium',
        marginTop: 5
    },
    selection: {
        backgroundColor: '#F8F8FA',
        flexDirection: 'row',
        marginHorizontal: 17,
    },
    headerSelection: {
        flex: 1,
        backgroundColor: '#F8F8FA',
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12
    },
    subSelection: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: '#FAFAFC',
        borderColor: '#EDBC10',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#395C61",
        shadowOffset: {
        width: 2,
        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 30,
    }
})
