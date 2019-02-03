import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const imageSize = width * 60 / 100;
export default EStyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "$color1"
    },
    topImage: {
        height: imageSize,
        width: imageSize
    },
    text: {
        color: "$color2",
        textAlign: "center",
        fontSize: "$fontSize4",
        margin: "8%"
    },
    btn: {
        backgroundColor: "$color2",
        height: "8%",
        paddingHorizontal: 20,
        borderRadius: 100
    },
    btnText: {
        color: "$color1",
        fontSize: "$fontSize5"
    }
});
