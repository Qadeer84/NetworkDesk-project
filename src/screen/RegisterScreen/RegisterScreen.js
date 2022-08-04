import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { ColoredTextinput } from '../../components/textinputs/index'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton } from '../../components/buttons'
import { SimpleButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
const RegisterScreen = () => {
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [password, setPassword] = useState(true);
  const navigation = useNavigation();
  const onBackPressed = () => {
    navigation.navigate('LoginScreen')
  }
  const onRegisterPressed = () => {
    navigation.navigate('PhoneVerifyScreen')
  }
  return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => onBackPressed()}>
            <Icon
              name='chevron-left'
              type='feather'
              color={'black'}
              style={{ alignItems: 'flex-start', marginLeft:width(4), marginTop:height(5) }}
            />
          </TouchableOpacity>
          <Text style={{ marginTop: height(5), alignItems: 'center', marginLeft: width(30), fontWeight: 'bold', fontSize: 20 }}>Register</Text>
        </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginTop:totalSize(3) }}>
          <ColoredTextinput
            title={'First Name'}
          />
          <ColoredTextinput
            title={'Last Name'}
          />
        </View>
        <ColoredTextinput
          title={'Email'}
        />
        <Spacer height={20} />
        <ColoredTextinput
          title={'Password'}
          onChangeText={text => setPassword(text)}
          value={password}
          right={<Icon
            name={passwordHidden ? 'eye-off' : 'eye'}
            type='ionicon'
            color={passwordHidden ? 'grey' : 'black'}
            onPress={() => { setPasswordHidden(!passwordHidden) }}
            iconStyle={{ marginRight: width(2) }}
          />}
          secureTextEntry={passwordHidden}
        />

        <View style={{ flexDirection: 'row' ,marginTop:height(3)}}>
          <TouchableOpacity>
            <Icon
              name='checkcircle'
              type='antdesign'
              color={'blue'}
              style={{ alignItems: 'flex-start', marginLeft:width(5),marginTop:height(1)}}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft:width(2), fontSize: totalSize(1.7) }}>By Clicking Register,you agree to NetworkDesk's {'\n'}<Text style={{ color: 'blue' }}>Users Agreement privcy policy</Text>and<Text style={{ color: 'blue' }}> Cookie policy.</Text></Text>
        </View>
        <ColoredButton
          text={'REGISTER'} onPress={() => onRegisterPressed()}
        />
    </ScrollView>
      </View>
  )
}
export default RegisterScreen