import RF from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");
const circleDimen = Dimensions.get("window").width / 3;
const circleDimen_top = -(circleDimen / 2);


const styles = EStyleSheet.create({
    scrollKeyboardView: {
        height: deviceHeight
    },
    top: {
        height: (deviceHeight * 55) / 100,
        backgroundColor: "$color1",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "5%"
    },
    bottom: {
        height: (deviceHeight * 45) / 100,
        alignItems: "center",
        justifyContent: "space-around"
    },
    topIcon: {
        fontWeight: "normal",
        fontSize: "$fontSize1 * 3",
        color: "$color3"
    },
    topImage: {},
    topText: {
        fontFamily: "$fontFamily1",
        fontSize: "$fontSize4",
        color: "$color2",
        textAlign: "center"
    },
    bottomInput: {
        width: "80%",
        textAlign: "center",
        borderBottomColor: "$color4",
        borderBottomWidth: 1,
        marginHorizontal: "10%",
        fontSize: "$fontSize2"
    },
    bottomBtn: {
        borderRadius: 30,
        width: "50%",
        height: "16%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0
    },
    bottomBtnText: {
        margin: 0,
        fontFamily: "$fontFamily1",
        color: "$color2",
        fontSize: "$fontSize4",
    },
    spinner: {
        position: "absolute",
        right: "5%"
    }
});

export default styles