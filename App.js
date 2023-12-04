import { Text, SafeAreaView, View, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./ROI_logo.png')}
      style={{ width: 360, height: 140, alignItems: 'center'}} />
      <Text style={styles.paragraph}>
        RED OPAL INNOVATIONS
      </Text>
      <Text style={styles.paragraph}>
        Company Portal
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
