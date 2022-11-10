import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootParamsScreen } from '../../navigation/Navigation';

import { styles } from './home.style';


export interface Props extends StackScreenProps<RootParamsScreen, "recoverPassword"> { }

export const Home = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Inicio</Text>
            <Button
                title="Recuperar contraseña"
                onPress={() => navigation.navigate('recoverPassword', {
                    id: 2,
                    email: "criss@guzman.com",
                    titleHeader: "Que hay mi rey"
                })}
            />
        </View>
    );
};