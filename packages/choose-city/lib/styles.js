import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default EStyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "$color2",
    justifyContent: "flex-start",
    zIndex: 100
  },
  modal_header: {
    flexDirection: "row",
    backgroundColor: "$color1",
    elevation: 10
  },
  modalClose: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingRight: 20
  },
  modalCloseIcon: {
    fontSize: "$fontSize1",
    color: "$color2"
  },
  modal_header_iconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  changeCityBtn: {
    width:"20%",
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  changeCityBtnIcon: {
    fontSize: "$fontSize1",
    color: "$color2"
  },
  modal_header_iconContainer_input: {
    fontSize: "$fontSize1",
    backgroundColor: "green"
  },
  modal_header_inputContainer: {
    flex: 1,
    backgroundColor: "transparent"
  },
  modal_header_inputContainer_input: {
    fontSize: "$fontSize4",
    marginRight: 10,
    color: "$color2"
  },
  flatListContainer: {
    backgroundColor: "$color2"
  },
  cityItemContainer: {
    backgroundColor: "transparent"
  },
  cityItem: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 15,
    alignItems: "center",
    borderBottomColor: "$color3",
    borderBottomWidth: 1
  },
  cityItemIcon: {
    fontSize: "$fontSize1",
    marginRight: 10
  },
  cityItemText: {
    marginTop: "5%",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: "$fontSize4"
  }
});
