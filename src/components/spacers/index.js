import React from 'react'
import { View } from 'react-native'
import * as RNDimentions from 'react-native-dimension'

export const Spacer = ({ height, width }) => {
    return (
        <View style={{ height: height ? height : 0, width: width ? width : 0 }} />
    )
}

export const Tiny = ({ horizontal }) => {
    const defaultSize = RNDimentions.totalSize(0.5)
    return (
        <Spacer height={defaultSize} width={horizontal ? defaultSize : null} />
    )
}


export const Small = ({ horizontal }) => {
    const defaultSize = RNDimentions.totalSize(1)
    return (
        <Spacer height={defaultSize} width={horizontal ? defaultSize : null} />
    )
}

export const Regular = ({ horizontal }) => {
    const defaultSize = RNDimentions.totalSize(2)
    return (
        <Spacer height={defaultSize} width={horizontal ? defaultSize : null} />
    )
}



