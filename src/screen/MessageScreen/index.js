import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList, Alert} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const DATA=[
    {id:1,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:2,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:3,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:4,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:5,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:6,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:7,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:8,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:9,text:'John Doe                                                          2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:10,text:'John Doe                                                         2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:11,text:'John Doe                                                         2h ago \n Hi,how many of you guys the update listing?ca'},
    {id:12,text:'John Doe                                                         2h ago \n Hi,how many of you guys the update listing?ca'},
    ];
    var swipeoutBtns = [
        {
          text: 'Menu'
        }
      ]
    const Item=({text})=>{
        return(
            <Swipeout right={swipeoutBtns} style={styles.swipestyle}>
        <View style={styles.text}> 
        <Icon 
             name='face'
             type='MaterialIcons'
             size={totalSize(5)}
             style={{marginRight:width(1)}}
            />
        <Text style={{color:'black'}}>{text}</Text>
        </View>
        </Swipeout>
        )
      };
const MessageScreen=()=>{
  const navigation = useNavigation();
  const onBackPressed = () =>{
      navigation.navigate('MainHomeScreen')   
  }


    const renderItem=({item})=>(
        <Item text={item.text}/>
      );
    return(
        <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:height(4)}}>
         <TouchableOpacity onPress={()=>onBackPressed()}>
            <Icon 
            name='chevron-left'
            type='feather'
             color={'black'}   
             style={{marginLeft:width(4)}}
             />
           </TouchableOpacity>
            <Text style={{marginLeft:width(28),fontSize:totalSize(2.2),alignItems:'center',fontWeight:'bold'}}>Messages</Text>
            <Icon
                 name='plus'
                 type='feather'
                 style={{marginLeft:width(25)}}
             />
            
            </View>
            <View style={{alignItems:'center',marginTop:height(5)}}>
          <View style={{width:'90%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'grey',flexDirection:'row',alignItems:'center'}}>
          <Icon
          name='search'
          type='feather'
          style={{margin:totalSize(1)}}
          />
          <Text>Search</Text>
          </View>
          </View>
          
          <View style={{borderBottomWidth:1,marginTop:height(3),borderBottomColor:'grey'}}/>
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
export default MessageScreen
