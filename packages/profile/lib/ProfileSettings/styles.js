import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const bodyHeight = (deviceHeight * 90) / 100;
const profileTopHeight = (bodyHeight * 18) / 100;
const imageCircle = (profileTopHeight * 45) / 100;

export default EStyleSheet.create({
    wrapper: {
        backgroundColor: "$color3",
        flex: 1
    },
    header: {
        paddingHorizontal: "4%",
        backgroundColor: "$color1",
        height: (deviceHeight * 10) / 100,
        flexDirection: "column",
        elevation: 10,
        position: "relative",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 10
    },
    headerActions: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        flex: 1
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
    headerImageContainer: {
        position: "absolute",
        right: 0,
        width: imageCircle,
        height: imageCircle,
        borderRadius: imageCircle / 2,
        borderColor: "$color2",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    headerImage: {
        width: (imageCircle * 85) / 100,
        height: (imageCircle * 85) / 100,
        borderRadius: imageCircle / 2
    },
    keyView: {
        height: (deviceHeight * 90) / 100,
        paddingTop: 10
    },
    inputContainer: {
        height: (deviceHeight * 14) / 100,
        backgroundColor: "transparent",
        margin: (deviceHeight * 1) / 100,
        marginHorizontal: (deviceHeight * 2) / 100
    },
    addressContainer: {
        height: (deviceHeight * 17) / 100
    },
    btn: {
        height: (deviceHeight * 11) / 100
    },
    inputTitle: {
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1",
        textAlign: "left"
    },
    elementContainer: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 10
    },
    inputIcon: {
        fontSize: "$fontSize2",
        alignSelf: "center",
        margin: "5%"
    },
    inputElement: {
        backgroundColor: "transparent",
        borderWidth: 0,
        flex: 1,
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1",
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "$color2",
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 10,
        justifyContent: "flex-start",
        paddingHorizontal: "5%"
    },
    buttonText: {
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1",
        textAlign: "left"
    },
    buttonValueContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row-reverse",
        backgroundColor: "transparent"
    },
    buttonValue: {
        marginRight: 10,
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1",
        color: "$color1"
    },
    buttonIcon: {
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1",
        color: "$color1"
    },
    citySpinner: {
        color: "$color1",
        marginLeft: 10
    },
    btnUpdate: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: (deviceHeight * 8) / 100,
        flexDirection: "row"
    },
    btnUpdateText: {
        color: "$color2",
        fontSize: "$fontSize4",
        fontWeight: "bold",
        paddingRight: 5
    }
});