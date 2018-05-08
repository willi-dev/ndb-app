import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor( props ){
    super(props);
    this.state = { text: '' };
  }

  _onPressButton(){
    Alert.alert('You tapped the button');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="Type Here to Translate"
          onChangeText={(text)=> this.setState({text})}
        />
        <Text style={styles.textPizza}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Button
          onPress={this._onPressButton}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textInput: {
    height: 80,
    fontSize: 22
  },
  textPizza: {
    padding: 10, 
    fontSize: 22
  }
});
