import React, { memo } from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Container, Button, Image, Text } from "@app-sdk/components";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const productWidth = (deviceWidth * 30) / 100;

const QouteInfoItem = ({ ...props }) => {
  const { data, unit } = props;
  return (
    <Container style={styles.product}>
      <Image source={{uri: data.image}} style={styles.productImg} />
    </Container>
  );
};
export default memo(QouteInfoItem);

const styles = EStyleSheet.create({
  product: {
    height: productWidth,
    width: productWidth,
    justifyContent: "center",
    marginHorizontal: 1,
    marginVertical: 5,
    padding: 3,
    borderRadius: 10,
    elevation: 1
  },
  productImg: {
    width: "100%",
    height: "100%"
  }
});
