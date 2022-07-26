import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView,placeholder ,secureTextEntry} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Bordered, Spacers, TextInputs } from '../../components/textinputs/index'
import { ColoredTextinput } from '../../components/textinputs/index'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton } from '../../components/buttons'
import { SimpleButton } from '../../components/buttons'
import styles from './styles'
const LoginScreen= () =>{
  const [password, setPassword] = useState('')
  const[passwordHidden, setPasswordHidden] = useState(true)


return(
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={{flex:1,backgroundColor:'white'}}>
    <TouchableOpacity>
    <Icon 
       name='chevron-left'
       type='feather'
       color={'black'}   
       style={{alignItems:'flex-start',marginLeft:totalSize(2),marginTop:totalSize(4)}}
       />
       </TouchableOpacity>
        <View style={{alignSelf:'center',marginTop:height(10),width:totalSize(20),backgroundColor:'black',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:totalSize(15),fontWeight:'bold'}}>N</Text>
        </View>
        <Text style={{alignSelf:'center',color:'black',fontSize:totalSize(3),fontWeight:'bold',marginTop:10}}>Network<Text style={{color:'black',fontWeight:'normal'}}>Desk</Text></Text>
       
        <ColoredTextinput
        placeholder={'Email'}
        />
        <Spacer height={20}/>
        <ColoredTextinput
        placeholder={'password'}
        onChangeText={text =>setPassword(text)}
        value={password}
        right={<Icon 
          name={passwordHidden?'eye-off':'eye'}
          type='ionicon'
          color={passwordHidden? 'grey' : 'black'}
          onPress={() => { setPasswordHidden (!passwordHidden) }}
          iconStyle={{marginRight:width(2)}}
          /> }
          secureTextEntry={passwordHidden}
        />
  <TouchableOpacity>
     <Text style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 8, color: 'blue',marginEnd:30 }}>Forgot password?</Text>
     </TouchableOpacity>
     <ColoredButton
     text={'LOGIN'}
     />
       <Text style={{marginTop:height(3),alignSelf:'center'}}>Or continue with </Text>
       <View style={{marginTop:height(4),flexDirection:'row',justifyContent:'space-evenly'}}>
       <Icon 
       name='facebook'
       type='Feather'
      size={30}
      color='blue'    
       />
       <Icon 
       name='google'
       type='antdesign'
      size={30}
      color='green'
      
       />
         <Icon 
       name='instagram'
       type='antdesign'
      size={30}
      color='red'
      
       />
       <Icon 
       name='linkedin-square'
       type='antdesign'
      size={30}
      color='blue'
       />
       </View>
       
       <Text style={{marginTop:height(4),alignSelf:'center'}}>Dont't have an account? </Text>
     
       <SimpleButton
       text={'JOIN NOW'}
       />
         
       </View>
       </ScrollView>
)
}
  
export default LoginScreen