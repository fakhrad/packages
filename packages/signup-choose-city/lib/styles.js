import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

export default EStyleSheet.create({
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
        fontSize: "$fontSize4"
    },

    chooseCity: {
        flexDirection: "row",
        backgroundColor: "$color3",
        alignSelf: "stretch",
        borderRadius: 4,
        height: "20%"
    },
    chooseCityImage: {
        width: 30,
        height: 30
    },
    chooseCityText: {
        color: "$color5",
        fontSize: "$fontSize4",
        fontWeight: "bold",
        fontFamily: "$fontFamily1"
    },
    modalContainer: {
        backgroundColor: "$color2",
        justifyContent: "flex-start",
        borderRadius: 5
    },
    modal_header: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: "row",
        borderBottomColor: "$color3",
        borderBottomWidth: 3
    },
    modalClose: {
        backgroundColor: "transparent",
        paddingLeft: 20,
        paddingRight: 20
    },
    modalCloseIcon: {
        fontSize: "$fontSize3",
        color: "$color1"
    },
    modal_header_iconContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    modal_header_iconContainer_icon: {
        fontSize: "$fontSize4"
    },
    modal_header_iconContainer_input: {
        fontSize: "$fontSize6",
        marginRight: 10
    },
    modal_header_inputContainer: {
        flex: 1
    },
    modal_header_inputContainer_input: {
        fontSize: "$fontSize4",
        marginRight: 10
    },
    flatListContainer: {
        backgroundColor: "$color2"
    },
    cityItemContainer: {
        backgroundColor: "transparent"
    },
    cityItem: {
        width: "100%",
        flexDirection: "row",
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: "center",
        borderBottomColor: "$color3",
        borderBottomWidth: 1
    },
    cityItemIcon: {
        marginRight: 20,
        width: (deviceWidth * 10) / 100,
        height: (deviceWidth * 10) / 100
    },
    cityItemText: {
        marginTop: "5%",
        marginBottom: "5%",
        fontWeight: "bold",
        fontSize: "$fontSize5",
        fontFamily: "$fontFamily1"
    }
});
