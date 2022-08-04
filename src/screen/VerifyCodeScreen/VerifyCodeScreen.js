import React,{useState} from 'react'
import Modal from "react-native-modal";
import {View,Text,StyleSheet,Image,TextInput,Input,TouchableOpacity,ScrollView } from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Button, Icon } from 'react-native-elements'
import Forgotpw from '../../assets/Images/forgotpasswordpic.png'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const VerifyCodeScreen= () =>{
    const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
   const onBackPressed = () =>{
       navigation.navigate('PhoneVerifyScreen')  
   }
   const onDonePressed = () =>{
    navigation.navigate('HelloNextScreen')  
}
return(
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>onBackPressed()}>
    <Icon 
       name='chevron-left'
       type='feather'
       color={'black'}   
       style={{alignItems:'flex-start',marginLeft:width(5),marginTop:height(5)}}
      />
       </TouchableOpacity>
       <Text style={{marginTop:height(5),alignItems:'center',marginLeft:width(30),fontWeight:'bold',fontSize:totalSize(2)}}>Verify</Text>
       </View>
       <Image source={Forgotpw}
       style={{marginTop:height(2),alignSelf:'center'}}
       />
       <Text style={{color:'black',marginTop:height(5),marginLeft:totalSize(3),fontWeight:'bold',fontSize:totalSize(2.5)}}>Enter the 4 digit verification {'\n'}code</Text>
       <OTPInputView
            style={{width: '80%', height:height(20),alignSelf:'center'}}
            pinCount={4}
            secureTextEntry
            autoFocusOnLoad
             codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
             onCodeFilled = {(code => {
              console.log(`Code is ${code}, you are good to go!`)
             })}
        />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Text style={{fontWeight:'bold',marginLeft:width(3),color:'#101010'}}>Did't the received code yet?</Text>
       <ResendButton text={'Resend'} onPress={toggleModal}/>
       </View>
       <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}
        style={{margin:0}}
        onBackdropPress={toggleModal}
      >
        <View style={{ flex: 1,backgroundColor:'white' ,marginTop:height(55),borderTopLeftRadius:20,borderTopRightRadius:20,alignItems:'center'}}>
         <Icon
         name='check-circle'
         type='feather'
         size={50}
         color={'green'}
         style={{marginTop:height(3)}}
         />
          <Spacer height={12}/>
          <Text style={{color:'black',fontSize:totalSize(2.5),fontWeight:'bold'}}>A new verification code has {'\n'} {'  '}been send to your phone{'\n'}{'                 '} number </Text>
         <Spacer height={15}/>
          <ColoredButton 
       text={'DONE'} onPress={
         ()=>{
          toggleModal()
          onDonePressed
         }

       }
       />
        </View>
      </Modal>
    </View>
       </View>
       </View>
)
}
export default VerifyCodeScreen