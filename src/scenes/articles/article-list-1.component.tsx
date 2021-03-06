import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import ContentView from '../../layouts/articles/article-list-1';

export const ArticleList1Screen = (navigation): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );
   console.log(navigation,"navigation111");
  
  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      {/* <TopNavigation
        title='Blog'
        accessoryLeft={renderBackAction}
      /> */}
      <ContentView navigation={navigation}/>
    </SafeAreaLayout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
