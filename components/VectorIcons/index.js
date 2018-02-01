import React from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'native-base';

const VectorIcons = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#22B188' }}>
    <View style={{ justifyContent: 'center' }}>
      <Icon name="analytics" style={{fontSize: 40, color: 'red'}}/>
      <Icon name="ios-basket" style={{fontSize: 40, color: 'white'}} />
      <Icon name="search" style={{fontSize: 40, color: 'yellow'}}/>
      <Button danger onPress={() => navigation.goBack()}>
        <Text>Go to back</Text>
      </Button>
    </View>
  </View>
);

export default VectorIcons;
