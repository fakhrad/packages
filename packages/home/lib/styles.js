import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  header: {
    backgroundColor: "$color3",
    flexDirection: "column"
  },
  headerContainer: {
    flexDirection: "row",
    height: "100%",
    backgroundColor: "transparent"
  },
  headerLeft: {
    width: "18%",
    height: "100%",
    alignItems: "flex-start",
    paddingLeft: "4%",
    backgroundColor: "$color1",
    borderBottomRightRadius: 200
  },
  headerCenter: {
    backgroundColor: "transparent",
    flex: 1
  },
  headerRight: {
    flexDirection: "row",
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  headerBtn: {
    marginRight: 20,
    backgroundColor: "transparent"
  },
  headerIcon: {
    color: "$color2",
    fontSize: "$fontSize2"
  },
  headerIconBell: {
    color: "$color5"
  },
  headerIconInfo: {
    color: "$color5"
  },
  body: {
    flex: 1,
    backgroundColor: "$color3"
  },
  homeImage: {
    height: "100%"
  },
  homeTitle: {
    fontSize: "$fontSize1",
    fontFamily: "$fontFamily1",
    backgroundColor: "transparent"
  },
  homeDescription: {
    fontSize: "$fontSize6",
    fontFamily: "$fontFamily1",
    backgroundColor: "transparent"
  },

  btnContainer: {
    flexDirection: "row",
    padding: "2%",
    paddingBottom: "4%",
    height: "22%",
    backgroundColor: "transparent"
  },
  homeBtn: {
    flex: 1,
    height: "100%",
    backgroundColor: "$color2",
    margin: 5,
    borderRadius: 4
    // elevation: 1.5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 20 },
    // shadowOpacity: .2,
    // borderRadius: 2,
  },
  homeBtnContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  homeBtnIcon: {
    fontSize: "$fontSize1",
    color: "$color1"
  },
  homeBtnText: {
    marginTop: 10,
    fontSize: "$fontSize6",
    fontFamily: "$fontFamily1"
  },
  toggleBtn: {
    backgroundColor: "transparent"
  }
});
