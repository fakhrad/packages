import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default EStyleSheet.create({
  container: {
    height: (deviceHeight * 70) / 100,
    marginVertical: (deviceHeight * 15) / 100,
    marginHorizontal: "5%",
    borderRadius:10
  },
  langsContainer: {
    height: (deviceHeight * 70) / 100,
    marginVertical: (deviceHeight * 15) / 100,
    marginHorizontal: "5%"
  },
  langScrollContent: {
    backgroundColor: "transparent"
  },
  modalHeader: {
    flexDirection: "row",
    elevation: 2,
    paddingVertical: 12
  },
  modaActionBtn: {
    flex: 1,
    backgroundColor: "transparent"
  },
  mainAction: {
    borderRightWidth: 1,
    borderRightColor: "$color5"
  },
  modaActionBtnText: {
    fontSize: "$fontSize4",
    color: "$color2"
  },
  modalCloseContainer: {
    width: "15%",
    backgroundColor: "transparent"
  },
  modalCloseIcon: {
    fontSize: "$fontSize3",
    fontWeight: "normal",
    color: "$color2"
  },
  modalTitleContainer: {
    flex: 1,
    backgroundColor: "transparent"
  },
  modalTitle: {
    fontSize: "$fontSize3",
    color: "$color2",
    textAlign: "center"
  },
  modalDescription: {
    fontSize: "$fontSize6",
    color: "$color3"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "$color2",
    paddingVertical: "3%",
    borderBottomColor: "$color3",
    borderBottomWidth: 1,
    flex: 1
  },
  langRow: {
    flexDirection: "row",
    backgroundColor: "$color2",
    paddingVertical: "3%",
    borderBottomColor: "$color3",
    borderBottomWidth: 1,
    height: (deviceHeight * 10) / 100
  },
  left: {
    width: (deviceWidth * 6) / 100,
    height: (deviceWidth * 6) / 100,
    borderColor: "$color4",
    borderWidth: 1,
    borderRadius: 100,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 3
  },
  radioButtonBg: {
    width: "100%",
    height: "100%",
    flex: 1,
    borderRadius: 100
  },
  center: {
    flex: 1,
    backgroundColor: "transparent"
  },
  themeTitle: {
    fontSize: "$fontSize5",
    alignSelf: "flex-start"
  },
  themeDesc: {
    fontSize: "$fontSize6",
    alignSelf: "flex-start"
  },
  right: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    height: (deviceWidth * 8) / 100,
    width: (deviceWidth * 8) / 100
  },
  langTitle: {
    color: "$color2",
    fontSize: "$fontSize5"
  }
});
