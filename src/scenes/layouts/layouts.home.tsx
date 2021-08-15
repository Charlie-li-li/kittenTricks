import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import HomeScreen from "../home_/index"
import { MenuIcon } from '../../components/icons';
import { data } from './data';
import {lang} from '../../language'

export const LayoutsHomeScreen = (props): React.ReactElement => {

  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title={lang('main.title')}
        accessoryLeft={renderDrawerAction}
      />
      <Divider/>
      <HomeScreen {...props}/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
