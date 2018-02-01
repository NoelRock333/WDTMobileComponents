import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const GridScreenCols = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Grid>
      <Col style={{ backgroundColor: 'red' }}>
        <Text style={{ color: 'white' }}>Text 1</Text>
      </Col>
      <Col style={{ backgroundColor: '#c170cd' }}>
        <Text style={{ color: 'white' }}>Text 2</Text>
      </Col>
    </Grid>
  </View>
);

export default GridScreenCols;
