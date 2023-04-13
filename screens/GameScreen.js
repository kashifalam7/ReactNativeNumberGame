import { Text, View,StyleSheet, SafeAreaView } from "react-native";

function GameScreen () {
 return(
 <View style={styles.screen}>
  <Text> Oponnent's Guess</Text>

<View>
    <Text>Higher or Lower?</Text>
</View>
{/* 
<View>
    <Text>LOG ROUND</Text>
</View> */}

</View>
 );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:40,
    }
});
export default GameScreen;