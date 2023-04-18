
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
} from 'react-native';
import Button from './src/component/button';
import MyKeyBoard from './src/component/MyKeyBoard';
import { ThemeContext } from './src/context/themeContext';
import { MyColors } from './src/style/colors';

const App = () => {
  const [theme, setTheme] = useState('light')
  console.log('app',theme)
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
        <StatusBar  />
        <Switch 
          value={theme === 'light'}
          onValueChange={()=> setTheme(theme === 'light' ? 'dark' :  'light')}
        />
        <MyKeyBoard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.light,
    alignItems:'center',
    justifyContent: 'flex-end'
  }
})

export default App