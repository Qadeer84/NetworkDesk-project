import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,Input,TouchableOpacity,ScrollView ,Button} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { BackButton, NextButton,  } from '../../components/buttons'
import { Spacer } from '../../components/spacers'
import { BorderedTextinput, ColoredTextinput } from '../../components/textinputs'
import { useNavigation } from '@react-navigation/native';
const  BusinessNextScreen=() =>{
  const navigation = useNavigation();
  const onNextPressed = () =>{
      navigation.navigate('AddServiceScreen')   
  }
  const onBackPressed = () =>{
    navigation.navigate('HelloNextScreen')   
}
    return(
        <ScrollView showsVerticalScrollIndicator={true}>
           <View style={{flex:1}}>
            <Spacer height={totalSize(6)}/>
            <Text style={{fontSize:totalSize(2.4),fontWeight:'bold',marginLeft:totalSize(2)}}>Please tell us a little more {'\n'}about your business </Text>
            <Spacer height={totalSize(3)}/>
            <Text style={{fontSize:totalSize(1.8),color:'gray',fontWeight:'bold',marginLeft:totalSize(2)}}>So that togher we can create a customized {'\n'}network that workd for you.</Text>
              <View style={{marginTop:totalSize(3)}}>
               <BorderedTextinput
                placeholder={'Company Name'}/>
                 <Spacer height={totalSize(3)}/>
                <BorderedTextinput
                placeholder={'Brokerage Name'}/>
                 <Spacer height={totalSize(3)}/>
                 <BorderedTextinput
                placeholder={'Brokerage Address'}/>
                 <Spacer height={totalSize(3)}/>
                 <BorderedTextinput
                placeholder={'Brokerage Phone Number'}/>
                <Spacer height={totalSize(3)}/>
                 <ColoredTextinput
                placeholder={'Area of Expertise'}
                right={ 
               <TouchableOpacity>
                 <Icon 
                      name={'chevron-down'}
                      type='feather'
                      color={'grey'}
                      iconStyle={{marginRight:width(2)}}
                     /> 
                 </TouchableOpacity>}/>
                  <View style={{flexDirection:'row',marginTop:totalSize(10),marginHorizontal:totalSize(1),marginBottom:totalSize(10)}}>
                  <BackButton text={'BACK'} onPress={()=>onBackPressed()}/>
                  <NextButton text={'NEXT'} onPress={()=>onNextPressed()}/>
                  </View>
                </View>
                </View>
            </ScrollView>
    )
}
export default BusinessNextScreen