import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Comp,{Comp1, Comp2, Comp3} from './src/Multi'
import estilo from './src/Estilo'
import Fragmento from './src/Fragmento';
import Botao from './src/Botao'
import Parametro from './src/Parametro'
import Contador from './src/Contador'
import Atividade1 from './Atividade1'
import Atividade1Estilo from './Atividade1Estilo'

export default function App() {
  return (
    <View style={Atividade1Estilo.bgItems}>
      {/*<Text style={styles.text}>Oi!</Text>*/}
      {/* <Comp></Comp>
      <Comp1></Comp1>         
      <Comp2></Comp2>
      <Comp3></Comp3> */}
      {/*<Fragmento></Fragmento>*/}
      {/*<Botao></Botao>*/}
      {/*<Parametro valor1="10" valor2="20"></Parametro>*/}
      {/*<Parametro valor1={30} valor2={40}></Parametro>*/}
      {/*<Contador inicial={10}></Contador>*/}
      <Atividade1 inicial={5}></Atividade1>
      <StatusBar style="auto" />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  text:{
    color:'red',
    fontSize: 75
  }
});
