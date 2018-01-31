import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#22B188' }}>
    <Text style={{ color: 'white' }}>Details Screen</Text>
    <View style={{ justifyContent: 'center' }}>
      <Button danger onPress={() => navigation.goBack()}>
        <Text>Go to back</Text>
      </Button>
    </View>
  </View>
);

export default DetailsScreen;
