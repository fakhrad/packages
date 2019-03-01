import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const userImage = (deviceWidth * 28) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    flex: 1
  },
  header: {
    padding: "4%",
    backgroundColor: "$color1",
    height: (deviceHeight * 20) / 100,
    flexDirection: "column",
    zIndex: 10
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    flex: .5
  },
  headerText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold"
  },
  userContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: (deviceHeight * 15) / 100,
    left: 0,
    right: 0,
    borderRadius: 10,
    height: (deviceHeight * 30) / 100,
    marginHorizontal: "5%",
    backgroundColor: "$color2",
    elevation: 10,
    paddingBottom: "3%",
    zIndex: 100
  },
  userImage: {
    height: userImage,
    width: userImage,
    borderRadius: 100,
    top: -userImage / 2,
    alignSelf: "center",
    position: "absolute",
    borderColor: "$color3",
    borderWidth: 2,
    backgroundColor:"$color2"
  },
  userInfo: {
    marginTop: userImage / 2,
    width: "100%",
    flex: 1
  },
  userName: {
    fontSize: "$fontSize3",
    fontWeight: "bold",
    alignSelf: "center"
  },
  cityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    backgroundColor: "transparent"
  },
  cityIcon: {
    fontSize: "$fontSize4",
    color: "$color5",
    marginRight: 5
  },
  cityText: {
    fontSize: "$fontSize5",
    color: "$color5"
  },
  userActions: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "transparent"
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "$color4",
    borderWidth: 0.5,
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent"
  },
  icon: {
    fontSize: "$fontSize2",
    color: "$color1",
    marginBottom: 3
  },
  value: {
    fontSize: "$fontSize4"
  },
  mainContent: {
    flex: 1,
    paddingTop: (deviceHeight * 30) / 100,
    paddingHorizontal: "5%",
    backgroundColor: "$color2"
  },
  addressContainer: {
    paddingVertical: "3%"
  },
  addressTitle: {
    fontSize: "$fontSize4",
    fontWeight: "bold",
    marginBottom: 10
  },
  products: {
    height: deviceHeight,
    marginTop: "3%",
    backgroundColor: "white"
  },
  productsTitle: {
    fontSize: "$fontSize4",
    fontWeight: "bold"
  }
});
