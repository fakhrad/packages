import React, { memo } from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Container, Button, Image, Text } from "@app-sdk/components";
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const productHeight = (deviceHeight * 40) / 100;

const QouteInfoItem = ({ ...props }) => {
  const { data, unit } = props;
  return (
    <Container style={styles.product}>
      <Image source={{ uri: data.image }} style={styles.productImg} />
    </Container>
  );
};
export default memo(QouteInfoItem);

const styles = EStyleSheet.create({
  product: {
    flex: 1,
    padding: (productHeight * 2) / 100,
    borderRadius: 10,
    backgroundColor: "$color3"
  },
  productImg: {
    width: "100%",
    height: "100%"
  },
  productTextContainer: {
    height: (productHeight * 25) / 100,
    alignItems: "center",
    flexDirection: "row"
  },

  left: {
    flex: 1,
    justifyContent: "center"
  },

  productTitle: {
    fontSize: "$fontSize6",
    color: "$color1"
  },
  productName: {
    fontSize: "$fontSize4",
    marginVertical: 6
  },
  productDesc: {
    fontSize: "$fontSize6",
    color: "$color5"
  },
  right: {
    justifyContent: "center",
    alignItems: "center"
  },
  rightFee: {
    fontSize: "$fontSize4",
    color: "$color1"
  },
  rightUnit: {
    fontSize: "$fontSize5",
    color: "$color5"
  }
});
