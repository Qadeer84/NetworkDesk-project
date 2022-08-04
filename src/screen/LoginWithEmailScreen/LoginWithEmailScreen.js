import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, ScrollView,onPress } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton } from '../../components/buttons'
import { SimpleButton } from '../../components/buttons'
import styles from './styles'

const EmailScreen = () => {
  const navigation = useNavigation();
  const onLoginwithemailPressed = () =>{
      navigation.navigate('LoginScreen')   
  }
  const onjoinPressed = () =>{
    navigation.navigate('RegisterScreen')
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ height: totalSize(17), width: totalSize(17), backgroundColor: 'grey', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: totalSize(12), fontWeight: 'bold' }}>N</Text>
          </View>
          <Text style={{ color: 'white', fontSize: totalSize(3), fontWeight: 'bold', marginTop:totalSize(1) }}>Network<Text style={{ color: 'white', fontWeight: 'normal' }}>Desk</Text></Text>
        </View>
        <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <ColoredButton
          text={'LOGIN WITH EMAIL'}  onPress={()=>onLoginwithemailPressed()}
          />
          <Text style={{ marginTop: height(3), alignSelf: 'center' }}>Or continue with </Text>
          <View style={{ marginTop: height(4), flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Icon
              name='facebook'
              type='Feather'
              size={totalSize(3.5)}
              color='blue'
            />
            <Icon
              name='google'
              type='antdesign'
              size={totalSize(3.5)}
              color='green'
            />
            <Icon
              name='instagram'
              type='antdesign'
              size={totalSize(3.5)}
              color='red'
            />
            <Icon
              name='linkedin-square'
              type='antdesign'
              size={totalSize(3.5)}
              color='blue'
            />
          </View>
          <Text style={{ marginTop: height(4), alignSelf: 'center' }}>Dont't have an account? </Text>
         <SimpleButton
         text={'JOIN NOW'} onPress={()=>onjoinPressed()}
         />
        </View>
      </View>
    </View>
  )
}
export default EmailScreen