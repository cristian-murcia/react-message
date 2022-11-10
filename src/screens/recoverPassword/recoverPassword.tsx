import React, { useEffect, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootParamsScreen } from '../../navigation/Navigation';

export interface Props extends StackScreenProps<RootParamsScreen, "recoverPassword"> { }

export const RecoverPassword = ({ navigation, route }: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.titleHeader
        })
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
            <Button
                title="Inicio"
                onPress={() => navigation.popToTop()}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate("register")}
            >
                <Text>Registrarme</Text>
            </TouchableOpacity>
        </View>
    )
}
