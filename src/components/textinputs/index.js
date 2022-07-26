import React from 'react'
import { StyleSheet, TextInput, View ,placeholder} from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { Icon } from 'react-native-elements';
export function ColoredTextinput({placeholder,left,right}) {
  
    return (
        <View style={[styles.textInputOne]}>
            {left ? left:null}
            <View style={{ flex: 1 }}>
                <TextInput
                    placeholder={placeholder}
                    style={{
                        fontSize: totalSize(1.75),
                        fontWeight:'bold',
                        paddingHorizontal: width(1),
                        borderBottomWidth:0.9
                    }} 
                    
                    >
                </TextInput>
            </View>
            {right ? right :null}
        </View>
       
    )
}

export function BorderedTextinput({placeholder}) {
    return (
        <View style={styles.textInputTwo}>
            <TextInput
                placeholder={placeholder}
                style={{
                    fontSize: totalSize(1.5),
                    fontWeight: 'bold',
                    backgroundColor: '#0000',
                    
                }} 
               
                >
                 
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    textInputOne: {
        flex: 1,
        backgroundColor: '#0000',
        marginHorizontal: width(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputTwo:{
        flex: 1,
        backgroundColor: '#0000',
        marginHorizontal: width(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth:0.8,
        
    }
})
