import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,Input,TouchableOpacity,FlatList,ScrollView ,Button} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { ColoredButton } from '../../components/buttons'
import { Spacer } from '../../components/spacers'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const DATA=[
    {id:1,text:'Real Estate Agent'},
    {id:2, text:'Mortgage specialist'},
    {id:3, text:'Lawyer\Notray'},
    {id:4, text:'Home inspector'},
    {id:5, text:'Appraiser'},
    {id:6, text:'Relocation specialist'},
    {id:7, text:'Property insurance specialist'},
    {id:8, text:'other'},
    ];
    const Item=({text})=>{
        return(
        <View style={styles.text}> 
        <Text>{text}</Text>
        </View>
        )
      }
const  HelloNextScreen=() =>{
  const navigation = useNavigation();
  const onNextPressed = () =>{
      navigation.navigate('BusinessNextScreen')   
  }

    const renderItem=({item})=>(
        <Item text={item.text}/>
      );
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <Spacer height={totalSize(7)}/>
            <Text style={{fontSize:totalSize(3),fontWeight:'bold',marginLeft:width(4)}}>Hello,Brenna,</Text>
            <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginLeft:width(4)}}>Welcome to NetworkDesk,</Text>
            <Text style={{fontSize:totalSize(2),fontWeight:'bold',marginLeft:width(4)}}>We're happy to have you!</Text>
            <Spacer height={totalSize(4)}/>
            <Text style={{fontSize:totalSize(1.5),fontWeight:'bold',marginLeft:width(4)}}>Please tell us,What is your profession?</Text>
            <View style={{borderBottomWidth:1,marginTop:height(3),borderBottomColor:'grey'}}/>
              <View style={styles.container}> 
              <FlatList
                data = {DATA}
                renderItem={renderItem}
                keyExtractor={item=> item.id}
                  />
                 <View style={{marginBottom:height(3)}}>
                   <ColoredButton text={'Next'} onPress={()=>onNextPressed()}
                   />
                   </View>
                </View>
        </View>
    )
}
   
export default HelloNextScreen