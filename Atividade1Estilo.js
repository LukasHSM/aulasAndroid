import {StyleSheet} from 'react-native'
import { Fragment } from 'react'

export default StyleSheet.create({
    bgItems: {
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#4B0082',
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    vInicial:{
        fontSize: 32,
        color:'#FFD700',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    resposta: {
        fontSize: 32,
        color:'#228B22',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    botao: {
        fontSize: 32,
        color:'#696969',
        fontWeight: 'bold',
    },
}
)