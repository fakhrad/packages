import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Button,
  Container,
  Text,
  Image,
  Input,
  FlatList
} from "@app-sdk/components";
import styles from "./styles";
import translation from "./translation";
import {
  languageManager,
  apiManager,
  themeManager,
  navManager
} from "@app-sdk/services";

export default class ChooseCity extends React.Component {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this.state = {
      spinner: false,
      selectedCity: this.props.params,
      isCitySelected: false,
      refreshing: false
    };
  }
  componentDidMount() {
    this.getAllCities();
  }
  getAllCities() {
    const getCities = apiManager.instance.get("authentication", "getCities");
    getCities().then(res => {
      if (res.status == 200) {
        res.json().then(cities => {
          this.setState({
            flatListData: cities,
            refreshing: false
          });
          this.arrayholder = cities;
        });
      }
    });
  }
  // filtering cities
  searchFilter = text => {
    const newData = this.arrayholder.filter(city =>
      city.name[languageManager.getCurrentLanguage().name].startsWith(text)
    );
    this.setState({ flatListData: newData });
  };
  chooseCity = cityItem => {
    navManager.closeModal(this.props.callback, cityItem);
  };
  handleRefresh() {
    this.setState({ refreshing: true, flatListData: [] }, () => {
      this.getAllCities();
    });
  }
  toggleModal = () => {
    navManager.closeModal();
  };
  // render each item of cities
  _renderItem = ({ item, index }) => (
    <Button
      style={styles.cityItemContainer}
      onPress={() => this.chooseCity(item)}
    >
      <Container
        style={[
          {
            backgroundColor:
              this.state.selectedCity.cityCode == item.cityCode
                ? "whitesmoke"
                : "white"
          },
          styles.cityItem
        ]}
      >
        {/* <Image
          source={require("./../../authentication/assets/images/city.png")}
          style={styles.cityItemIcon}
        /> */}
        <Text style={styles.cityItemText}>
          {item.name[languageManager.getCurrentLanguage().name]}
        </Text>
      </Container>
    </Button>
  );

  render() {
    return (
      <Container style={styles.modalContainer}>
        <Container style={styles.modal_header}>
          <Container style={styles.modal_header_iconContainer}>
            <Icon
              name="search"
              size={25}
              style={styles.modal_header_iconContainer_icon}
            />
          </Container>
          <Container style={styles.modal_header_inputContainer}>
            <Input
              placeholderTextColor={themeManager.getAppTheme().$color4}
              placeholder={languageManager.translate(
                this,
                "CHOOSE_CITY_FILTER_PLACEHOLDER"
              )}
              style={styles.modal_header_inputContainer_input}
              onChangeText={text => this.searchFilter(text)}
            />
          </Container>
          <Button onPress={this.toggleModal} style={styles.modalClose}>
            <Icon name="close" style={styles.modalCloseIcon} />
          </Button>
        </Container>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={this.state.flatListData}
          renderItem={this._renderItem}
          keyExtractor={item => item.cityCode.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </Container>
    );
  }
}
