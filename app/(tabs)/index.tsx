import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            feed: [
                { id: '1', nome: 'Maria', idade: 25, email: 'maria@gmail.com' },
                { id: '2', nome: 'Mariana', idade: 35, email: 'mariana@gmail.com' },
                { id: '3', nome: 'Marta', idade: 50, email: 'marta@gmail.com' },
                { id: '4', nome: 'Marcos', idade: 55, email: 'marcos@gmail.com' },
                { id: '5', nome: 'Mario', idade: 60, email: 'mario@gmail.com' },
            ]
        };
    }








    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.feed} //lista que séra exibida
                    keyExtractor={(item) => item.id} //chave para localizar o item
                    renderItem={({ item }) => <Pessoa data={item} />} //responsavel por renderizar a lista
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },

    areaPessoa: {
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15
    },

    textoPessoa: {
        color: '#ffff',
        fontSize:20,
        padding:10,
    },


});

export default App;

class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
                <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
                <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
            </View>
        );
    }
}