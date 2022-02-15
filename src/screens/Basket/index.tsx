import React from "react";
import {StyleSheet, View} from "react-native";
import Details from "./components/Details";
import Top from "./components/Top";

interface Props{
    top: { title: string};
    details: {
        name: string,
        farmLogo: any,
        farmName: string,
        description: string,
        price: string,
    };
}

export default function Basket ({top, details} : Props) {
    return(
        <>
            <Top {...top}/>
            <View style={styles.basket}>
                <Details {...details}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})