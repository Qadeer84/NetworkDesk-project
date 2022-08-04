import React from 'react'
import {View,Text,TouchableOpacity } from 'react-native'
import {totalSize, width} from 'react-native-dimension'
import { useNavigation } from '@react-navigation/native';
import styles from '../FirstNetworkDeskScreen/styles'
const FirstNetworkDeskScreen= () =>{
    const navigation = useNavigation();
    const onNPressed = () =>{
        navigation.navigate('SecondNetworkDeskScreen')
    }
return(
    <View style={{flex:1}}>
             <View style={styles.container}>
             <TouchableOpacity  onPress={()=>onNPressed()}>
                 <Text style={{color:'white',fontSize:totalSize(15),fontWeight:'bold',marginHorizontal:width(7)}}>N</Text>
                 <Text style={{color:'white',fontSize:totalSize(3),fontWeight:'bold'}}>Network<Text style={{color:'white',fontWeight:'normal'}}>Desk</Text></Text>
                 </TouchableOpacity>
             </View>
    </View>
)
}
export default FirstNetworkDeskScreen