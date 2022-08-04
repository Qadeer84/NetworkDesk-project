import React from 'react'
import { StyleSheet, TextInput, View, placeholder,Text } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { Icon } from 'react-native-elements';
import { Spacer } from '../spacers';
export function ColoredTextinput({ placeholder, left, right, secureTextEntry, title }) {

    return (
        <View style={[styles.textInputOneMainContainer]}>
            {
                title ?
                    <>
                        <Text style={{ fontSize: totalSize(1.4), color: '#444444',fontWeight:'600' }}>{title}</Text>
                        {/* <Spacer height={height(1)}/> */}
                    </>
                    :
                    null
            }
            <View style={[styles.textInputOneSubContainer]}>
                {left ? left : null}
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            fontSize: totalSize(1.7),
                            fontWeight: 'normal',
                            // paddingHorizontal: 0,
                            //borderBottomWidth:0.9
                            height: height(6)
                        }}
                        secureTextEntry={secureTextEntry}
                    >
                    </TextInput>
                </View>
                {right ? right : null}
            </View>
        </View>

    )
}

export function BorderedTextinput({ placeholder }) {
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
    textInputOneMainContainer: {
        flex: 1,
        marginTop:height(3),
        // backgroundColor: '#0000',
        marginHorizontal: width(5),
        // flexDirection: 'row',
        // alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    textInputOneSubContainer: {
        // flex: 1,
        // backgroundColor: '#0000',
        // marginHorizontal: width(5),
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth:1,
        // borderBottomColor:'gray',
    },
    textInputTwo: {
        flex: 1,
        backgroundColor: '#0000',
        marginHorizontal: width(5),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.8,

    }
})
