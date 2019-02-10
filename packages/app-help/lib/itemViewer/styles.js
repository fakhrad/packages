import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "$color1"
    },
    swiper: {
        flex: 1
    },
    slide: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    slideImage: {
        width: deviceWidth * 65 / 100,
        height: deviceHeight * 70 / 100
    },
    slideText: {
        color: "$color2",
        fontSize: "$fontSize3",
        textAlign: 'center',
        paddingHorizontal: "5%",
        paddingTop: 20,
    }
});