import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { height, width, totalSize } from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import { Spacer } from '../../components/spacers/index'
import Pic from '../../assets/Images/housepic.jpg'
import { ColoredButton, ResendButton, SendButton } from '../../components/buttons'
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
const MainHomeScreen = () => {
  const navigation = useNavigation();
  const onsearchPressed = () => {
    navigation.navigate('SearchNetworkDeskcreen')
  }

  const onmessagePressed = () => {
    navigation.navigate('MessageScreen')
  }
  return (

    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(5), marginLeft: width(6) }}>
          <TouchableOpacity>
            <Icon
              name='menu'
              type='feather'
              onPress={()=>navigation.toggleDrawer()}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: width(7), fontWeight: 'bold', color: 'black', fontSize: totalSize(3) }}>Network<Text style={{ fontWeight: 'normal' }}>Desk</Text></Text>
          <TouchableOpacity onPress={() => onsearchPressed()}>
            <Icon
              name='search'
              type='feather'
              style={{ marginLeft: width(10) }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onmessagePressed()}>
            <Icon
              name='message-square'
              type='feather'
              style={{ marginLeft:width(10) }}
            />
          </TouchableOpacity>
        </View >

        <View style={{ height: height(7), width: "90%", borderWidth: 1, marginHorizontal: width(6), marginTop: height(5), borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name='face'
            type='MaterialIcons'
            size={totalSize(4.5)}
            style={{ marginLeft: width(0.5) }}
          />

          <Text style={{ marginLeft:width(1) }}>share a post</Text>
          <Icon
            name='image'
            type='feather'
            style={{ marginLeft:width(20) }}
          />
          <Icon
            name='video'
            type='feather'
            style={{ marginLeft: width(8) }}
          />
          <Icon
            name='link'
            type='feather'
            style={{ marginLeft: width(8) }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: width(7) }}>
          <View style={{ height: 30, width: 90, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: width(2), marginTop: height(3), borderRadius: totalSize(3) }}>
            <Text style={{ color: '#404040' }}>Groups</Text>
          </View>
          <View style={{ height: 30, width: 90, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: width(2), marginTop: height(3), borderRadius: totalSize(3) }}>
            <Text style={{ color: '#404040' }}>Forums</Text>
          </View>
          <View style={{ height: 30, width: 90, backgroundColor: '#F2F2F2', alignItems: 'center', justifyContent: 'center', marginLeft: width(2), marginTop: height(3), borderRadius: totalSize(3) }}>
            <Text style={{ color: '#404040' }}>Events</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft:width(1), marginTop: height(4) }}>
          <Icon
            name='face'
            type='MaterialIcons'
            size={totalSize(4.5)}
          />
          <Text style={{ fontWeight: 'bold', marginLeft:width(1), color: 'black' }}>John Doe {'\n'}<Text style={{ fontWeight: 'normal' }}>2h ago</Text></Text>
          <Icon
            name='dots-three-horizontal'
            type='entypo'
            size={totalSize(2)}
            style={{ marginLeft: width(60) }}
          />
        </View>
        <Text style={{ marginLeft:width(8), color: 'black', marginTop:height(1) }}>#FEATURED</Text>

        <Text style={{ color: 'black', marginLeft: width(8), marginTop: height(1) }}>Lots of update throughout,paint ,floor & windows {'\n'}fully fenced yard with ally access {'\n'}11#15 shop insulated & wired</Text>
        <Image source={Pic} style={styles.image} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height(2) }}>
          <Icon
            name='like2'
            type='antdesign'
            style={{ marginLeft: width(3) }}
          />
          <Icon
            name='message-circle'
            type='feather'
            style={{ marginLeft: width(4) }}
          />
          <Icon
            name='message-square'
            type='feather'
            style={{ marginLeft: width(4) }}
          />
          <Text style={{ marginLeft: width(3), color: 'black', marginLeft:width(35) }}>3 likes{' '}3 comments</Text>
        </View>
        <View style={{ height: "6%", width: "95%", borderBottomColor: 'grey', borderWidth: 1, marginHorizontal: width(2.5), borderRadius: 10, marginTop: height(1) }}>
          <Text style={{ marginLeft: width(3), marginTop: height(1) }}>writes a comments</Text>
        </View>
        <View style={{ marginBottom:height(2), flexDirection: 'row', alignItems: 'center', marginLeft: width(3), marginTop: height(3) }}>
          <Icon
            name='face'
            type='MaterialIcons'
            size={totalSize(4.5)}
          />
          <Text style={{ fontWeight: 'bold', marginLeft:width(3), color: 'black' }}>Brenna Burns {'\n'}<Text style={{ fontWeight: 'normal', fontSize: totalSize(1.2) }}>forts ST jhon,BC 2h ago</Text></Text>
          <Icon
            name='dots-three-horizontal'
            type='entypo'
            size={totalSize(2)}
            style={{ marginLeft: width(50) }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default MainHomeScreen