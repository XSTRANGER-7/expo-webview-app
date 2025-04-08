import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebViewer from '../../components/WebViewer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebViewer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
