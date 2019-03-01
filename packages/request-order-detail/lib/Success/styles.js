import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const imageWidth = (deviceWidth * 60) / 100;

export default EStyleSheet.create({
  wrapper: {
    backgroundColor: "$color1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    height: imageWidth,
    width: imageWidth,
    borderRadius: imageWidth / 2,
    borderWidth: 2,
    borderColor: "$color2",
    marginVertical: deviceHeight * 4/100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: imageWidth / 2
  },
  title: {
    fontSize: "$fontSize1",
    color: "$color2",
    marginVertical: 10,
    fontWeight: "bold"
  },
  desc: {
    fontSize: "$fontSize4",
    color: "$color2",
    fontWeight: "bold",
    marginBottom: 10
  },
  hint: {
    fontSize: "$fontSize5",
    color: "$color2",
    textAlign: "center"
  },
  backBtn: {
    backgroundColor: "$color2",
    height: (deviceHeight * 8) / 100,
    width: "80%",
    borderRadius: 10,
    marginHorizontal: "10%",
    marginTop: (deviceHeight * 6) / 100
  },
  backBtnText: {
    color: "$color1",
    fontSize: "$fontSize3"
  }
});
