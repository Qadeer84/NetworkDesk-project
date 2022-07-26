import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { ColoredTextinput } from '../../components/textinputs/index'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton } from '../../components/buttons'
import { SimpleButton } from '../../components/buttons'
import styles from './styles'
const RegisterScreen= () =>{
 const[passwordHidden, setPasswordHidden] = useState(true)
   
return(
  <ScrollView showsVerticalScrollIndicator={false}>

    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row'}}>
    <TouchableOpacity>
    <Icon 
       name='chevron-left'
       type='feather'
       color={'black'}   
       style={{alignItems:'flex-start',marginLeft:totalSize(2),marginTop:totalSize(4)}}
      />
       </TouchableOpacity>
       <Text style={{marginTop:height(5),alignItems:'center',marginLeft:totalSize(15),fontWeight:'bold',fontSize:20}}>Register</Text>
       </View>
       <Text style={{marginTop:height(5),marginLeft:totalSize(3),fontWeight:'bold',fontSize:totalSize(2.5)}}>Enter  your phone number for Verification</Text>
       <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
       <ColoredTextinput
        placeholder={'First Name'}
        />
         <ColoredTextinput
        placeholder={'Last Name'}
        />
        </View>
         <ColoredTextinput
        placeholder={'Email'} 
        />
        <Spacer height={20}/>
        <ColoredTextinput
        placeholder={'password'}
        right={<Icon 
          name={passwordHidden?'eye-off':'eye'}
          type='ionicon'
          color={'grey'}
          onPress={() => { setPasswordHidden (!passwordHidden) }}
          iconStyle={{marginRight:width(3)}}
          /> }
          secureTextEntry={passwordHidden}
        />
        
        <View style={{flexDirection:'row'}}>
         <TouchableOpacity>
          <Icon
          name='checkcircle'
          type='antdesign'
          color={'blue'}   
          style={{alignItems:'flex-start',marginLeft:totalSize(3),marginTop:totalSize(1)}}
          />
          </TouchableOpacity>
          <Text style={{marginLeft:totalSize(1),fontSize:totalSize(1.7)}}>By Clicking Register,you agree to NetworkDesk's {'\n'}<Text style={{color:'blue'}}>Users Agreement privcy policy</Text>and<Text style={{color:'blue'}}> Cookie policy.</Text></Text>
          </View>
          <ColoredButton
          text={'REGISTER'}
          />
        
       </View>
       </ScrollView>
)
}
export default RegisterScreen