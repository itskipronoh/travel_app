import { router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export default function GetStarted({navigation}: {navigation: NavigationProp<any>}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        // source={require('../assets/Borcelle travel.png')}
    
      />
       <Image style={styles.pic1} source={require('../assets/30692-5-travel-photo.png')} />
      {/* <Image style={styles.pic1} source={require('../assets/job_finder.jpg')} /> */}
      <Text style={styles.text1}> Evanny Travels </Text>
      <Text style={styles.text2}>We provide you the<Text style={styles.text3}> Best & Available </Text> Travelling Places </Text>
      <Pressable style={({pressed}) => [
              styles.button,
              pressed && {opacity: 1.8, backgroundColor:'#8DE8C7'},
      ]} onPress={() => router.push('(home)/HomeScreen')}>
     
        <Text style={styles.textbutton}> GET STARTED </Text> 
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo:{
    resizeMode: 'center',
    height: 177,
    width: 250,
    marginTop: -35,
  },
  pic1: {
    marginTop: -25,
    padding: 0,
    width: 364,
    height: 309,
  },
  text1: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8DE8C7',
    textAlign: 'center',
  },
  text2: {
    textAlign: 'center',
    fontSize: 12,
  },
  text3: {
    fontWeight: 'bold',
    color: '#8DE8C7',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    padding: 10,
    backgroundColor:'#8DE8C7',
    marginTop:10,
  },
  textbutton:{
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});
