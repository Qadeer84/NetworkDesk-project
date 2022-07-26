import { StyleSheet } from "react-native"
import {height,width,totalSize} from 'react-native-dimension'
export default styles =StyleSheet.create({
    TextInput:{
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        width:'90%',
        marginHorizontal:20
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
      }
      )
  