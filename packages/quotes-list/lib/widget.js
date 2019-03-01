import React, { memo } from "react";
import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Container, Button, Image, Text } from "@app-sdk/components";
import { languageManager } from "@app-sdk/services";
const { width, height: deviceHeight } = Dimensions.get("window");
const productHeight = (deviceHeight * 62) / 100;

const QoutesItem = ({ ...props }) => {
  const { data, unit } = props;
  return (
    <Container style={styles.product}>
      <Image source={{ uri: data.product.image }} style={styles.productImg} />
      <Text style={styles.weight}>{data.request.weight} kg</Text>
      <Container style={styles.productTextContainer}>
        <Container style={styles.left}>
          <Text style={styles.productName}>{data.vendor.name}</Text>
          <Text style={styles.productDesc}>
            {data.product.name
              ? data.product.name[languageManager.getCurrentLanguage().name]
              : ""}
          </Text>
        </Container>
        <Container style={styles.right}>
          <Text style={styles.rightFee}>{data.price}</Text>
          <Text style={styles.rightUnit}>{unit}</Text>
        </Container>
      </Container>
    </Container>
  );
};
export default memo(QoutesItem);

const styles = EStyleSheet.create({
  product: {
    height: productHeight,
    justifyContent: "center",
    padding: (productHeight * 5) / 100,
    borderRadius: 10,
    borderBottomColor: "$color4",
    borderBottomWidth: 2
  },
  productImg: {
    width: "100%",
    height: (productHeight * 65) / 100
  },
  weight: {
    fontSize: "$fontSize3",
    marginTop: "5%"
  },
  productTextContainer: {
    //height: (productHeight * 20) / 100,
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
