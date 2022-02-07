import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
const MainApp = () => {
  return (
    // <View>
    //   <Text>Halaman Utama</Text>
    // </View>
    <WebView source={{ uri: 'http://react-ibadah.justhasnah.me/' }}/>
  );
};

export default MainApp;

const styles = StyleSheet.create({});
