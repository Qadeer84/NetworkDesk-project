import React from "react";
import {Text,View,Image} from 'react-native'
import { height, totalSize,width } from "react-native-dimension";
import { Icon } from "react-native-elements";
import { BackButton, ColoredButton, NextButton ,ResendButton} from "../../components/buttons";
import { Spacer } from "../../components/spacers";
import { useNavigation } from '@react-navigation/native';
const AboutServiceScreen=()=>{
  const navigation = useNavigation();
  const onBackPressed = () =>{
      navigation.navigate('BusinessNextScreen')   
  }
  const onNextPressed = () =>{
    navigation.navigate('AddProfilepicScreen')   
}
const onaddPressed = () =>{
  navigation.navigate('AddYourServiceScreen')   
}
    return(
        <View style={{flex:1}}>
              <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginTop:height(5),marginLeft:width(4)}}>Please tell us a litle more {'\n'}about your service area</Text>
               <View style={{borderBottomWidth:0.5,color:'grey',marginTop:totalSize(2)}}></View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:totalSize(1),marginLeft:totalSize(1)}}>
                        <Icon 
                         name="location"
                         type="evilicon"
                        />
                         <Text style={{marginLeft:totalSize(1),fontWeight:'bold'}}>Isomborough</Text>
                          <Icon 
                         name="close"
                         type="antdesign"
                          color={'red'}
                          size={totalSize(2)}
                           style={{marginLeft:totalSize(28)}}
                             />
                            </View>
                             <View style={{borderBottomWidth:0.5,color:'grey',marginTop:totalSize(1)}}></View>
                           <View style={{flexDirection:'row',alignItems:'center',marginTop:totalSize(1),marginLeft:totalSize(1)}}>
        
                           <Icon 
                              name="location"
                                 type="evilicon"
                                />
                              <Text style={{marginLeft:totalSize(1),fontWeight:'bold'}}>Aufderharhaven</Text>
                              <Icon 
                                name="close"
                          type="antdesign"
                        color={'red'}
                           size={totalSize(2)}
                                style={{marginLeft:totalSize(26)}}
                               />
                            </View>
                         <View style={{borderBottomWidth:0.5,color:'grey',marginTop:totalSize(1)}}></View>
           
                           <View style={{flexDirection:'row',alignItems:'center',marginTop:height(3),marginLeft:totalSize(2)}}>
                                <Text style={{color:'black'}}>Whant to add more service areas?</Text>
                                <ResendButton text={'Add Service'}  onPress={()=>onaddPressed()}/>
                           </View>
                             <View style={{flexDirection:'row',marginTop:height(50)}}>
                             <BackButton text={'BACK'} onPress={()=>onBackPressed()}/>
                              <NextButton text={'Next'} onPress={()=>onNextPressed()}/>
        </View>
    </View>
    )
}
export default AboutServiceScreen