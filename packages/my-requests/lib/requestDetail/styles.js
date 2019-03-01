import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const productHeight = (deviceHeight * 40) / 100;
const offersBtnHeight = (deviceHeight * 11) / 100;
const requestInfoHeight = (deviceHeight * 55) / 100;
const qouteInfoHeight = (deviceHeight * 35) / 100;

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
    elevation: 10
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
  backButton: {},
  mainContent: {
    backgroundColor: "transparent",
    height: deviceHeight,
    padding: "5%"
  },
  product: {
    height: productHeight,
    justifyContent: "center",
    padding: (productHeight * 5) / 100,
    elevation: 5,
    borderRadius: 5
  },
  productImg: {
    width: "100%",
    height: (productHeight * 60) / 100,
    marginBottom: 5
  },
  productTextContainer: {
    height: (productHeight * 30) / 100,
    justifyContent: "center"
  },
  productTitle: {
    fontSize: "$fontSize6",
    color: "$color1"
  },
  productName: {
    fontSize: "$fontSize4"
  },
  productDesc: {
    fontSize: "$fontSize6",
    color: "$color5"
  },

  offersBtn: {
    backgroundColor: "$color2",
    height: offersBtnHeight,
    flexDirection: "row",
    paddingHorizontal: "5%",
    elevation: 3,
    alignItems: "center",
    marginVertical: (deviceHeight * 3) / 100,
    borderRadius: 5
  },
  offersBtnIcon: {
    fontSize: "$fontSize2",
    color: "$color1",
    marginRight: "6%"
  },
  offersBtnText: {
    fontSize: "$fontSize4",
    flex: 1
  },
  offersBtnArrow: {
    fontSize: "$fontSize4",
    color: "$color4"
  },
  requestBoxTitle: {
    fontSize: "$fontSize5",
    color: "$color5",
    marginBottom: (deviceHeight * 3) / 100
  },
  requestInfo: {
    marginBottom: (deviceHeight * 5) / 100,
    height: requestInfoHeight,
    elevation: 3,
    borderRadius: 5,
    padding: "5%"
  },
  qouteInfo: {
    height: qouteInfoHeight
  },
  requestInfo_top: {
    height: (requestInfoHeight * 20) / 100,
    elevation: 3,
    flexDirection: "row",
    paddingHorizontal: "3%"
  },
  qouteInfo_top: {
    height: (qouteInfoHeight * 35) / 100
  },
  top_left: {
    justifyContent: "center",
    alignItems: "center",
    width: (deviceWidth * 12) / 100
  },
  left_number: {
    height: (deviceWidth * 10) / 100,
    width: (deviceWidth * 10) / 100,
    borderRadius: deviceWidth / 2,
    backgroundColor: "$color1",
    justifyContent: "center",
    alignItems: "center"
  },
  left_number_text: {
    fontSize: "$fontSize5",
    color: "$color2"
  },
  left_userImage: {
    height: (deviceWidth * 12) / 100,
    width: (deviceWidth * 12) / 100,
    borderRadius: deviceWidth / 2,
    borderColor: "$color1",
    borderWidth: 3
  },
  top_center: {
    justifyContent: "center",
    flex: 1,
    paddingLeft: "5%"
  },
  center_title: {
    fontSize: "$fontSize4"
  },
  center_desc: {
    fontSize: "$fontSize6",
    color: "$color5"
  },
  top_right: {
    justifyContent: "center",
    alignItems: "center"
  },
  right_text: {
    fontSize: "$fontSize4",
    fontWeight: "bold"
  },
  requestInfo_bottom: {
    height: (requestInfoHeight * 72) / 100,
    paddingVertical: "3%"
  },
  qouteInfo_bottom: {
    height: (qouteInfoHeight * 55) / 100
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  rowTitle: {
    fontSize: "$fontSize5",
    marginRight: 10
  },
  rowValue: {
    fontSize: "$fontSize5",
    color: "$color5"
  }
});
