import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from "./component/FirstPage.js"
import StepPages from "./component/stepComponent"

const App = () => {
  return (
  <>
    <Swiper>
      <View style={styles.background}>
        <Text style={styles.text}>Have a good health</Text>
          <Image style={styles.photoStyle} source={require("./component/photo/photo.png")}/>
        <View style={styles.textContain}>
          <Text>Being healthy is all, no health is nothing.</Text>
          <Text>So why do not we</Text>
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.textUp}>
          <Text style={styles.text}>Be stronger</Text>
        </View>
        <View style={styles.photoContain}>
          <Image source={require("./component/photo/strong.png")} style={styles.photoStyle2} />
        </View>
        <View style={styles.textContain}>
          <Text>Take 30 minutes of bodybuilding every day</Text>
          <Text>to get physically fit and healthy.</Text>  
        </View>  
      </View>
      <View style={styles.background}>
        <Text style={styles.text}>Have a nice body</Text>
        <Image source={require("./component/photo/body.png")} style={styles.photoStyle2} />
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
    <StepPages />
  </>
  );
}

export default App