import React, { memo } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EStyleSheet from "react-native-extended-stylesheet";
import { Button, Image, Text, Container, DateText } from "@app-sdk/components";
import { languageManager, themeManager } from "@app-sdk/services";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const cardHeight = (deviceHeight * 20) / 100;
const imageWidth = (deviceWidth * 30) / 100;
const imageHeight = (cardHeight * 100) / 100 - 10;
const imageMargin = (cardHeight * 5) / 100;
const radius = (cardHeight * 5) / 100;

const MyRequestsItem = ({ ...props }) => {
  const { data, animation } = props;
  let animDelay = props.index * 100;
  handlePressed = data => {
    if (props.onDetailPressed) {
      props.onDetailPressed(data);
    }
  };
  handleActionPressed = data => {
    if (props.onActionPressed) {
      props.onActionPressed(data);
    }
  };
  handleQoutePressed = data => {
    if (props.onQouteCountPressed) {
      props.onQouteCountPressed(data);
    }
  };

  return (
    <Button
      style={[styles.sectionItem, props.style]}
      onPress={() => handlePressed(data)}
    >
      <Image source={{ uri: data.image }} style={styles.sectionImage} />
      <Container style={styles.content} animation="fadeIn">
        <Container style={{ flex: 1, backgroundColor: "transparent" }}>
          <Text style={styles.sectionTitle}>
            {data.name[languageManager.getCurrentLanguage().name]
              ? data.name[languageManager.getCurrentLanguage().name]
              : data.name}
          </Text>
          <Text style={styles.value}>{data.weight}</Text>
        </Container>
        <Container
          style={{ backgroundColor: "transparent", flexDirection: "row" }}
        >
          <Button
            style={styles.action}
            onPress={() => handleQoutePressed(data)}
          >
            <Icon name="user" style={styles.actionIcon} />
            <Text style={styles.actionText}>{data.offer}</Text>
          </Button>
          <Container style={styles.action}>
            <Text style={styles.actionText}>{data.status}</Text>
          </Container>
        </Container>
      </Container>
      <Container style={styles.right}>
        <DateText style={styles.dateText} date={data.date} />
        <Button
          style={styles.btnDetail}
          onPress={() => handleActionPressed(data)}
        >
          <Icon name="ellipsis-v" style={styles.btnDetailIcon} />
        </Button>
      </Container>
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
    borderBottomWidth: 10,
    borderLeftColor: "$color3",
    borderLeftWidth: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  sectionImage: {
    width: imageWidth,
    height: imageHeight,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius
  },
  sectionTitle: {
    fontSize: "$fontSize4"
  },
  sectionDesc: {
    fontSize: "$fontSize6"
  },
  content: {
    backgroundColor: "transparent",
    flex: 1,
    padding: 10,
    paddingBottom: 4
  },
  right: {
    backgroundColor: "transparent",
    height: "100%",
    justifyContent: "space-between",
    padding: 10
  },
  value: {
    fontSize: "$fontSize5"
  },
  btnDetail: {
    backgroundColor: "transparent",
    padding: 5
  },
  btnDetailIcon: {
    color: "$color5",
    fontSize: "$fontSize2"
  },
  dateText: {
    color: "$color5",
    fontSize: "$fontSize6"
  },
  action: {
    backgroundColor: "$color3",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 5,
    padding: 5
  },
  actionText: {
    // color: "$color2",
    fontSize: "$fontSize6"
  },
  actionIcon: {
    marginRight: 5,
    // color: "$color2",
    fontSize: "$fontSize5"
  },
  actionBtn: {
    flex: 1,
    backgroundColor: "transparent"
  },
  actionBtnIcon: {
    color: "$color2",
    fontSize: "$fontSize1"
  },
  actionBtnText: {
    color: "$color2",
    fontSize: "$fontSize5"
  }
});
