import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Contacts({navigation}){
    return(
        <View style={styles.Contacts}>
            <View>
                <Text>João da Silva</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'João Silva',
                    tel: '22 95498434',
                    endereco: 'Rua xxxx',
                    site: 'www.winconcursos.com.br',
                }
                )}
                >Information...</Text>
            </View>
            <View>
                <Text>Manuel da Silva</Text>
                <Text
                onPress={()=> navigation.navigate('Information',
                {
                    nome: 'Manuel Silva',
                    tel: '22 954965434',
                    endereco: 'Rua yyyyyyy',
                    site: 'www.winconcursos.com.br',
                })}
                >Information...</Text>
            </View>
        </View>
    )
}