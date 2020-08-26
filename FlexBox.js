import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (

        <View style={styles.FlexV1}>
            <Quadrado cor='#7fffd4' lado={50}></Quadrado>
            <Quadrado cor='#ff801a' lado={60}></Quadrado>
            <Quadrado cor='#50d1f6' lado={70}></Quadrado>
            <Quadrado cor='#dd22c1' lado={80}></Quadrado>
            <Quadrado cor='#8312ed' lado={90}></Quadrado>
        </View>
    );  //Não consegui alterar o tamanho
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow:1,
        backgroundColor:'black',
        flexDirection:'row',
        width:'100%',
        //alignItems: 'center'
        justifyContent: 'space-around',
        //flexGrow:1
    }
})