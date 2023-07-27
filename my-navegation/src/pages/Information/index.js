import React from "react";
import { View, Text } from "react-native";
import styles from "../Contacts/styles";

export default function Information ({ route }){
    return(
        <View>
            <Text>Informações pessoais</Text>
            <Text>Nome: {route.params.nome}</Text>
            <Text>Telefone: {route.params.tel}</Text>
            <Text>Endereço: {route.params.endereco}</Text>
            <Text>Site: {route.params.site}</Text>
        </View>
    )
}