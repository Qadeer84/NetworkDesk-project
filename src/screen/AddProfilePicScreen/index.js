import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton, SkipButton } from '../../components/buttons'
const AddProfilepicScreen=()=>{
    return(
        <View style={{flex:1}}>
         <View style={{backgroundColor:'grey',height:'20%',alignItems:'center',justifyContent:'center'}}>
            <Icon 
            name='camera'
            type='entypo'
            />

            <Text style={{fontWeight:'bold'}}>Tab to change cover photo</Text>
          </View>
          <Text style={{fontWeight:'bold',fontSize:totalSize(2),marginLeft:totalSize(2),marginTop:height(2)}}>Brenna Burns</Text>
          <Text style={{color:'black',fontSize:totalSize(1.5),marginLeft:totalSize(2),marginTop:height(1)}}>Real Estate Agent</Text>
          <Text style={{color:'grey',fontSize:totalSize(1.5),marginLeft:totalSize(2),marginTop:height(1)}}>Century 21 Energy Realty,For ST Jhon,BC,Canada</Text>
          <Text style={{color:'black',fontSize:totalSize(2),marginLeft:totalSize(4),marginTop:height(3)}}>Add aprofile picture cover photo</Text>
          <Text style={{color:'black',fontSize:totalSize(2),marginLeft:totalSize(4),marginTop:height(4)}}>Tell us about brenna</Text>
          <Text style={{color:'black',fontSize:totalSize(2),marginLeft:totalSize(4),marginTop:height(4)}}>Follow people may you know</Text>
           <Spacer height={totalSize(25)}/>
           <SkipButton text={'SKIP FOR NOW'}/>


          </View>
    )
}
export default AddProfilepicScreen