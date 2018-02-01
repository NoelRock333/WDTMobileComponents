import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailsScreen from '../components/DetailsScreen';
import HomeScreen from '../components/HomeScreen';
import GridScreenCols from '../components/GridScreenCols';
import GridScreenRows from '../components/GridScreenRows';
import VectorIcons from '../components/VectorIcons';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
  GridScreenCols: {
    screen: GridScreenCols
  },
  GridScreenRows: {
    screen: GridScreenRows
  },
  VectorIcons: {
    screen: VectorIcons
  }
});

export default RootNavigator;