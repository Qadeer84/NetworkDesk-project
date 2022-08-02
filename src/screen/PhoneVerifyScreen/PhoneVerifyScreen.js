import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";
import Forgotpw from '../../assets/Images/forgotpasswordpic.png'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton } from '../../components/buttons'
import { SimpleButton } from '../../components/buttons'
import { ColoredTextinput } from '../../components/textinputs/index'
import { useNavigation } from '@react-navigation/native';
const PhoneVerifyScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const onBackPressed = () => {
    navigation.navigate('RegisterScreen')
  }
  const onContinuePressed = () => {
    navigation.navigate('VerifyCodeScreen')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => onBackPressed()}>
            <Icon
              name='chevron-left'
              type='feather'
              color={'black'}
              style={{ alignItems: 'flex-start', marginLeft: totalSize(2), marginTop: totalSize(4) }}
            />
          </TouchableOpacity>
          <Text style={{ marginTop: height(5), alignItems: 'center', marginLeft: totalSize(10), fontWeight: 'bold' }}>Phone Verification</Text>
        </View>
        <Image source={Forgotpw}
          style={{ marginTop: height(2), alignSelf: 'center' }}
        />

        <Text style={{ marginTop: height(5), marginLeft: totalSize(3), fontWeight: 'bold', fontSize: totalSize(2.5) }}>Enter  your phone number for Verification</Text>

        <ColoredTextinput
          placeholder={'Phone Number'}
        />
        <Spacer height={height(3)} />
        <ColoredButton
          text={'VERIFY'} onPress={toggleModal}
        />

        <View style={{ flex: 1 }}>
          <Modal 
          isVisible={isModalVisible}
          style={{margin:0}}
          onBackdropPress={toggleModal}
          >
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: height(60), borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: 'center' }}>
              <Icon
                name='check-circle'
                type='feather'
                size={totalSize(10)}
                color={'green'}
                style={{ marginTop: height(3) }}
              />
                  <Spacer height={height(3)} />
              <Text style={{ color: 'black', fontSize: totalSize(2.5), fontWeight: 'bold' }}>A verification code has been  {'\n'} {' '}sent to your phone number</Text>
              <Spacer height={height(3)} />

              <ColoredButton
                text={'CONTINUE'}
                onPress={
                  //toggleModal

                  //   () => {
                  //   setModalVisible(!isModalVisible);
                  // }

                  () => {
                    toggleModal()
                    onContinuePressed()
                  }
                }
              //onPress={() => onContinuePressed()}
              />


            </View>
          </Modal>
        </View>

      </View>
    </ScrollView>
  )
}
export default PhoneVerifyScreen