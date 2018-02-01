import React from 'react';
import { View } from 'react-native';
import { Text, Button, Content, Container, Header, Body, Title, Left, Right, Icon } from 'native-base';

const DetailsScreen = ({ navigation }) => (
  <Container>
    <Header>
      <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="arrow-back"></Icon>
        <Text style={{ marginLeft: 10 }}>Back</Text>
      </Left>
      <Body>
        <Title>Details Screen</Title>
      </Body>
      <Right />
    </Header>
    <Content style={{ backgroundColor: '#22B188' }}>
      <View style={{ justifyContent: 'center' }}>
        <Button danger block onPress={() => navigation.goBack()}>
          <Text>Go to back</Text>
        </Button>
        <Button warning block onPress={() => navigation.navigate('GridScreenCols')}>
          <Text>Grid Screen Cols</Text>
        </Button>
        <Button warning block onPress={() => navigation.navigate('GridScreenRows')}>
          <Text>Grid Screen Rows</Text>
        </Button>
        <Button warning block onPress={() => navigation.navigate('VectorIcons')}>
          <Text>Vector Icons</Text>
        </Button>
        <Button warning block onPress={() => navigation.navigate('Swipable')}>
          <Text>Swipable</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

export default DetailsScreen;
