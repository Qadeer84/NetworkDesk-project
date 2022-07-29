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
const VerifyCodeScreen= () =>{
    const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
   const onBackPressed = () =>{
       navigation.navigate('PhoneVerifyScreen')  
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
       style={{alignItems:'flex-start',marginLeft:totalSize(2),marginTop:totalSize(4)}}
      />
       </TouchableOpacity>
       <Text style={{marginTop:height(5),alignItems:'center',marginLeft:totalSize(15),fontWeight:'bold',fontSize:15}}>Verify</Text>
       </View>
       <Image source={Forgotpw}
       style={{marginTop:height(2),alignSelf:'center'}}
       />
       <Text style={{marginTop:height(5),marginLeft:totalSize(3),fontWeight:'bold',fontSize:totalSize(2.5)}}>Enter the 4 digit verification code</Text>
       <OTPInputView
            style={{width: '80%', height: 200,alignSelf:'center'}}
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
        <Text style={{fontWeight:'bold'}}>Did't the received code yet?</Text>
       <ResendButton text={'Resend'} onPress={toggleModal}/>
       </View>
       <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1,backgroundColor:'white' ,marginTop:totalSize(50),borderTopLeftRadius:20,borderTopRightRadius:20,alignItems:'center'}}>
         <Icon
         name='check-circle'
         type='feather'
         size={50}
         color={'green'}
         style={{marginTop:height(3)}}
         />
          <Spacer height={10}/>
          <Text style={{color:'black',fontSize:totalSize(2.5),fontWeight:'bold'}}>A new verification code has {'\n'} {'  '}been send to your phone{'\n'}{'                 '} number </Text>
         <Spacer height={10}/>
          <ColoredButton 
       text={'DONE'} onPress={toggleModal}
       />
        </View>
      </Modal>
    </View>
       </View>
       </View>
)
}
const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
    underlineStyleBase: {
      width: 60,
      height: 45,
      borderBottomWidth: 2,
      borderWidth:0
    },
  });
export default VerifyCodeScreen