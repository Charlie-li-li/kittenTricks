import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import {  ArticleList1Screen } from "../../scenes/articles/article-list-1.component"

const FirstRoute = (navigation) => (
  <ArticleList1Screen navigation={navigation}/>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  Follow: ArticleList1Screen,
  Popular: SecondRoute,
  Nearby: SecondRoute,
});

export default function HomeScreen(props) {
  const layout = useWindowDimensions();
  console.log(props.navigation,"props");
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Follow', title: 'Follow' },
    { key: 'Popular', title: 'Popular' },
    { key: 'Nearby', title: 'Nearby' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}