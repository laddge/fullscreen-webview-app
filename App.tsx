import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <>
        <WebView
          style={styles.container}
          source={{ uri: url }}
        />
        <StatusBar hidden />
      </>
    );
  } else {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        inputMode="url"
        onChangeText={setUrl}
        value={url}
      />
      <Button title="Open" onPress={() => setLoaded(true)} />
      <StatusBar hidden />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    maxWidth: 640,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
});
