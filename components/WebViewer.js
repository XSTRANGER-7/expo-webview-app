import React from 'react';
import { WebView } from 'react-native-webview';

export default function WebViewer() {
  return (
    <WebView
      source={{ uri: 'https://menu-eight-rho.vercel.app' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      thirdPartyCookiesEnabled={true}
      sharedCookiesEnabled={true}
      startInLoadingState={true}
      originWhitelist={['*']}
      javaScriptCanOpenWindowsAutomatically={true}
      allowsBackForwardNavigationGestures={true}
      onShouldStartLoadWithRequest={() => true}
    />
  );
}
