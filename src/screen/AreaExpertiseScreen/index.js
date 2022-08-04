import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import { AddExpButton, ColoredButton, ResendButton } from '../../components/buttons'
import Modal from "react-native-modal";
import { ColoredTextinput } from '../../components/textinputs'
import styles from './styles'
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
];
const Item=({text})=>{
  return(
      <View style={styles.text}> 
        <Text>{text}</Text>
     </View>
  )
}
const AreaExpertiseScreen= () =>{
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem=({item})=>(
    <Item text={item.text}/>
  );
  const navigation = useNavigation();
  const onaddPressed = () =>{
    navigation.navigate('AboutServiceScreen')   
}

return(
    <View style={{flex:1}}>
               <View style={{flex:1,backgroundColor:'white'}}>
                   <View style={{flexDirection:'row'}}>
                 <TouchableOpacity>
                   <Icon 
                    name='chevron-left'
                    type='feather'
                      color={'black'}   
                      style={{alignItems:'flex-start',marginLeft:width(4),marginTop:height(5)}}
                       />
                    </TouchableOpacity>
                    <Text style={{marginTop:height(5),alignItems:'center',marginLeft:width(20),fontWeight:'bold',color:'#222222',fontSize:totalSize(2)}}>Area Of Expertise </Text>
                    </View>
                    <View style={{alignItems:'center',marginTop:height(5)}}>
                   <View style={{width:'90%',height:40,borderRadius:totalSize(1),borderWidth:1,borderColor:'#CCCCCC',flexDirection:'row',alignItems:'center'}}>
                   <Icon
                     name='search'
                     type='feather'
                     style={{margin:totalSize(1)}}
                      />
                    <Text>Search </Text>
                    </View>
                   </View>
                  <View style={{borderBottomWidth:1,marginTop:height(3),borderBottomColor:'#CCCCCC'}}/>
                   <View style={styles.container}> 
                   <FlatList
                       data = {DATA}
                       renderItem={renderItem}
                        keyExtractor={item=> item.id}
                        />
                </View>
                     <View style={{flexDirection:'row',alignItems:'center',marginLeft:width(5),marginBottom:height(10)}}>
                <Text style={{color:'black'}}>Can't find your Expertise?</Text>
                <AddExpButton text={'Add an Expertis'} onPress={toggleModal} />
                 </View>
                   <View >
                  <Modal isVisible={isModalVisible}
                   style={{margin:0}}
                   onBackdropPress={toggleModal}
                  >
                  <View style={{ flex: 1,backgroundColor:'white' ,marginTop:height(55),borderTopLeftRadius:20,borderTopRightRadius:20}}>
                  <Text style={{color:'black',fontSize:totalSize(2.5),fontWeight:'bold',marginLeft:width(5),marginTop:height(5)}}>Add an expertise</Text>
                  <ColoredTextinput
                     title={'Expertise title'}
                   />
                   <View style={{marginBottom:height(12)}}>
                   <ColoredButton 
                     text={'ADD'} onPress={
                      ()=>{
                        toggleModal()
                        onaddPressed
                      }
                     }

                     />
                     </View>
        </View>
      </Modal>
    </View>
    </View>
 </View>
)
}
export default AreaExpertiseScreen