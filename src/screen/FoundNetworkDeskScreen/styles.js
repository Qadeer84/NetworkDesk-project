import React from "react";
import {Text,View ,StyleSheet} from 'react-native'
import { totalSize, width } from "react-native-dimension";
export default styles=StyleSheet.create({
    container:{
        flex:1,
      },
      text:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:width(5),
        paddingVertical:totalSize(1),
        borderBottomWidth:1,
        borderBottomColor:'#E6E6E6',
      },
   
})