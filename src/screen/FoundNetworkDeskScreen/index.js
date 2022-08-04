import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList, ScrollView} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const DATA=[
    {id:1,text:'John Doe '},
    {id:2,text:'John Doe'},
    {id:3,text:'John Doe'},
    {id:4,text:'John Doe'},
    {id:5,text:'John Doe'},
    {id:6,text:'John Doe'},
    {id:7,text:'John Doe '},
    {id:8,text:'John Doe'},
    {id:8,text:'John Doe'},
    {id:10,text:'John Doe'},
    {id:11,text:'John Doe'},
    {id:12,text:'John Doe'},
    {id:13,text:'John Doe'},
    {id:14,text:'John Doe'},

    ];
    const Item=({text})=>{
        return(
        <View style={styles.text}> 
         <Icon 
             name='face'
             type='MaterialIcons'
             size={totalSize(5)}
             style={{marginRight:width(1)}}
            />
            <Text style={{color:'black'}}>{text}</Text>
            <Icon
               name='person-add'
               type='Octicons'
               style={{marginLeft:width(58)}}
                color={'#0072EF'}
                 />
        </View>
        )
      }
const FoundNetworkDeskScreen=()=>{
  const navigation = useNavigation();
  const onBackPressed = () =>{
      navigation.navigate('SearchNetworkDeskcreen')   
  }
    const renderItem=({item})=>(
        <Item text={item.text}/>
      );
    return(
        <View style={{flex:1}}>
          <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:height(5),marginLeft:width(1)}}>
         <TouchableOpacity onPress={()=>onBackPressed()}>
            <Icon 
            name='chevron-left'
            type='feather'
             color={'black'}   
             style={{alignItems:'flex-start',marginLeft:width(2)}}
             />
           </TouchableOpacity>
           <View style={{width:'80%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'grey',flexDirection:'row',alignItems:'center',marginLeft:width(2)}}>
          <Icon
          name='search'
          type='feather'
          style={{marginLeft:width(1)}}
          />
          <Text style={{fontSize:totalSize(2),marginLeft:width(2)}}>SearchNetworkDesk</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:30,width:40,backgroundColor:'#0072EF',alignItems:'center',justifyContent:'center',marginLeft:width(7),marginTop:height(2),borderRadius:totalSize(3)}}>
            <Text style={{color:'white'}}>All</Text>
        </View>
        <View style={{height:30,width:70,backgroundColor:'#F2F2F2',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(2),borderRadius:totalSize(3)}}>
            <Text style={{color:'#404040'}}>Groups</Text>
        </View>
        <View style={{height:30,width:70,backgroundColor:'#F2F2F2',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(2),borderRadius:totalSize(3)}}>
            <Text style={{color:'#404040'}}>Forums</Text>
        </View>
        <View style={{height:30,width:70,backgroundColor:'#F2F2F2',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(2),borderRadius:totalSize(3)}}>
            <Text style={{color:'#404040'}}>Events</Text>
        </View>
        <View style={{height:30,width:70,backgroundColor:'#F2F2F2',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(2),borderRadius:totalSize(3)}}>
            <Text style={{color:'#404040'}}>Discover</Text>
        </View>
        </View>
           <Text style={{color:'black',marginLeft:width(7),marginTop:height(2)}}>10 Result found</Text>
           <View style={{borderBottomWidth:1,marginTop:height(3),borderBottomColor:'#E6E6E6'}}/>
          <View style={styles.container}> 
              <FlatList
                data = {DATA}
                renderItem={renderItem}
                keyExtractor={item=> item.id}
                  />
                </View>
          </View>
          </View>
    )
}
export default FoundNetworkDeskScreen