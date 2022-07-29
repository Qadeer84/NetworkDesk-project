import React from "react";
import {Text,View,Image} from 'react-native'
import { height, totalSize,width } from "react-native-dimension";
import Forgotpw from '../../assets/Images/forgotpasswordpic.png'
import { BackButton, ColoredButton, NextButton } from "../../components/buttons";
import { Spacer } from "../../components/spacers";
const AddServiceScreen=()=>{
    return(
        <View style={{flex:1}}>
               <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginTop:height(10),marginLeft:width(4)}}>Please tell us a litle more {'\n'}about your service area</Text>
               <Image source={Forgotpw}
               style={{marginTop:height(4),alignSelf:'center'}}
                />
                <Spacer height={15}/>
                   <ColoredButton text={'Add service area'}/>
                    <View style={{flexDirection:'row',marginTop:height(25)}}>
                    <BackButton text={'BACK'}/>
                     <NextButton text={'Next'}/>
        </View>
    </View>
    )
}
export default AddServiceScreen