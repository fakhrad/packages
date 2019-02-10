import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const bodyHeight = (deviceHeight * 90) / 100;
const profileTopHeight = (bodyHeight * 40) / 100;
const imageCircle = (profileTopHeight * 45) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    height: deviceHeight
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: "40%",
    paddingTop: 20,
    flexDirection: "column"
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: "12%"
  },

  headerText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    flex: 1,
    textAlign: "center"
  },
  headerActionsBtn: {
    backgroundColor: "$color2",
    height: 35,
    width: 35,
    borderRadius: 50
  },
  headerActionsIcon: {
    fontSize: "$fontSize4",
    color: "rgba(0,0,0,.3)"
  },
  profileContainer: {
    height: "90%",
    height: profileTopHeight,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: imageCircle,
    height: imageCircle,
    borderWidth: 2,
    borderColor: "$color4",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: (imageCircle * 90) / 100,
    height: (imageCircle * 90) / 100,
    borderRadius: 100
  },
  editImage: {
    position: "absolute",
    width: (imageCircle * 30) / 100,
    height: (imageCircle * 30) / 100,
    borderRadius: 100,
    right: 0,
    backgroundColor: "$color1",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderColor: "$color2",
    borderWidth: 0.5,
    elevation: 10
  },
  editImageIcon: {
    fontSize: "$fontSize5",
    color: "$color2"
  },
  userName: {
    fontFamily: "$fontFamily1",
    marginTop: 10,
    fontSize: "$fontSize4",
    color: "$color3"
  },
  phoneNumber: {
    fontFamily: "$fontFamily1",

    fontSize: "$fontSize5",
    color: "$color4"
  },
  starContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent"
  },
  star: {
    width: 30,
    height: 30
  },

  body: {
    flex: 1,
    backgroundColor: "$color3"
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: "2%",
    height: "17%"
  },
  tabBtn: {
    flex: 1,
    margin: 5,
    borderRadius: 4,
    backgroundColor: "$color2",
    elevation: 2
  },
  tabBtn_selected: {
    borderColor: "$color1",
    borderWidth: 1
  },
  tabBtnIcon: {
    fontSize: "$fontSize2",
    marginBottom: 4,
    color: "$color5"
  },
  tabBtnIcon_selected: {
    color: "$color1"
  },
  tabBtnText: {
    color: "$color5",
    fontSize: "$fontSize5"
  },
  tabBtnText_selected: {
    color: "$color1"
  },
  myLocation: {
    height: "25%",
    backgroundColor: "transparent",
    borderBottomColor: "$color4",
    borderTopColor: "$color4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
    marginTop: 10
  },
  myLocationText: {
    fontSize: "$fontSize4",
    color: "$color1",
    fontFamily: "$fontFamily1"
  },
  myLocationIcon: {
    fontSize: "$fontSize4",
    color: "$color1",
    fontFamily: "$fontFamily1"
  },
  firstTabContainer: {
    display: "none",
    flex: 1,
    backgroundColor: "transparent"
  },
  secondTabContainer: {
    display: "none",
    flex: 1,
    backgroundColor: "transparent"
  },
  activeTabContainer: {
    display: "flex"
  },
  aboutAddress: {
    backgroundColor: "transparent",
    padding: "3%",
    paddingHorizontal: "5%"
  },
  aboutAddressTitle: {
    fontSize: "$fontSize5",
    fontWeight: "bold"
  },
  aboutAddressIcon: {
    marginRight: 10,
    fontSize: "$fontSize2"
  },
  aboutAddressText: {
    textAlign: "left",
    fontSize: "$fontSize5",
    fontFamily: "$fontFamily1"
  }
});
