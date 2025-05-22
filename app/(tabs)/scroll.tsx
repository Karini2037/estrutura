import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

class App extends Component {
constructor(props: any){
    super(props);
    this.state = {
        feed:[
            {id:'1', nome:'Maria', idade:25, email: 'maria@gmail.com'},
            {id:'2', nome:'Mariana', idade:35, email: 'mariana@gmail.com'},
            {id:'3', nome:'Marta', idade:50, email: 'marta@gmail.com'},
            {id:'4', nome:'Marcos', idade:55, email: 'marcos@gmail.com'},
            {id:'5', nome:'Mario', idade:60, email: 'mario@gmail.com'},
        ]
    };
}








    render() {
        return (
            <View style={styles.container}>
               {/* <ScrollView showsVerticalScrollIndicator={false}>*/}
               {/*<ScrollView scrollEnabled={false}> bloqueia o scroll*/ }
               <ScrollView horizontal={true}> {/* Faz rolar para laterais*/}
                    <View style={styles.box1}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box3}></View>
                    <View style={styles.box4}></View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    box1: {
        backgroundColor: 'red',
        width: 150,
    },

    box2: {
        backgroundColor: 'blue',
        width: 150,
    },

    box3: {
        backgroundColor: 'green',
        width: 150,
    },

    box4: {
        backgroundColor: 'yellow',
        width: 150,
    },


});

export default App;
