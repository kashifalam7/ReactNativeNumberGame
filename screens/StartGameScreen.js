import PrimaryButton from "../components/PrimaryButton";
import { View, StyleSheet, TextInput } from "react-native";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: '#4e0329',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#72063c",
    borderBottomWidth: 2,
    color: "#ddb52f",
    margin: 8,
    fontWeight: "bold",
    width: 70,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    felx: 1,
  },
});

export default StartGameScreen;
