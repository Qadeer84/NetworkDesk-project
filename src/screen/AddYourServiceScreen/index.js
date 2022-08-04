import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { ColoredButton, ResendButton } from '../../components/buttons'
import Modal from "react-native-modal";
import { ColoredTextinput } from '../../components/textinputs'
import { useNavigation } from '@react-navigation/native';
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
                  style={{marginRight:width(1)}}
                    />
                <Text>{text}</Text>
              </View>
  )
}
const AddYourServiceScreen= () =>{
  const navigation = useNavigation();
  const onBackPressed = () =>{
      navigation.navigate('AddServiceScreen')   
  }
  const onsearchPressed = () =>{
    navigation.navigate('AboutServiceScreen')   
}

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
                <TouchableOpacity onPress={()=>onBackPressed()}>
                  <Icon 
                      name='chevron-left'
                       type='feather'
                       color={'black'}   
                          style={{alignItems:'flex-start',marginLeft:width(4),marginTop:height(5)}}
                            />
                  </TouchableOpacity>
                     <Text style={{marginTop:height(5),alignItems:'center',marginLeft:width(15),fontWeight:'bold',fontSize:totalSize(2),color:'black'}}>Add your service areas </Text>
                      </View>
                      <View style={{alignItems:'center',marginTop:height(5)}}>
                     <View style={{width:'90%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'#E6E6E6',flexDirection:'row',alignItems:'center'}}>
                      <Icon
                        name='search'
                        type='feather'
                        style={{margin:totalSize(1)}}
                         />
                       <Text>Search</Text>
                       </View>
                      </View>
                     <View style={{borderBottomWidth:1,marginTop:height(3),borderBottomColor:'grey'}}/>
                      <TouchableOpacity onPress={()=>onsearchPressed()}>
                      <View styl e={styles.container}> 
                   <FlatList
                        data = {DATA}
                        renderItem={renderItem}
                        keyExtractor={item=> item.id}
                          />
                </View>
                </TouchableOpacity>
    </View>
 </View>
)
}
export default AddYourServiceScreen