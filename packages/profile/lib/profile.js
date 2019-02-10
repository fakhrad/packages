import React from "reactn";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  Header,
  Text,
  Container,
  Button,
  Image,
  BaseComponent
} from "@app-sdk/components";

import BackButton from "@app-sdk/advance-components/BackButton";
const ImagePicker = require("@app-sdk/advance-components/ImagePicker").default;

import styles from "./styles";
import translation from "./translation";
import {
  apiManager,
  languageManager,
  authManager,
  navManager
} from "@app-sdk/services";
import ProfileSettings from "./ProfileSettings";

export default class Profile extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    navManager.registerScreen(undefined, "ProfileSettings", ProfileSettings);
    this.state = { tabNumber: 1 };
  }

  changeTab(tabNumber) {
    if (tabNumber == 3) {
      navManager.showModal("ProfileSettings");
    } else {
      this.setState({ tabNumber: tabNumber });
    }
  }
  onChangeUserAvatar(image) {
    debugger;
    const changeAvatar = apiManager.instance.get(
      "authentication",
      "changeAvatar"
    );
    if (changeAvatar) {
      changeAvatar().call(image);
    }
  }
  chooseLocation = () => {
    navManager.showModal("Location")
  };
  render() {
    const myLocationIcon =
      languageManager.getCurrentLayout() === "rtl"
        ? "chevron-left"
        : "chevron-right";

    return (
      <Container style={styles.wrapper}>
        {/* header */}
        <Header style={styles.header}>
          <Container style={styles.headerActions}>
            <BackButton />
            <Text style={styles.headerText}>
              {languageManager.translate(this, "PROFILE")}
            </Text>
          </Container>
          <Container style={styles.profileContainer}>
            <Container style={styles.profileImage}>
              <Image
                source={{
                  uri:
                    (authManager.instance.currentUser
                      ? authManager.instance.currentUser.avatar
                      : "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png") ||
                    "https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png"
                }}
                style={styles.image}
                resizeMode="cover"
              />
              <Button
                style={styles.editImage}
                onPress={() => {
                  navManager.showInModal(
                    ImagePicker,
                    undefined,
                    this.onChangeUserAvatar
                  );
                }}
              >
                <Icon name="camera" style={styles.editImageIcon} />
              </Button>
            </Container>
            <Text style={styles.userName}>
              {authManager.instance.currentUser.name}
            </Text>
            <Text style={styles.phoneNumber}>
              {authManager.instance.currentUser.phoneNumber}
            </Text>
          </Container>
        </Header>
        <Container style={styles.tabs}>
          <Button
            style={[
              styles.tabBtn,
              this.state.tabNumber == 1 ? styles.tabBtn_selected : {}
            ]}
            onPress={() => this.changeTab(1)}
          >
            <Icon
              name="ravelry"
              style={[
                styles.tabBtnIcon,
                this.state.tabNumber == 1
                  ? styles.tabBtnIcon_selected
                  : undefined
              ]}
            />
            <Text
              style={[
                styles.tabBtnText,
                this.state.tabNumber == 1
                  ? styles.tabBtnText_selected
                  : undefined
              ]}
            >
              {languageManager.translate(this, "PROFILE_TAB_ABOUT")}
            </Text>
          </Button>
          <Button
            style={[
              styles.tabBtn,
              this.state.tabNumber == 2 ? styles.tabBtn_selected : {}
            ]}
            onPress={() => this.changeTab(2)}
          >
            <Icon
              name="cubes"
              style={[
                styles.tabBtnIcon,
                this.state.tabNumber == 2 ? styles.tabBtnIcon_selected : {}
              ]}
            />
            <Text
              style={[
                styles.tabBtnText,
                this.state.tabNumber == 2 ? styles.tabBtnText_selected : {}
              ]}
            >
              {languageManager.translate(this, "PROFILE_TAB_MY_WORK")}
            </Text>
          </Button>
          <Button
            style={[
              styles.tabBtn,
              this.state.tabNumber == 3 ? styles.tabBtn_selected : {}
            ]}
            onPress={() => this.changeTab(3)}
          >
            <Icon
              name="cog"
              style={[
                styles.tabBtnIcon,
                this.state.tabNumber == 3 ? styles.tabBtnIcon_selected : {}
              ]}
            />
            <Text
              style={[
                styles.tabBtnText,
                this.state.tabNumber == 3 ? styles.tabBtnText_selected : {}
              ]}
            >
              {languageManager.translate(this, "PROFILE_TAB_EDIT_PROFILE")}
            </Text>
          </Button>
        </Container>
        <Container
          style={[
            styles.firstTabContainer,
            this.state.tabNumber == 1 ? styles.activeTabContainer : {}
          ]}
        >
          <Container style={styles.starContainer}>
            <Image
              style={styles.star}
              source={{
                uri: "https://img.icons8.com/color/40/000000/star.png"
              }}
            />
            <Image
              style={styles.star}
              source={{
                uri: "https://img.icons8.com/color/40/000000/star.png"
              }}
            />
            <Image
              style={styles.star}
              source={{
                uri: "https://img.icons8.com/color/40/000000/star.png"
              }}
            />
            <Image
              style={styles.star}
              source={{
                uri: "https://img.icons8.com/color/40/000000/star.png"
              }}
            />
            <Image
              style={styles.star}
              source={{
                uri: "https://img.icons8.com/color/40/000000/star.png"
              }}
            />
          </Container>
          <Button style={styles.myLocation} onPress={this.chooseLocation}>
            <Text style={styles.myLocationText}>
              {languageManager.translate(this, "PROFILE_TAB_ABOUT_MY_LOCATION")}
            </Text>
            <Icon name={myLocationIcon} style={styles.myLocationIcon} />
          </Button>
          <Container style={styles.aboutAddress}>
            <Text style={styles.aboutAddressTitle}>
              {languageManager.translate(
                this,
                "PROFILE_TAB_ABOUT_ADDRESS_TITLE"
              )}
            </Text>
            <Container
              style={{
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "transparent",
                padding: "3%"
              }}
            >
              <Icon name="map-marker" style={styles.aboutAddressIcon} />
              <Text style={styles.aboutAddressText}>
                {authManager.instance.currentUser.address}
              </Text>
            </Container>
          </Container>
        </Container>
        <Container
          style={[
            styles.secondTabContainer,
            this.state.tabNumber == 2 ? styles.activeTabContainer : {}
          ]}
        />
      </Container>
    );
  }
}
