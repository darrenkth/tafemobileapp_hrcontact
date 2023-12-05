import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {

  const [uname, setUname] = useState('username');
  const [pword, setPword] = useState('password');

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flex: 1}}>
        <Image source={require('./ROI_logo.png')}
        style={{width: 360, height: 140}} />
      </View>

      <View style={{ flex: 1}}>
        <Text style={styles.paragraph}>
          RED OPAL INNOVATIONS
        </Text>
      
        <Text style={styles.paragraph}>
          Company Portal
        </Text>
      </View>

      <View style={{ flex: 1}}>
 
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setUname(val)} />

        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setPword(val)} />
     
        <Button
          title="Submit"
          onPress={() => navigation.navigate('Details', {
            paramKey: uname   
          })}
        />

      </View>

    </SafeAreaView>
  );
}

function DetailsScreen( {route} ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{ route.params.paramKey }</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    flex: 1,
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 4,
    margin: 10,
    width: 180,
  }
});
