import React, { memo } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EStyleSheet from "react-native-extended-stylesheet";
import { Button, Image, Text, Container } from "@app-sdk/components";
import { languageManager } from "@app-sdk/services";

const CategoryWidget = ({ ...props }) => {
  const { data, index } = props;
  handlePressed = data => {
    if (props.onPressed) {
      props.onPressed(data);
    }
  };
  handleLongPressed = data => {
    if (props.onLongPressed) {
      props.onLongPressed(data);
    }
  };
  return (
    <Button
      style={[styles.sectionItem, props.style]}
      onPress={() => handlePressed(data)}
    >
      <Image source={{ uri: data.image }} style={styles.sectionImage} />
      <Text style={styles.sectionTitle}>
        {data.name[languageManager.getCurrentLanguage().name]
          ? data.name[languageManager.getCurrentLanguage().name]
          : data.name}
      </Text>
      <Container style={styles.sectionBottom}>
        <Icon name="cart-plus" style={styles.sectionIcon} />
        <Text style={styles.sectionDesc}>
          {data.shortDesc[languageManager.getCurrentLanguage().name]
            ? data.shortDesc[languageManager.getCurrentLanguage().name]
            : data.shortDesc}
        </Text>
      </Container>
      <Button onPress={() => handleLongPressed(data)} style={styles.btnInfo}>
        <Icon name="info" style={styles.btnInfoText} />
      </Button>
    </Button>
  );
};
export default memo(CategoryWidget);

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const btnInfoDimention = (deviceWidth * 8) / 100;

const styles = EStyleSheet.create({
  sectionItem: {
    backgroundColor: "$color2",
    padding: 7,
    alignItems: "flex-start",
    width: "45%",
    marginHorizontal: "2.5%",
    marginBottom: 10
  },
  sectionImage: {
    width: "100%",
    height: 100
  },
  sectionTitle: {
    fontSize: "$fontSize5",
    marginLeft: 5,
    marginVertical: 10
  },
  sectionBottom: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    position: "relative",
    flex: 1
  },
  sectionIcon: {
    fontSize: "$fontSize4"
  },
  sectionDesc: {
    fontSize: "$fontSize6",
    marginLeft: 5
  },
  btnInfo: {
    bottom: 5,
    padding: "3%",
    width: btnInfoDimention,
    height: btnInfoDimention,
    backgroundColor: "$color3",
    borderRadius: 100,
    position: "absolute",
    right: 5
  },
  btnInfoText: {
    fontSize: "$fontSize5"
  }
});
