import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './register.style';
import { Props } from '../../interfaces/screens';


export const Register = ({ navigation }: Props) => {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Registro</Text>
         <Button
            title="Recuperar contraseña"
            onPress={() => navigation.pop()}
         />
      </View>
   );
};