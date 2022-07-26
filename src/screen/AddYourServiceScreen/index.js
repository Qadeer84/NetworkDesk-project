import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
import Modal from "react-native-modal";
import { ColoredTextinput } from '../../components/textinputs'
const DATA=[
{id:1,text:'Residential sales'},
{id:2, text:'Commercial sales'},
{id:3, text:'Rural properties'},
{id:4, text:'Investment properties'},
{id:5, text:'Luxury properties'},
{id:6, text:'Agricultural  properties'},
{id:7, text:'Strata  properties'},
{id:8, text:'property Management'},
{id:9, text:'Commercial Lessing'},
{id:10,text:'Residential sales'},
{id:11, text:'Commercial sales'},
{id:12,text:'Residential sales'},
{id:13, text:'Rural properties'},
{id:14, text:'Investment properties'},
{id:15, text:'Luxury properties'},
{id:16, text:'Agricultural  properties'},
{id:17, text:'Strata  properties'},
{id:19, text:'Commercial sales'},
{id:20, text:'Rural properties'},
{id:21, text:'Investment properties'},
{id:22, text:'Luxury properties'},
{id:23, text:'Agricultural  properties'},
{id:24, text:'Strata  properties'},

];
const Item=({text})=>{
  return(
  <View style={styles.text}> 
  <Icon 
          name="location"
          type="evilicon"
          style={{marginRight:totalSize(1)}}
          />
  <Text>{text}</Text>
  </View>
  )
}
const AreaAddYourServiceScreen= () =>{
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem=({item})=>(
    <Item text={item.text}/>
  );
 
  
return(
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row'}}>
         <TouchableOpacity>
            <Icon 
            name='chevron-left'
            type='feather'
             color={'black'}   
             style={{alignItems:'flex-start',marginLeft:totalSize(2),marginTop:totalSize(4)}}
             />
           </TouchableOpacity>
            <Text style={{marginTop:height(5),alignItems:'center',marginLeft:totalSize(10),fontWeight:'bold'}}>Add your service areas </Text>
            </View>
            <View style={{alignItems:'center',marginTop:height(5)}}>
          <View style={{width:'90%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'grey',flexDirection:'row',alignItems:'center'}}>
          <Icon
          name='search'
          type='feather'
          style={{margin:7}}
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
const styles=StyleSheet.create({
    container:{
      flex:1,
    },
    text:{
      flexDirection:'row',
      paddingHorizontal:20,
      paddingVertical:14,
      borderBottomWidth:1,
      borderBottomColor:'grey',
      
    }
})
export default AreaAddYourServiceScreen