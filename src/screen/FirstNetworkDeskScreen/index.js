import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity ,onPress} from 'react-native'
import {totalSize} from 'react-native-dimension'
import {useNavigation} from '../../Navigation/index'
const FirstNetworkDeskScreen= () =>{
    
    const onNPressed = () =>{
        navigation.navigate('SecondNetworkDeskScreen')
    }
return(
    <View style={{flex:1}}>
             <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
             <TouchableOpacity onPress={()=>onNPressed()}>
                 <Text style={{color:'white',fontSize:totalSize(18),fontWeight:'bold'}}>N</Text>
                 <Text style={{color:'white',fontSize:totalSize(3),fontWeight:'bold'}}>Network<Text style={{color:'white',fontWeight:'normal'}}>Desk</Text></Text>
                 </TouchableOpacity>
             </View>
        
    </View>
)
}
export default FirstNetworkDeskScreen