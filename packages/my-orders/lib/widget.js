import React, { memo } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EStyleSheet from "react-native-extended-stylesheet";
import { Button, Image, Text, Container, DateText } from "@app-sdk/components";
import { languageManager, themeManager } from "@app-sdk/services";

// import Swipeout from "react-native-swipeout";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const cardHeight = (deviceHeight * 23) / 100;
const imageWidth = (deviceWidth * 30) / 100;
const imageHeight = (cardHeight * 100) / 100 - 10;
const imageMargin = (cardHeight * 5) / 100;
const radius = (cardHeight * 5) / 100;

const MyRequestsItem = ({ ...props }) => {
  const { data, animation } = props;
  handlePressed = data => {
    if (props.onDetailPressed) {
      props.onDetailPressed(data);
    }
  };
  return (
    <Button
      style={[styles.sectionItem, props.style]}
      onPress={() => handlePressed(data)}
    >
      <Container style={styles.content}>
        <Container style={styles.userConainer}>
          <Image
            source={{ uri: data.qoute.vendor.image }}
            style={styles.userImage}
          />
          <Text style={styles.userName}>{data.qoute.vendor.name}</Text>
        </Container>
        <Container style={styles.product}>
          <Text style={styles.productName}>
            {data.product.name[languageManager.getCurrentLanguage().name]
              ? data.product.name[languageManager.getCurrentLanguage().name]
              : data.product.name}
          </Text>
          <DateText style={styles.productDesc} date={data.qoute.date} />
        </Container>
        <Container style={styles.qoute}>
          <Container style={styles.qouteItem}>
            <Icon name="paperclip" style={styles.qouteItemIcon} />
            <Text style={styles.qouteItemValue}>{data.weight}</Text>
          </Container>
          <Container style={styles.qouteItem}>
            <Icon name="paperclip" style={styles.qouteItemIcon} />
            <Text style={styles.qouteItemValue}>{data.qoute.price} rial</Text>
          </Container>
        </Container>
      </Container>
      <Image source={{ uri: data.image }} style={styles.sectionImage} />
    </Button>
  );
};
export default memo(MyRequestsItem);

const styles = EStyleSheet.create({
  sectionItem: {
    backgroundColor: "$color2",
    alignItems: "flex-start",
    width: "100%",
    height: cardHeight,
    flexDirection: "row",
    borderBottomColor: "$color3",
    borderBottomWidth: 5,
    borderLeftColor: "$color3",
    borderLeftWidth: 5
  },
  sectionImage: {
    width: imageWidth,
    height: imageHeight
  },
  content: {
    flex: 1,
    padding: 5
  },
  userConainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderColor: "$color3",
    borderWidth: 5
  },
  userName: {
    fontSize: "$fontSize4"
  },
  product: {
    paddingLeft: 50
  },
  productName: {
    fontSize: "$fontSize5"
  },
  productDesc: {
    fontSize: "$fontSize6",
    color: "$color5"
  },
  qoute: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 50
  },
  qouteItem: {
    backgroundColor: "$color3",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    paddingVertical: "1%",
    paddingHorizontal: "3%"
  },
  qouteItemIcon: {
    fontSize: "$fontSize6",
    marginRight: 5
  },
  qouteItemValue: {
    fontSize: "$fontSize6"
  }
});
