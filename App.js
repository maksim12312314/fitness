import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from "./component/FirstPage.js"

const App = () => {
  return (
  <>
    <Swiper>
      <View style={styles.background}>
        <Text style={styles.text}>Have a good health</Text>
        <Image style={styles.photoStyle} source={require("./component/photo.png")}/>
        <View style={styles.textContain}>
          <Text>Being healthy is all, no health is nothing.</Text>
          <Text>So why do not we</Text>
        </View>
      </View>
      <View style={styles.background}>
        <Text style={styles.text}>Be stronger</Text>
        <Image style={styles.photoStyle2} />
        <View style={styles.textContain}>
          <Text>Take 30 minutes of bodybuilding every day</Text>
          <Text>to get physically fit and healthy.</Text>  
        </View>  
      </View>
      <View style={styles.background}>
        <Text style={styles.text}>Have a nice body</Text>
        <Image style={styles.photoStyle2} />
        <View style={styles.textContain}>
          <Text>Bad body shape, poor sleep, lack of strength</Text>
          <Text>weight gain, weak bones, easily traumatized</Text>
          <Text>body, depressed, stressed, poor metabolism,</Text>
          <Text>poor resistance</Text>
        </View>
      </View>
    </Swiper>
    <TouchableOpacity style={styles.button}>
      <Text>Start</Text>
    </TouchableOpacity>
  </>
  );
}

export default App