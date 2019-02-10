import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Button,
  Container,
  Text,
  Image,
  Input,
  FlatList,
  Spinner,
  BaseComponent
} from "@app-sdk/components";
import styles from "./styles";
import translation from "./translation";
import {
  languageManager,
  apiManager,
  themeManager,
  navManager,
  authManager,
  stateManager
} from "@app-sdk/services";

export default class ChooseCity extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);

    this.state = {
      spinner: false,
      selectedCity: this.store.userInfo
        ? this.store.userInfo.city
          ? this.store.userInfo.city
          : {}
        : {},
      isCitySelected: false,
      refreshing: false,
      btnSpinner: false
    };
  }
  componentDidMount() {
    this.getAllCities();
  }
  getAllCities() {
    const getCities = apiManager.instance.get("authentication", "getCities");
    if (getCities) {
      getCities()
        .onOk(res => {
          this.setState({
            flatListData: res,
            refreshing: false
          });
          this.arrayholder = res;
        })
        .onServerError(() => {
          this.notifyError(
            languageManager.translate(this, "ERROR_INTERNAL_SERVER")
          );
        })
        .onConnectionError(() => {
          this.notifyError(languageManager.translate(this, "CONNECTION_ERROR"));
        })
        .call();
    }
  }
  // filtering cities
  searchFilter = text => {
    const newData = this.arrayholder.filter(city =>
      city.name[languageManager.getCurrentLanguage().name].startsWith(text)
    );
    this.setState({ flatListData: newData });
  };
  chooseCity = cityItem => {
    this.setState(prevState => ({
      ...prevState,
      selectedCity: cityItem,
      isCitySelected: true
    }));
  };
  changeUserCity = async () => {
    if (this.state.isCitySelected) {
      const changeCity = apiManager.instance.get(
        "authentication",
        "changeCity"
      );
      if (changeCity) {
        this.setState(prevState => ({
          ...prevState,
          btnSpinner: true
        }));
        changeCity()
          .onOk(result => {
            debugger;
            navManager.closeScreen(
              this.props.callback,
              this.state.selectedCity
            );
          })
          .notFound(() => {
            this.setState(prevState => ({
              ...prevState,
              btnSpinner: false
            }));
          })
          .onServerError(() => {
            this.setState(prevState => ({
              ...prevState,
              btnSpinner: false
            }));
            this.notifyError(
              languageManager.translate(this, "ERROR_INTERNAL_SERVER")
            );
          })
          .onBadRequest(() => {
            this.setState(prevState => ({
              ...prevState,
              btnSpinner: false
            }));
          })
          .onConnectionError(() => {
            this.setState(prevState => ({
              ...prevState,
              btnSpinner: false
            }));
            this.notifyError(
              languageManager.translate(this, "CONNECTION_ERROR")
            );
          })
          .call(this.state.selectedCity.cityCode);
      }
    }
  };
  handleRefresh() {
    this.setState({ refreshing: true, flatListData: [] }, () => {
      this.getAllCities();
    });
  }
  toggleModal = () => {
    navManager.closeScreen();
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
                ? themeManager.getAppTheme().$color3
                : themeManager.getAppTheme().$color2
          },
          styles.cityItem
        ]}
      >
        <Icon name="opacity" style={styles.cityItemIcon} />
        <Text style={styles.cityItemText}>
          {item.name[languageManager.getCurrentLanguage().name]}
        </Text>
      </Container>
    </Button>
  );

  render() {
    const backIconName =
      languageManager.getCurrentLayout() == "rtl"
        ? "arrow-right"
        : "arrow-left";
    return (
      <Container style={styles.modalContainer}>
        <Container style={styles.modal_header}>
          <Container style={styles.modal_header_iconContainer}>
            <Button onPress={this.toggleModal} style={styles.modalClose}>
              <Icon name={backIconName} style={styles.modalCloseIcon} />
            </Button>
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
          <Button onPress={this.changeUserCity} style={styles.changeCityBtn}>
            <Spinner size="small" show={this.state.btnSpinner} />
            <Icon
              name="check"
              style={[
                styles.changeCityBtnIcon,
                { display: this.state.btnSpinner ? "none" : "flex" }
              ]}
            />
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
