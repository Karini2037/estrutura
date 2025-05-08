import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

interface inputState {
    input: string;
    nome: string
}

class App extends Component<{},inputState>{ // toda vez que tiver state tem que colocar {}, igual a este ex: <{},inputState>

    constructor(props: any) {
        super(props);
        this.state ={
            nome: '',
            input: '',        
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        if(this.state.input === ''){
            alert('Digite seu nome!');
            return;
        }

        this.setState({nome: 'Bem vindo: ' + this.state.input});
    }
    render() {
        return (
            <View style={styles.Container}>
                <TextInput style={styles.input}
                    placeholder="Digite seu nome!"
                    underlineColorAndroid="tranparent" // só aparece no android
                    onChangeText={(texto) => this.setState({ input: texto })}
                />
                <Button title="Enviar" onPress={this.entrar} />
                <Text style={styles.texto}></Text>
                <Text style={styles.texto}>{this.state.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 70,
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },

    texto: {
        textAlign: 'center',
        fontSize: 25
    }
})

export default App