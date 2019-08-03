import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, Alert } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>Hello, {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    }, 1000);
  };
  state = {
    isShowingText: true
  };
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text style={styles.bigBlue}>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
  state = {
    text: ''
  };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontWeight: "bold"}}>Hello, World!</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <TextInput
          style={{height: 40}}
          placeholder="Type text here!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Greeting name='Jim' />
        <Greeting name='Deb' />
        <Greeting name='Oscar' />
        <Text>{this.state.text}</Text>
        {/* <Blink text='Welcome!' />
        <Blink text='Welcome!' />
        <Blink text='Welcome!' /> */}
        <Button 
          onPress={() => {
            Alert.alert('You tapped the button!')
          }}
          title='Press Me'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});