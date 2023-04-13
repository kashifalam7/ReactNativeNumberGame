import {View, Text, Pressable, StyleSheet} from 'react-native'

function PrimaryButton({children})
{
    return(
     
       <View style={styles.buttonOuterContainer}>
         <Pressable style={styles.buttonInnerContainer} android_ripple={{color: 'purple'}}>
        <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
       </View>
      
    )

}
const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin: 4,
        overflow:'hidden'
    },
  buttonInnerContainer:{
    backgroundColor:'pink',
    paddingVertical: 8,
    paddingHorizontal: 60,
    elevation:2, 
  },
  buttonText:{
  color:'white',
  textAlign:"center"
  }
});
export default PrimaryButton;