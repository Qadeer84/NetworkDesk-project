import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList, ScrollView} from 'react-native'
import {height,width,totalSize} from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import Pic from '../../assets/Images/housepic.jpg'
import { ColoredButton, ResendButton, SendButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
import MessageScreen from '../MessageScreen/index'
import SearchNetworkDeskcreen from '../SearchNetworkDeskScreen/index'
import AddProfilepicScreen from '../AddProfilePicScreen/index'
import HelloNextScreen from '../HelloNextScreen/index'
import BusinessNextScreen from '../BusinessNextScreen/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const MainHomeScreen=()=>{
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const onsearchPressed = () =>{
      navigation.navigate('SearchNetworkDeskcreen')   
  }
  
  const onmessagePressed = () =>{
      navigation.navigate('MessageScreen')   
  }
    return(
      
        <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView showsVerticalScrollIndicator={true} >
         <View style={{flexDirection:'row',alignItems:'center',marginTop:height(5),marginLeft:width(6)}}>
        <TouchableOpacity>
         <Icon 
            name='menu'
            type='feather' 
            
            />
            </TouchableOpacity>
            <Text style={{marginLeft:totalSize(2),fontWeight:'bold',color:'black',fontSize:totalSize(3)}}>Network<Text style={{fontWeight:'normal'}}>Desk</Text></Text>
            <TouchableOpacity onPress={()=>onsearchPressed()}>
            <Icon 
            name='search'
            type='feather'
            style={{marginLeft:totalSize(8)}}
            />
            </TouchableOpacity>
          <TouchableOpacity onPress={()=>onmessagePressed()}>
          <Icon 
            name='message-square'
            type='feather'
            style={{marginLeft:totalSize(3)}}
            />
            </TouchableOpacity>
          </View >
          
         <View style={{height:totalSize(5),width:"90%",borderWidth:1,marginHorizontal:width(6),marginTop:totalSize(5),borderRadius:8,flexDirection:'row',alignItems:'center'}}>
         <Icon 
            name='face'
            type='MaterialIcons'
            size={totalSize(4.5)}
            style={{marginLeft:totalSize(0.5)}}
            />
        
         <Text style={{marginLeft:totalSize(1)}}>share a post</Text>
         <Icon 
            name='image'
            type='feather'
            style={{marginLeft:totalSize(10)}}
            />
            <Icon 
            name='video'
            type='feather'
            style={{marginLeft:totalSize(3)}}
            />
            <Icon 
            name='link'
            type='feather'
            style={{marginLeft:totalSize(3)}}
            />
         </View>
         <View style={{flexDirection:'row',alignItems:'center',marginLeft:totalSize(2)}}>
        <View style={{height:30,width:90,backgroundColor:'grey',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(3),borderRadius:totalSize(3)}}>
            <Text style={{color:'white'}}>Groups</Text>
        </View>
        <View style={{height:30,width:90,backgroundColor:'grey',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(3),borderRadius:totalSize(3)}}>
            <Text style={{color:'white'}}>Forums</Text>
        </View>
        <View style={{height:30,width:90,backgroundColor:'grey',alignItems:'center',justifyContent:'center',marginLeft:width(2),marginTop:height(3),borderRadius:totalSize(3)}}>
            <Text style={{color:'white'}}>Events</Text>
        </View>
        </View>
         <View style={{flexDirection:'row',alignItems:'center',marginLeft:totalSize(1),marginTop:height(4)}}>
         <Icon 
            name='face'
            type='MaterialIcons'
            size={totalSize(4.5)}
            />
          <Text style={{fontWeight:'bold',marginLeft:totalSize(1),color:'black'}}>John Doe {'\n'}<Text style={{fontWeight:'normal'}}>2h ago</Text></Text>
          <Icon 
            name='dots-three-horizontal'
            type='entypo'
            size={15}
            style={{marginLeft:totalSize(28)}}
            />
          </View>
          <Text style={{marginLeft:totalSize(4),color:'black',marginTop:totalSize(1)}}>#FEATURED</Text>

          <Text style={{color:'black',marginLeft:totalSize(4),marginTop:totalSize(1)}}>Lots of update throughout,paint ,floor & windows {'\n'}fully fenced yard with ally access {'\n'}11#15 shop insulated & wired</Text>
         <Image source={Pic} style={styles.image} />
          <View style={{flexDirection:'row',alignItems:'center',marginTop:totalSize(2)}}>
          <Icon 
            name='like2'
            type='antdesign'
            style={{marginLeft:totalSize(1)}}
            />
            <Icon 
            name='message-circle'
            type='feather'
            style={{marginLeft:totalSize(2)}}
            />
            <Icon 
            name='message-square'
            type='feather'
            style={{marginLeft:totalSize(2)}}
            /> 
           <Text style={{marginLeft:totalSize(3),color:'black',marginLeft:totalSize(17)}}>3 likes{' '}3 comments</Text>
             </View>
          <View style={{height:"6%",width:"95%",borderBottomColor:'grey',borderWidth:1,marginHorizontal:width(2.5),borderRadius:10,marginTop:height(1)}}> 
          <Text style={{marginLeft:totalSize(2),marginTop:height(1)}}>writes a comments</Text>
          </View>
          <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',marginLeft:totalSize(1),marginTop:height(3)}}>
         <Icon 
           name='face'
           type='MaterialIcons'
            size={totalSize(4.5)}
            />
          <Text style={{fontWeight:'bold',marginLeft:totalSize(1),color:'black'}}>Brenna Burns {'\n'}<Text style={{fontWeight:'normal',fontSize:totalSize(1.2)}}>forts ST jhon,BC 2h ago</Text></Text>
          <Icon 
            name='dots-three-horizontal'
            type='entypo'
            size={15}
            style={{marginLeft:totalSize(22)}}
            />
          </View>
          
          </ScrollView>
                   <Tab.Navigator 
                  screenOptions=  {{
                  
                    tabBarActiveTintColor: 'grey',
                  tabBarShowLabel:false,
                    tabBarStyle: {
                      backgroundColor:'white',
                      height: 60,
                      position:'absolute',
                      
                    },
                  
                  }}
                   >
                   <Tab.Screen name="home" component={SearchNetworkDeskcreen} 
                   options={{
                  
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    
                      ),
                  }}
                   />
                            
                   <Tab.Screen name="search" component={MessageScreen} 
                    options={{
                
                      tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" color={color} size={size} />
                    
                        ),
                    }}
                   />
                    <Tab.Screen name="bussines" component={BusinessNextScreen }
                   options={{
                  
                    tabBarIcon: ({ color, size }) => (
                      <Fontisto name="arrow-swap" color={color} size={size} />
          
                      ),
                  }}
                   />
                   <Tab.Screen name="notifcation" component={AddProfilepicScreen }
                    options={{
                  
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
         
                        ),
                    }}
                   />
                  
                   <Tab.Screen name="account" component={HelloNextScreen}
                   options={{
                
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                      ),
                  }}
                   />
                   
              
                   </Tab.Navigator>
              
                     
                     

          </View>
    )
}
const styles=StyleSheet.create({
    image:{
        marginTop:height(4),
        alignSelf:'center',
        width:'100%'
    }
})
export default MainHomeScreen