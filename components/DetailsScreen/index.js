import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#22B188' }}>
    <Text>Details Screen</Text>
    <Button
      onPress={() => navigation.goBack()}
      title="Go to details"
    />
  </View>
);

export default DetailsScreen;
