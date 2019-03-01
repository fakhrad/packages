import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const productHeight = (deviceHeight * 40) / 100;
const SellerBtnHeight = (deviceHeight * 11) / 100;
const requestInfoHeight = (deviceHeight * 55) / 100;

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
    height: (productHeight * 65) / 100,
    marginBottom: 5
  },
  paging: {
    position: "absolute",
    top:0,
    right:0
  },
  paginationText: {
    fontSize: "$fontSize4"
  },
  productTextContainer: {
    height: (productHeight * 25) / 100,
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

  SellerBtn: {
    backgroundColor: "$color2",
    height: SellerBtnHeight,
    flexDirection: "row",
    paddingHorizontal: "5%",
    elevation: 3,
    alignItems: "center",
    marginVertical: (deviceHeight * 3) / 100,
    borderRadius: 5
  },
  SellerBtnImg: {
    marginRight: "6%",
    width: (deviceWidth * 12) / 100,
    height: (deviceWidth * 12) / 100,
    borderRadius: 100
  },
  SellerBtnText: {
    fontSize: "$fontSize4",
    flex: 1
  },
  SellerBtnArrow: {
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
  requestInfo_top: {
    height: (requestInfoHeight * 20) / 100,
    elevation: 3,
    flexDirection: "row",
    paddingHorizontal: "3%"
  },
  top_left: {
    justifyContent: "center",
    alignItems: "center"
  },
  left_number: {
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: "$color1",
    justifyContent: "center",
    alignItems: "center"
  },
  left_number_text: {
    fontSize: "$fontSize5",
    color: "$color2"
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
