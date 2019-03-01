import React, { memo } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Image, Text, Container } from "@app-sdk/components";
import { languageManager } from "@app-sdk/services";

const RequestOrderRecom = ({ ...props }) => {
  const { data } = props;
  return (
    <Container style={styles.sectionItem}>
      <Image source={{ uri: data.image }} style={styles.sectionImage} />
      <Text style={styles.sectionTitle}>
        {data.name
          ? data.name[languageManager.getCurrentLanguage().name]
            ? data.name[languageManager.getCurrentLanguage().name]
            : data.name
          : ""}
      </Text>
    </Container>
  );
};
export default memo(RequestOrderRecom);

const styles = EStyleSheet.create({
  sectionItem: {
    backgroundColor: "$color2",
    padding: 7,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    elevation: 10,
    borderRadius: 10,
    marginHorizontal: "8%",
    flex: 1
  },
  sectionImage: {
    width: "100%",
    height: "80%"
  },
  sectionTitle: {
    fontSize: "$fontSize5",
    textAlign: "center",
    marginLeft: 10,
    marginTop: 10
  }
});
