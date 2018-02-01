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
      <Button warning onPress={() => navigation.navigate('GridScreenCols')}>
        <Text>Grid Screen Cols</Text>
      </Button>
      <Button warning onPress={() => navigation.navigate('GridScreenRows')}>
        <Text>Grid Screen Rows</Text>
      </Button>
      <Button warning onPress={() => navigation.navigate('VectorIcons')}>
        <Text>Vector Icons</Text>
      </Button>
    </View>
  </View>
);

export default DetailsScreen;
