import React from 'react'
import {View,Text,TouchableOpacity } from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const SecondNetworkDeskScreen= () =>{
    const navigation = useNavigation();
    const onNPressed = () =>{
        navigation.navigate('LoginWithEmailScreen')
    }
return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>onNPressed()}>
        <View style={{height:totalSize(17),width:totalSize(17),backgroundColor:'grey',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:totalSize(12),fontWeight:'bold'}}>N</Text>
        </View>
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:totalSize(3),fontWeight:'bold',marginTop:height(2)}}>Network<Text style={{color:'white',fontWeight:'normal'}}>Desk</Text></Text>
    </View>
)
}
export default SecondNetworkDeskScreen