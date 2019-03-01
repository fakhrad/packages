import React from "react";
import { StatusBar, Slider } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Text,
  Container,
  Button,
  BaseComponent,
  ScrollView,
  StringInput
} from "@app-sdk/components";
import styles from "./styles";
import translation from "./translation";
import { languageManager, navManager, themeManager } from "@app-sdk/services";
import Widget from "./widget";
import SuccessRequest from "./Success";

export default class RequestOrderDetail extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    this._kg = {
      max: this.props.config.kgMaxValue || 2000,
      min: 0,
      step: this.props.config.kgStep || 20
    };
    this._ton = {
      max: this.props.config.tonMaxValue || 2000,
      min: 0,
      step: this.props.config.tonStep || 20
    };
    this.state = {
      selectedWidget: props.params.selectedWidget,
      categoryItems: props.params.categoryItems,
      valueType: "kilo",
      payType: "cash",
      sliderMaxValue: this._kg.max,
      sliderStep: this._kg.step,
      sliderValue: 100
    };
    this._valueTypeUnSelected = themeManager.getAppTheme().$color2;
    this._valueTypeSelected = themeManager.getAppTheme().$color1;

    this.data = props.params.categoryItems;
    this._carouselIndex = this.data.findIndex(
      item => item.id === props.params.selectedWidget.id
    );
    this._carouselIndex = this._carouselIndex;
  }
  componentDidMount() {
    navManager.registerScreen(undefined, "SuccessRequest", SuccessRequest);
  }
  closePage = () => {
    navManager.closeScreen();
  };
  handleRadioBtn(type) {
    if (type == "kilo") {
      this.setState({
        valueType: type,
        sliderMaxValue: this._kg.max,
        sliderStep: this._kg.step,
        sliderValue: 100
      });
    } else {
      this.setState({
        valueType: type,
        sliderMaxValue: this._ton.max,
        sliderStep: this._ton.step,
        sliderValue: 1.5
      });
    }
  }

  _onMomentumScrollEnd = (e, state, context) => {
    this._carouselIndex = context.state.index;
    //this.data[this._carouselIndex];
  };

  sliderValueChange = value => {
    this.setState({
      sliderValue: value
    });
  };
  handlePayType = type => {
    this.setState({
      payType: type
    });
  };

  submitRequest = () => {
    navManager.openScreen("SuccessRequest");
  };
  render() {
    return (
      <Container style={styles.wrapper}>
        {!this.props.config.statusBar ? <StatusBar hidden /> : undefined}
        <Container style={styles.recomm}>
          <Swiper
            index={this._carouselIndex}
            showsButtons={false}
            loop={true}
            showsPagination={false}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
          >
            {this.data.map(item => {
              return <Widget key={item.id} data={item} />;
            })}
          </Swiper>
        </Container>
        <Container
          style={{
            flex: 1,
            backgroundColor: "transparent"
          }}
        >
          <ScrollView style={styles.mainContent}>
            <Container
              style={{
                backgroundColor: "transparent",
                paddingVertical: 15
              }}
            >
              <Text style={styles.payTypeTitle}>
                {languageManager.translate(this, "ORDER_DETAIL_REQUEST_VALUE")}
              </Text>
              <Container style={styles.radiosGroup}>
                <Button
                  style={styles.radioBtn}
                  onPress={() => this.handleRadioBtn("kilo")}
                >
                  <Container style={styles.radioBtnCircle}>
                    <Container
                      style={[
                        styles.radioBtnCircleContent,
                        {
                          backgroundColor:
                            this.state.valueType == "kilo"
                              ? this._valueTypeSelected
                              : this._valueTypeUnSelected
                        }
                      ]}
                    />
                  </Container>
                  <Text style={styles.radioBtnText}>
                    {languageManager.translate(
                      this,
                      "ORDER_DETAIL_REQUEST_VALUE_KILO_GERAM"
                    )}
                  </Text>
                </Button>
                <Button
                  style={styles.radioBtn}
                  onPress={() => this.handleRadioBtn("ton")}
                >
                  <Container style={styles.radioBtnCircle}>
                    <Container
                      style={[
                        styles.radioBtnCircleContent,
                        {
                          backgroundColor:
                            this.state.valueType == "ton"
                              ? this._valueTypeSelected
                              : this._valueTypeUnSelected
                        }
                      ]}
                    />
                  </Container>
                  <Text style={styles.radioBtnText}>
                    {languageManager.translate(
                      this,
                      "ORDER_DETAIL_REQUEST_VALUE_TON"
                    )}
                  </Text>
                </Button>
              </Container>
              <Container style={styles.sliderContainer}>
                <Slider
                  minimumValue={0}
                  maximumValue={this.state.sliderMaxValue}
                  step={this.state.sliderStep}
                  value={this.state.sliderValue}
                  onValueChange={this.sliderValueChange}
                  style={styles.slider}
                />
                <Text style={styles.sliderValue}>{this.state.sliderValue}</Text>
              </Container>
            </Container>

            <Container style={styles.paytypeContainer}>
              <Container
                style={{
                  flex: 1,
                  backgroundColor: "transparent"
                }}
              >
                <Text style={styles.payTypeTitle}>
                  {languageManager.translate(
                    this,
                    "ORDER_DETAIL_REQUEST_PAY_TYPE"
                  )}
                </Text>
              </Container>
              <Container
                style={[
                  styles.payTypeWrapper,
                  { opacity: this.state.payType === "cash" ? 1 : 0.5 }
                ]}
              >
                <Button
                  style={[
                    styles.paytypeBtn,
                    {
                      borderWidth: this.state.payType === "cash" ? 1 : 0
                    }
                  ]}
                  onPress={() => this.handlePayType("cash")}
                >
                  <Icon name="inbox" style={styles.paytypeBtnIcon} />
                </Button>
                <Text style={[styles.payTypeText, styles.payTypeTextActive]}>
                  {languageManager.translate(
                    this,
                    "ORDER_DETAIL_REQUEST_PAY_TYPE_CASH"
                  )}
                </Text>
              </Container>
              <Container
                style={[
                  styles.payTypeWrapper,
                  { opacity: this.state.payType === "credit" ? 1 : 0.5 }
                ]}
              >
                <Button
                  style={[
                    styles.paytypeBtn,
                    {
                      borderWidth: this.state.payType === "credit" ? 1 : 0
                    }
                  ]}
                  onPress={() => this.handlePayType("credit")}
                >
                  <Icon name="file-o" style={styles.paytypeBtnIcon} />
                </Button>
                <Text style={styles.payTypeText}>
                  {languageManager.translate(
                    this,
                    "ORDER_DETAIL_REQUEST_PAY_TYPE_INSTALLMENT"
                  )}
                </Text>
              </Container>
              <Container
                style={[
                  styles.payTypeWrapper,
                  { opacity: this.state.payType === "check" ? 1 : 0.5 }
                ]}
              >
                <Button
                  style={[
                    styles.paytypeBtn,
                    {
                      borderWidth: this.state.payType === "check" ? 1 : 0
                    }
                  ]}
                  onPress={() => this.handlePayType("check")}
                >
                  <Icon name="list-alt" style={styles.paytypeBtnIcon} />
                </Button>
                <Text style={styles.payTypeText}>
                  {languageManager.translate(
                    this,
                    "ORDER_DETAIL_REQUEST_PAY_TYPE_CHECK"
                  )}
                </Text>
              </Container>
            </Container>
            <Container style={[styles.inputContainer, styles.addressContainer]}>
              <Text style={styles.inputTitle}>
                {languageManager.translate(
                  this,
                  "ORDER_DETAIL_REQUEST_EXPLANATION"
                )}
              </Text>
              <Container style={styles.elementContainer}>
                <Icon name="map-marker" style={styles.inputIcon} />
                <StringInput
                  placeholder={languageManager.translate(
                    this,
                    "ORDER_DETAIL_REQUEST_EXPLANATION_PLACEHOLDER"
                  )}
                  style={styles.inputElement}
                  multiline={true}
                />
              </Container>
            </Container>
          </ScrollView>
        </Container>
        {/* footer */}
        <Container style={styles.footer} animation="slideInUp">
          <Button style={styles.btnAction} onPress={this.submitRequest}>
            <Text style={styles.btnActionText}>
              {languageManager.translate(
                this,
                "ORDER_DETAIL_REQUEST_SUBMIT_BTN"
              )}
            </Text>
          </Button>
          <Button style={styles.btnAction} onPress={this.closePage}>
            <Text style={styles.btnActionText}>
              {languageManager.translate(
                this,
                "ORDER_DETAIL_REQUEST_CANCEL_BTN"
              )}
            </Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
