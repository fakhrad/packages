import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1,
    position: "relative"
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: (deviceHeight * 10) / 100,
    flexDirection: "column",
    zIndex: -1,
    elevation:10,
    position: "relative"
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  headerText: {
    color: "$color2",
    fontSize: "$fontSize4",
    fontFamily: "$fontFamily1",
    flex: 1,
    textAlign: "center"
  },
  filter: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    zIndex: 100
  },
  filterIcon: {
    fontSize: "$fontSize1",
    color: "$color2"
  },
  filterSubMenu: {
    height: deviceHeight * 42 /100,
    width: deviceWidth * 60 /100,
    position: "absolute",
    right: 10,
    top: -15,
    borderRadius: 5,
    elevation: 10,
    zIndex: 100
  },
  filterActionBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    flex: 1,
    paddingHorizontal: "5%",
    borderBottomColor: "$color3",
    borderBottomWidth: 1,
    zIndex: 100
  },
  filterActionBtnText: {
    fontSize: "$fontSize5 * 1.1",
    flex: 1
  },
  filterActionBtnIcon: {
    color: "$color1",
    fontSize: "$fontSize1",
    marginRight: 5
  },
  mainContent: {
    paddingVertical: "3%",
    backgroundColor: "transparent"
  },
  qoutesTitle:{
    fontSize: "$fontSize3",
    marginBottom: '3%',
  },
  qoutes: {
    paddingHorizontal: "5%",
    backgroundColor: "transparent",
    height: (deviceHeight * 60) / 100,
    position: "relative"
  },
  swiper: {
    zIndex:90
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent" , 
    position: "absolute",
    bottom:"3%",
    left:0,
    right:0
  },
  actionBtn: {
    backgroundColor: "$color2",
    width: (deviceWidth * 20) / 100,
    height: (deviceWidth * 20) / 100,
    borderRadius: 100,
    elevation: 1
  },
  centerActionBtn: {
    width: (deviceWidth * 15) / 100,
    height: (deviceWidth * 15) / 100
  },
  actionBtnIcon: {
    fontSize: "$fontSize1"
  },
  centerActionBtnIcon: {
    fontSize: "$fontSize3"
  }
});
