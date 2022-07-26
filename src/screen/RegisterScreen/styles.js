import { StyleSheet } from "react-native"
import {height,width,totalSize} from 'react-native-dimension'
export default styles =StyleSheet.create({
    TextInput:{
        width:'90%',
        marginHorizontal:25,
        fontWeight:'bold'
    
    },
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
        
      }
      )