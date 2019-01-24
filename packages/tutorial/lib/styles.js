import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: "$color1"
    },
    swiper: {
        height: "10%"
    },
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    bottom: {
        backgroundColor: "red",
        height: 100
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    slide4: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    slidesTitle: {
        "@media ios": {
            fontFamily: "$fontFamily1",
            fontWeight: "bold"
        },
        "@media android": {
            fontFamily: "$fontFamily1"
        },
        color: "$color2",
        paddingTop: 10,
        fontSize: "$fontSize3",
        textAlign: "center"
    },
    slidesDescription: {
        marginTop: 10,
        fontSize: "$fontSize6",
        color: "$color2",
        "@media ios": {
            fontFamily: "$fontFamily1",
            fontWeight: "bold"
        },
        "@media android": {
            fontFamily: "$fontFamily1"
        },
        textAlign: "center",
        marginLeft: "7%",
        marginRight: "7%"
    },
    btn: {
        marginTop: 10,
        width: (deviceWidth * 30) / 100,
        borderRadius: 5,
        backgroundColor: "$color2",
        borderColor: "$color5",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontSize: "$fontSize4",
        color: "darkorange",
        fontFamily: "$fontFamily1"
    },
    image: {
        width: deviceWidth,
        height: 250
    },
    actionsContainer: {
        flexDirection: "row",
        height: "15%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    actionsBtn: {
        flex: 1,
        borderRadius: 4,
        marginRight: 10,
        backgroundColor: "$color2"
    },
    actionsBtnText: {
        fontSize: "$fontSize3",
        color: "$color1",
        fontFamily: "$fontFamily1"
    }
});
