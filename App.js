import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    console.log("Picked no is:",pickedNumber)
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen/>
  }
  
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen} op>
     <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.imageStyle}>
      <SafeAreaView style = {styles.rootScreen}>
      {screen}
      </SafeAreaView>
      </ImageBackground> 
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle:{
    opacity: 0.15
  }
});