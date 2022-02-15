import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texts from "../../../components/Texts";

interface Props{
    titulo:string,
    lista: Array<{nome: string, imagem: any}>,
}

export default function Item({item}: {item: lista}) {     
    return (
        <View key={item.nome} style={styles.item}>
            <Image source={item.imagem} style={styles.image}/>
            <Texts style={styles.name}>{item.nome}</Texts>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    },
})