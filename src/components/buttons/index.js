import React from 'react'
import { StyleSheet, TextInput, View ,TouchableOpacity,Text} from "react-native";
import { height, totalSize, width } from "react-native-dimension";
export function ColoredButton({text,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText} >{text}</Text>
        </TouchableOpacity>
        
    )
}

export function SimpleButton({text,onPress}) {
    return(
<TouchableOpacity onPress={onPress} style={styles.joinbutton}>
            <Text style={styles.joinbuttonText} >{text}</Text>
          </TouchableOpacity>
          )
}
export function FixButton({text}) {
  return(
<View style={styles.button}>
          <Text style={styles.buttonText} >{text}</Text>
        </View>
        )
}
export function BackButton({text}) {
  return(
<TouchableOpacity style={styles.Backbutton}>
          <Text style={styles.BackbuttonText} >{text}</Text>
        </TouchableOpacity>
        )
}
export function NextButton({text}) {
  return(
<TouchableOpacity style={styles.Nextbutton}>
          <Text style={styles.NextbuttonText} >{text}</Text>
        </TouchableOpacity>
        )
}
export function ResendButton({text,onPress}) {
  return(
<TouchableOpacity onPress={onPress} style={styles.Resendbutton}>
          <Text style={styles.ResendbuttonText} >{text}</Text>
        </TouchableOpacity>
        )
}
export function AddExpButton({text,onPress}) {
  return(
<TouchableOpacity onPress={onPress} style={styles.AddExpButton}>
          <Text style={styles.AddExpButtonText} >{text}</Text>
        </TouchableOpacity>
        )
}
export function SkipButton({text}) {
  return(
<TouchableOpacity  style={styles.skipbutton}>
          <Text style={styles.skipbuttonText} >{text}</Text>
        </TouchableOpacity>
        )
}
export function SendButton({text}) {
  return (
      <View style={styles.sendbutton}>
      <Text style={styles.sendbuttonText} >{text}</Text>
      </View>
      
  )
}
const styles = StyleSheet.create({
    button: {
        width:'90%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'blue',
        padding: totalSize(1.5),
        marginHorizontal:20
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'white',
      },
      joinbutton: {
        width:'90%',
        marginTop:totalSize(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'white',
        padding: totalSize(1.5),
        borderWidth:1,
        marginHorizontal:20,
        marginBottom:totalSize(5)
      },
      joinbuttonText: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'black',
      },
   Backbutton:{
    width:'45%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'gray',
    padding: totalSize(1.5),
    marginHorizontal:totalSize(1)
  },
  BackbuttonText:{
    fontSize: 18,
        fontWeight: 'normal',
        color:'white'
      },
      Nextbutton:{
        width:'45%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'blue',
        padding: totalSize(1.5),
        marginHorizontal:totalSize(1)
      },
      NextbuttonText:{
        fontSize: 18,
            fontWeight: 'normal',
            color:'white'
            
          },
          Resendbutton: {
            width:'18%',
            height:25,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
            backgroundColor: 'blue',
          marginLeft:totalSize(10)
          },
          ResendbuttonText: {
            fontSize: 12,
            fontWeight: 'normal',
            color: 'white',
          },
          AddExpButton: {
            width:'40%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: 'blue',
            padding: totalSize(0.5),
            marginHorizontal:totalSize(5)
          },
          AddExpButtonText: {
            fontSize: 15,
            fontWeight: 'normal',
            color: 'white',
          },
          skipbutton: {
            width:'90%',
            marginTop: totalSize(5),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: 'grey',
            padding: totalSize(1.5),
            marginHorizontal:20
          },
          skipbuttonText: {
            fontSize: 18,
            fontWeight: 'normal',
            color: 'black',
          },
    sendbutton: {
      width:'85%',
      marginTop: height(2),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: 'blue',
      padding: totalSize(1),
      marginHorizontal:20
    },
    sendbuttonText: {
      fontSize: 18,
      fontWeight: 'normal',
      color: 'white',
    },
  }
)
