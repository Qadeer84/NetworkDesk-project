import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
export function ColoredButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,]}>
      <Text style={styles.buttonText} >{text}</Text>
    </TouchableOpacity>

  )
}

export function SimpleButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.joinbutton}>
      <Text style={styles.joinbuttonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function FixButton({ text }) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText} >{text}</Text>
    </View>
  )
}
export function BackButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Backbutton}>
      <Text style={styles.BackbuttonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function NextButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Nextbutton}>
      <Text style={styles.NextbuttonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function ResendButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Resendbutton}>
      <Text style={styles.ResendbuttonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function AddExpButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.AddExpButton}>
      <Text style={styles.AddExpButtonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function AddServiceButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.AddServiceButton}>
      <Text style={styles.AddServiceButtonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function SkipButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.skipbutton}>
      <Text style={styles.skipbuttonText} >{text}</Text>
    </TouchableOpacity>
  )
}
export function SendButton({ text }) {
  return (
    <View style={styles.sendbutton}>
      <Text style={styles.sendbuttonText} >{text}</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0072EF',
    //padding: totalSize(1.5),
    marginHorizontal: width(5),
    marginTop:height(3),
    shadowColor: '#0072EF',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  buttonText: {
    fontSize:totalSize(2),
    fontWeight: '500',
    color: 'white',
  },
  joinbutton: {
    width: '90%',
    marginTop: height(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    padding: totalSize(1.5),
    borderWidth: 1,
    marginHorizontal: width(5),
    marginBottom: totalSize(5)
  },
  joinbuttonText: {
    fontSize:totalSize(2),
    fontWeight: '500',
    color: 'black',
  },
  Backbutton: {
    width: '45%',
    marginTop:height(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#EEEEEE',
    padding: totalSize(1.5),
    marginHorizontal: totalSize(1)
  },
  BackbuttonText: {
    fontSize: totalSize(2),
    fontWeight: '600',
    color: '#222222'
  },
  Nextbutton: {
    width: '45%',
    marginTop: height(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0072EF',
    padding: totalSize(1.5),
    marginHorizontal: totalSize(1)
  },
  NextbuttonText: {
    fontSize: totalSize(2),
    fontWeight: '600',
    color: 'white'

  },
  Resendbutton: {
    width: '18%',
    height: height(3.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#0072EF',
    marginLeft:width(20)
  },
  ResendbuttonText: {
    fontSize:totalSize(1.5),
    fontWeight: 'normal',
    color: 'white',
  },
  AddExpButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#0072EF',
    padding: totalSize(0.5),
    marginHorizontal: width(10)
  },
  AddExpButtonText: {
    fontSize: totalSize(1.7),
    fontWeight: 'normal',
    color: 'white',
  },
  skipbutton: {
    width: '90%',
    marginTop: totalSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0F1A4833',
    padding: totalSize(1.5),
    marginHorizontal: 20
  },
  skipbuttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  sendbutton: {
    width: '85%',
    marginTop: height(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'blue',
    padding: totalSize(1),
    marginHorizontal: 20
  },
  sendbuttonText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  AddServiceButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#0072EF',
    padding: totalSize(0.4),
    marginHorizontal: width(4)
  },
  AddServiceButtonText: {
    fontSize: totalSize(1.7),
    fontWeight: 'normal',
    color: 'white',
  },
}
)
