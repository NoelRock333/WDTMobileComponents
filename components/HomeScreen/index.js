import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#07658B' }}>
    <Text style={{ color: 'white' }}>Home Screen</Text>
    <View style={{ justifyContent: 'center' }}>
      <Button success onPress={() => navigation.navigate('Details')}>
        <Text>Go to details</Text>
      </Button>
    </View>
  </View>
);

export default HomeScreen;
