import {Text, StyleSheet, TextStyle} from 'react-native';

interface Props{
    children: string
    style?: TextStyle
}

export default function Texts({children, style} : Props) {
    let estilo = styles.text;

    if (style?.fontWeight === 'bold') {
        estilo = styles.BoldText;
    }

    return <Text style={[style, estilo]}> {children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    BoldText: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})