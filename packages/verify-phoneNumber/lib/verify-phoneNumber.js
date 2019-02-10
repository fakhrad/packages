import React from "react";
import { Keyboard, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
import translation from "./translation";

import { languageManager, stateManager, navManager } from "@app-sdk/services";
import {
  Container,
  Input,
  Button,
  Text,
  ApiButton,
  BaseComponent
} from "@app-sdk/components";

export default class LoginVerify extends BaseComponent {
  constructor(props) {
    super(props);
    languageManager.addToTranslation(this, translation);
    stateManager.instance().registerFormState(this, {
      phoneNumber:
        props.params != undefined
          ? props.params.inputs
            ? props.params.inputs.phoneNumber
            : undefined
          : undefined,
      code: null
    });
    this.state = {
      code: "",
      inputNum: languageManager.getCurrentLayout() == "ltr" ? "1" : "4"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      Alert.alert(
        "Activation code is: " + this.props.params.outputs.activation_code
      );
    }, 1000);
  }

  getKeyNumber(num) {
    var layout = languageManager.getCurrentLayout();
    switch (num) {
      case 1:
        if (layout == "ltr") {
          var num_1 = languageManager.translate(this, "NUMBER_1");
          return num_1;
        } else {
          var num_3 = languageManager.translate(this, "NUMBER_3");
          return num_3;
        }
        break;
      case 3:
        if (layout == "ltr") {
          var num_3 = languageManager.translate(this, "NUMBER_3");
          return num_3;
        } else {
          var num_1 = languageManager.translate(this, "NUMBER_1");
          return num_1;
        }
        break;
      case 4:
        if (layout == "ltr") {
          var num_4 = languageManager.translate(this, "NUMBER_4");
          return num_4;
        } else {
          var num_6 = languageManager.translate(this, "NUMBER_6");
          return num_6;
        }
        break;
      case 6:
        if (layout == "ltr") {
          var num_6 = languageManager.translate(this, "NUMBER_6");
          return num_6;
        } else {
          var num_4 = languageManager.translate(this, "NUMBER_4");
          return num_4;
        }
        break;
      case 7:
        if (layout == "ltr") {
          var num_7 = languageManager.translate(this, "NUMBER_7");
          return num_7;
        } else {
          var num_9 = languageManager.translate(this, "NUMBER_9");
          return num_9;
        }
        break;
      case 9:
        if (layout == "ltr") {
          var num_9 = languageManager.translate(this, "NUMBER_9");
          return num_9;
        } else {
          var num_7 = languageManager.translate(this, "NUMBER_7");
          return num_7;
        }
        break;
      default:
        break;
    }
  }
  onPressNumKey = num => {
    var layout = languageManager.getCurrentLayout();
    var value = "";
    switch (num) {
      case "1":
        if (layout == "ltr") {
          value = "1";
        } else {
          value = "3";
        }
        break;
      case "2":
        value = "2";
        break;
      case "3":
        if (layout == "ltr") {
          value = "3";
        } else {
          value = "1";
        }
        break;
      case "4":
        if (layout == "ltr") {
          value = "4";
        } else {
          value = "6";
        }
        break;
      case "5":
        value = "5";
        break;
      case "6":
        if (layout == "ltr") {
          value = "6";
        } else {
          value = "4";
        }
        break;
      case "7":
        if (layout == "ltr") {
          value = "7";
        } else {
          value = "9";
        }
        break;
      case "8":
        value = "8";
        break;
      case "9":
        if (layout == "ltr") {
          value = "9";
        } else {
          value = "7";
        }
        break;
      case "0":
        value = "0";
        break;
      case "remove":
        if (this.state.code.length > 0) {
          const newCode = this.state.code.substring(
            0,
            this.state.code.length - 1
          );
          this.setState(
            {
              code: newCode,
              inputNum:
                languageManager.getCurrentLayout() == "ltr"
                  ? (parseInt(this.state.inputNum) - 1).toString()
                  : (parseInt(this.state.inputNum) + 1).toString()
            },
            () => {
              this.setState({
                ["input" + this.state.inputNum]: ""
              });
              stateManager.instance().setValue("code", this.state.code);
            }
          );
        }
        break;
      default:
        break;
    }
    if (num != "remove") {
      if (this.state.code.length < 4) {
        this.setState(
          (prevState, props) => ({
            code: prevState.code + value,
            ["input" + prevState.inputNum]: value,
            inputNum:
              languageManager.getCurrentLayout() == "ltr"
                ? (parseInt(prevState.inputNum) + 1).toString()
                : (parseInt(prevState.inputNum) - 1).toString()
          }),
          () => {
            stateManager.instance().setValue("code", this.state.code);
          }
        );
      }
    }
  };
  render() {
    return (
      <Container style={styles.wrapper}>
        <Text style={styles.title}>
          {languageManager.translate(this, "ACTIVATION_TITLE")}
        </Text>
        <Text style={styles.description}>
          {languageManager.translate(this, "ACTIVATION_DESCRIPTION")}
          {this.props.params.inputs.phoneNumber}
        </Text>

        <Container style={styles.codeContainer} animation="fadeIn">
          <Input
            style={styles.verifyInput}
            maxLength={1}
            editable={false}
            defaultValue={this.state.input1}
          />
          <Input
            style={styles.verifyInput}
            maxLength={1}
            editable={false}
            onTextChange={this.generateCode}
            defaultValue={this.state.input2}
          />
          <Input
            style={styles.verifyInput}
            maxLength={1}
            editable={false}
            onTextChange={this.generateCode}
            defaultValue={this.state.input3}
          />
          <Input
            style={styles.verifyInput}
            maxLength={1}
            editable={false}
            onTextChange={this.generateCode}
            defaultValue={this.state.input4}
          />
        </Container>

        <Button>
          <Text style={styles.sendCodeText}>
            {languageManager.translate(this, "ACTIVATION_RESEND")}
          </Text>
        </Button>
        <Container
          style={styles.numKeyContainer}
          animation="fadeInUp"
          delay={40}
        >
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("1")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(1)}</Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("2")}
          >
            <Text style={styles.numKeyBtnText}>
              {languageManager.translate(this, "NUMBER_2")}
            </Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("3")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(3)}</Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("4")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(4)}</Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("5")}
          >
            <Text style={styles.numKeyBtnText}>
              {languageManager.translate(this, "NUMBER_5")}
            </Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("6")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(6)}</Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("7")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(7)}</Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("8")}
          >
            <Text style={styles.numKeyBtnText}>
              {languageManager.translate(this, "NUMBER_8")}
            </Text>
          </Button>
          <Button
            style={styles.numKeyBtn}
            onPress={() => this.onPressNumKey("9")}
          >
            <Text style={styles.numKeyBtnText}>{this.getKeyNumber(9)}</Text>
          </Button>
          <Button
            style={[styles.numKeyBtn]}
            onPress={() => this.onPressNumKey("remove")}
          >
            <Icon name="angle-double-left" style={styles.numKeyBtnIcon} />
          </Button>
          <Button
            style={[styles.numKeyBtn]}
            onPress={() => this.onPressNumKey("0")}
          >
            <Text style={[styles.numKeyBtnText, { alignSelf: "center" }]}>
              {languageManager.translate(this, "NUMBER_0")}
            </Text>
          </Button>
          <ApiButton
            style={[styles.numKeyBtn]}
            action={{
              api: "authentication",
              func: "verifyCode"
            }}
            onOk={res => {
              navManager.openScreen(this.props.config.verifySuccessPage, res);
            }}
            onConnectionError={() => {
              this.notifyError(
                languageManager.translate(this, "CONNECTION_ERROR")
              );
            }}
            onServerError={() => {
              this.notifyError(languageManager.translate(this, "ERROR_INTERNAL_SERVER"));
            }}
            onBadRequest={() => {
              this.notifyWarning(languageManager.translate(this, "ERROR_BAD_REQUEST"));
            }}
          >
            <Icon name="check" style={styles.numKeyBtnIcon} />
          </ApiButton>
        </Container>
      </Container>
    );
  }
}
