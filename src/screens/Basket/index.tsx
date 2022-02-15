import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import Texts from "../../components/Texts";
import Details from "./components/Details";
import Item from "./components/Item";
import Top from "./components/Top";

interface Props{
    top: { title: string};
    details: {
        name: string,
        farmLogo: any,
        farmName: string,
        description: string,
        price: string,
        button: string,
    };
    itens: {
        titulo: string,
        lista: Array<{nome: string, imagem: any}>,
    }
}

export default function Basket ({top, details, itens} : Props) {
    return(
        <>
            <FlatList 
                data={itens.lista}
                renderItem = {Item}
                keyExtractor={({nome}) => nome}
                style={styles.list}
                ListHeaderComponent = { () => { return(
                    <>
                        <Top {...top}/>
                        <View style={styles.basket}>
                            <Details {...details}/>
                            <Texts style={styles.title}>{itens.titulo}</Texts>
                        </View>
                    </>
                )}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },    
    title:{
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    list: {
        paddingHorizontal: 16,
    }
})