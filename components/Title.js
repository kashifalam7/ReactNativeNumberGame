import { Text, StyleSheet } from "react-native";

function Title ({children}) {

    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color:'yellow',
        borderWidth:2,
        borderColor:'yellow' 
        
    }
});
export default Title;