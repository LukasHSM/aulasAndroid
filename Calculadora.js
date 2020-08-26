import React, {useState} from 'react'
import {TextInput, StyleSheet, Text, View, Button} from 'react-native';

export default props => {
    let res
    let num1
    let num2
    return (
        <View>
            <Text style={styles.text}>Calculadora:</Text>
            <TextInput style={styles.element1}
            placeholder="1º Elemento"
            value={num1}
            />
            {<TextInput style={styles.element2}
            placeholder="2º Elemento"
            value={num2}
            />}
            <Button title="SOMAR" onPress={props.Somar} res={props.Somar}></Button>
            <Button title="SUBTRAIR" onPress={props.Subtrair} res={props.Subtrair}></Button>
            <Button title="MULTIPLICAR" onPress={props.Multiplicar} res={props.Multiplicar}></Button>
            <Button title="DIVIDIR" onPress={props.Dividir} res={props.Dividir}></Button>
            <Text style={styles.resultado} onChangeText={res}>Resultado: {res} </Text>
        </View>
    );
    function Somar(nume1,nume2) {
        nume1 = parseInt(num1)
        nume2 = parseInt(num2)
        let res = num1 + num2
    }
    function Subtrair(nume1,nume2) {
        nume1 = num1
        nume2 = num2
        let res = num1 - num2
    }
    function Multiplicar(nume1,nume2) {
        nume1 = num1
        nume2 = num2
        let res = num1 * num2
    }
    function Dividir(nume1,nume2) {
        nume1 = num1
        nume2 = num2
        let res = num1 / num2
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    element1:{
        fontSize:16,
        color:'#bf80ff',
        fontWeight:'bold'        
    },
    element2:{
        fontSize:16,
        color:'#66cc66',
        fontWeight:'bold'
    },
    resultado:{
        fontSize:16,
        color:'black',
        fontWeight:'bold'
    }
})