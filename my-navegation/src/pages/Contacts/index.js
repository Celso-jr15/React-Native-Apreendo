import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Contacts({navigation}){
    return(
        <View style={styles.Contacts}>
            <Text>João da Silva</Text>
            <Text
            onPress={()=> navigation.navigate('Information')}
            >Information...</Text>
        </View>
    )
}