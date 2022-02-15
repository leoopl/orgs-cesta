import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texts from "../../../components/Texts";
import logo from '../../../../assets/logo.png';


interface Props{
    name: string,
    farmLogo: any,
    farmName: string,
    description: string,
    price: string,
}

export default function Details({name, farmLogo, farmName, description, price} : Props){
    return (
        <>
        <Texts style={styles.name}>{name}</Texts>
        <View style={styles.farm}>
            <Image source={farmLogo} style={styles.farmLogo}/>
            <Texts style={styles.farmName}>{farmName}</Texts>                    
        </View>
        <Texts style={styles.description}>{description}</Texts>
        <Texts style={styles.price}>{price}</Texts>
        </>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    farmLogo: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})