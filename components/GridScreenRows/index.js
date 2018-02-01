import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

const GridScreenCols = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Grid>
      <Row style={{ backgroundColor: 'red' }}>
        <Text style={{ color: 'white' }}>Text 1</Text>
      </Row>
      <Row style={{ backgroundColor: '#c170cd' }}>
        <Text style={{ color: 'white' }}>Text 2</Text>
      </Row>
      <Row style={{ backgroundColor: '#6FC545' }}>
        <Text style={{ color: 'white' }}>Text 3</Text>
      </Row>
    </Grid>
  </View>
);

export default GridScreenCols;
