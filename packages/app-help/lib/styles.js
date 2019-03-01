import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width, height: deviceHeight } = Dimensions.get("window");
const helpRowHeight = (((deviceHeight * 80) / 100) * 12) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color3",
    flex: 1
  },
  header: {
    paddingHorizontal: "4%",
    backgroundColor: "$color1",
    height: "50%",
    flexDirection: "column",
    elevation: 10
  },
  headerActions: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    height: "20%"
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
  headerBody: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  headerContentTitle: {
    fontSize: "$fontSize1",
    color: "$color2"
  },

  headerContentDesc: {
    fontSize: "$fontSize6 * 1.2",
    color: "$color2"
  },
  headerContentImg: {
    marginTop: 20
  },
  container: {
    padding: "5%",
    paddingBottom: 0,
    flex: 1
  },
  helpTitle: {
    fontSize: "$fontSize2"
  },
  flatListContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  helpRowContainer: {
    backgroundColor: "$color3",
    alignItems: "stretch",
    height: helpRowHeight,
    justifyContent: "flex-start",
    marginBottom: 10
  },
  helpRow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    paddingRight: 20
  },
  iconContainer: {
    width: "20%",
    alignSelf: "stretch",
    height: "100%",
    backgroundColor: "$color1",
    justifyContent: "center",
    alignItems: "center"
  },
  helpRowIcon: {
    color: "$color2",
    fontSize: "$fontSize2"
  },
  title: {
    marginLeft: 10,
    fontSize: "$fontSize4",
    flex: 1
  },
  action: {}
});
