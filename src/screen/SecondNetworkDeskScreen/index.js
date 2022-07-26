import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { useNavigation } from '@react-navigation/native';
const SecondNetworkDeskScreen= () =>{
    
    const onNPressed = () =>{
        navigation.navigate('SecondNetworkDeskScreen')
        
    }
return(
    <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity>
        <View style={{height:totalSize(20),width:totalSize(20),backgroundColor:'grey',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:totalSize(15),fontWeight:'bold'}}>N</Text>
        </View>
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:totalSize(3),fontWeight:'bold',marginTop:10}}>Network<Text style={{color:'white',fontWeight:'normal'}}>Desk</Text></Text>
    </View>

)
}
export default SecondNetworkDeskScreen