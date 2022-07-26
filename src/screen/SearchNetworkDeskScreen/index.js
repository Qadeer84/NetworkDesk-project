import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
const DATA=[
    {id:1,text:'John Doe '},
    {id:2,text:'John Doe'},
    {id:3,text:'John Doe'},
    {id:4,text:'John Doe'},
    {id:5,text:'John Doe'},
    {id:6,text:'John Doe'},

    ];
    const Item=({text})=>{
        return(
        <View style={styles.text}> 
        <Icon 
             name='face'
             type='MaterialIcons'
             size={totalSize(5)}
            />
        <Text style={{color:'black'}}>{text}</Text>
        <Icon
        name='close'
        type='antdesign'
        size={totalSize(2)}
        color={'grey'}
        style={{marginLeft:totalSize(28)}}
        />
        </View>
        )
      }
const SearchNetworkDeskcreen=()=>{
    const renderItem=({item})=>(
        <Item text={item.text}/>
      );
    return(
        <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:height(5),marginLeft:totalSize(1)}}>
         <TouchableOpacity>
            <Icon 
            name='chevron-left'
            type='feather'
             color={'black'}   
             style={{alignItems:'flex-start',marginLeft:totalSize(2)}}
             />
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{width:'100%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'grey',flexDirection:'row',alignItems:'center',marginLeft:totalSize(2)}}>
          <Icon
          name='search'
          type='feather'
          style={{marginLeft:totalSize(1)}}
          />
          <Text style={{fontSize:totalSize(2),marginLeft:width(2)}}>SearchNetworkDesk</Text>
          </View>
          </TouchableOpacity>
           </View>
           
           <Text style={{color:'black',marginLeft:width(7),marginTop:height(2)}}>Recently searched</Text>
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
const styles=StyleSheet.create({
    container:{
        flex:1,
      },
      text:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:14,
        borderBottomWidth:1,
        borderBottomColor:'grey',
      }
})
export default SearchNetworkDeskcreen