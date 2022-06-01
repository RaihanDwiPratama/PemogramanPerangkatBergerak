import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FA",
    flex: 1,
// ADDED BY FEBRY
    alignItems:'center'
// END ADDED BY FEBRY
  },
  header: {
    width: 353,
    height: 110,
    borderRadius: 20,
    marginTop: 45,
    marginBottom: 31,
//UPDATED BY FEBRY
    //marginHorizontal:30,
//UPDATED BY FEBRY
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFC",
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
    flexDirection: "row",
    marginTop: 20,
  },
  text: {
    marginLeft: 15,
  },
  h1: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    color: "#395C61",
  },
  h2: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#637173",
  },
  upgrade: {
    borderColor: "#EDBC10",
    borderWidth: 1.5,
    width: 70,
    height: 35,
    borderRadius: 20,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  h3: {
    fontFamily: "Roboto_900Black",
    fontSize: 12,
    color: "#EDBC10",
  },
  description: {
    marginTop: 7,
    marginBottom: 17,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#637173",
  },
  category: {
    backgroundColor: "#FFFFFF",
    width: 353,
    height: 71,
    borderRadius: 20,
    marginHorizontal: 30,
    flexDirection: "row",
    shadowColor: "#E8E8FA",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.83,
    shadowRadius: 2,
    elevation: 30,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  subCategory: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  textCategory: {
    color: "#395C61",
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
  },
  title: {
    color: "#EDBC10",
    fontSize: 20,
    fontFamily: "Roboto_900Black",
//UPDATED BY FEBRY    
    textAlign:"center"
    //marginLeft: 30,
//UPDATED BY FEBRY
  },
  subTitle: {
    color: "#395C61",
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
  },
  subDescription: {
    color: "#808D8E",
    fontSize: 13,
    fontFamily: "Roboto_400Regular",
//UPDATED BY FEBRY
    //marginLeft: 30,
//UPDATED BY FEBRY
  },
  containerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    width: 165,
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
    paddingHorizontal: 15
  },
  subBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBox: {
    color: "#395C61",
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    marginLeft: 10,
  },
  descriptionBox: {
    color: "#808D8E",
    fontSize: 10,
    marginTop: 2,
    fontFamily: "Roboto_400Regular",
  },
  navBox: {
    color: "#395C61",
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    marginTop: 5,
  },
  selection: {
    backgroundColor: "#F8F8FA",
    flexDirection: "row",
    marginHorizontal: 17,
  },
  headerSelection: {
    flex: 1,
    backgroundColor: "#F8F8FA",
  },
  menu: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
  subSelection: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#FAFAFC",
    borderColor: "#EDBC10",
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#395C61",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 30,
  },
});

export default HomeStyles;
