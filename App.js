import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import { useState } from 'react';
import Colors from './constants/Colors';

export default function App() {
  const [userNUmber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
    if (userNUmber){
      screen = <GameScreen/>
    }
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
      source={require('./assets/background.png')}
       resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> 
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity: .15,
  }
});
