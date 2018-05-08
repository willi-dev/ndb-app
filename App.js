import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import { Input, Button } from 'nachos-ui';

export default class App extends React.Component {
  
  constructor( props ){
    super(props);
    this.state = { text: '' };
  }

  _onPressButton(){
    Alert.alert('You tapped the button');
  }

  render() {
    const inputStyle = { margin: 15 };
    const btnStyle = { margin: 15 };
    return (
      <View style={{padding: 20}}>
        <Input 
          style={inputStyle}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder="Cari Tempat Nongkrong!"
        />
        <Button 
          kind="squared" title="Cari" type="success" style={btnStyle}
          onPress={this._onPressButton}>
          Cari
        </Button>}
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
