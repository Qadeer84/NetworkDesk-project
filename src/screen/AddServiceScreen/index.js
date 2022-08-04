import React from "react";
import {Text,View,Image} from 'react-native'
import { height, totalSize,width } from "react-native-dimension";
import Forgotpw from '../../assets/Images/forgotpasswordpic.png'
import { BackButton, ColoredButton, NextButton } from "../../components/buttons";
import { Spacer } from "../../components/spacers";
import { useNavigation } from '@react-navigation/native';
const AddServiceScreen=()=>{
    const navigation = useNavigation();
  const onaddservicePressed = () =>{
      navigation.navigate('AddYourServiceScreen')   
  }
  const onBackPressed = () =>{
    navigation.navigate('BusinessNextScreen')   
}
    return(
        <View style={{flex:1}}>
               <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginTop:height(10),marginLeft:width(4),color:'black'}}>Please tell us a litle more {'\n'}about your service area</Text>
               <Image source={Forgotpw}
               style={{marginTop:height(4),alignSelf:'center'}}
                />
                
                   <ColoredButton text={'Add service area'} onPress={()=>onaddservicePressed()}/>
                    <View style={{flexDirection:'row',marginTop:height(20)}}>
                    <BackButton text={'BACK'} onPress={()=>onBackPressed()}/>
                     <NextButton text={'Next'}/>
        </View>
    </View>
    )
}
export default AddServiceScreen