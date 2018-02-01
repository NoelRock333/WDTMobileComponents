import React from 'react';
import { Container, Header, Tabs, Tab } from 'native-base';
import Tab1 from './TabOne';

class TabExample extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Tabs initialPage={1}>
          <Tab heading="Tab1">
            <Tab1 navigation={navigation} />
          </Tab>
          <Tab heading="Tab2">
            <Tab1 navigation={navigation} />
          </Tab>
          <Tab heading="Tab3">
            <Tab1 navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabExample;