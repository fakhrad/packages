import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "$color1",
    paddingTop: "10%",
    alignItems: "center"
  },
  title: {
    color: "$color2",
    fontSize: "$fontSize3"
  },
  description: {
    color: "$color2",
    fontSize: "$fontSize5",
    textAlign: "center",
    marginVertical: "5%"
  },
  codeContainer: {
    flexDirection: "row",
    width: "65%",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  verifyInput: {
    flex: 1,
    marginVertical: "10%",
    marginHorizontal: 7,
    backgroundColor: "rgba(0,0,0,.1)",
    borderBottomColor: "$color2",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: "$fontSize1",
    color: "$color2",
    height: "15%"
  },
  sendCodeText: {
    color: "$color2",
    fontSize: "$fontSize5"
  },
  numKeyContainer: {
    marginTop: "5%",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  numKeyBtn: {
    width: "30%",
    marginVertical: "2.5%",
    height: "20%",
    alignItems: "center"
  },
  numKeyBtnText: {
    color: "$color2",
    fontSize: "$fontSize1 * 1.5"
  },
  numKeyBtnIcon: {
    fontSize: "$fontSize1 * 1.5",
    color: "white"
  }
});
