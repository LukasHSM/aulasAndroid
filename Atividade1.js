import React,{useState} from 'react'
import {Text, Button, View} from 'react-native'
import Atividade1Estilo from './Atividade1Estilo'

export default props => {
    const[numero, setNumero] = useState(props.inicial)

    let numTemporario = numero

    function dobrar(){
        numTemporario = setNumero(numTemporario * 2)
    }
    return(
        <View>
            <Text style={Atividade1Estilo.vInicial}>Valor Inicial: {props.inicial}</Text>
            <Button style={Atividade1Estilo.botao} title="CALCULAR DOBRO" onPress={dobrar}/>
            <Text style={Atividade1Estilo.resposta}>Resposta: {numTemporario} </Text>
        </View>
    );
}