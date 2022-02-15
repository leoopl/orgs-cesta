import {Image, StyleSheet, Dimensions} from 'react-native';
import topo from '../../../../assets/topo.png';
import Texts from "../../../components/Texts";

const width = Dimensions.get('screen').width;

interface Props{
        title: string;
}

export default function Top({title}: Props) {
    return(
        <>
            <Image source={topo} style={styles.top} />
            <Texts style={styles.title}>{title}</Texts>
        </>
    )
}

const styles = StyleSheet.create({
    top: { 
        width: '100%',
        height: 578 / 768 * width,
        fontFamily: 'Montserrat',
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
})