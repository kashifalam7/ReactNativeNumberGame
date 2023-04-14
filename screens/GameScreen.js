import { Text, View,StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

function GameScreen () {
 return(
 <View style={styles.screen}>
  <Title>Oponent's title</Title>
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
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'yellow',
        borderWidth:2,
        borderColor:'yellow' 
        
    }
});
export default GameScreen;