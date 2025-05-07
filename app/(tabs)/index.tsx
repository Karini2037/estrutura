import React, { Component } from "react";
import { View, Text, Button } from "react-native";


interface botaoProps{
    entrar: string;
    nome: string;
}
class App extends Component<botaoProps>  {


    constructor(props){
        super(props);
        this.state = { //declarando o estado do botão e chama o texto
            nome: 'Karini'
        };
        this.entrar = this.entrar.bind(this);//bind deixa a função acessível para todas as propriedades
    }

    entar(nome){
        this.setState({ // seta o botão para mudança
            nome:nome
        })
    }
    render() {
        return(
            <View style={{marginTop: 100}}>
                 <Button title="Entrar" onPress={() => this.entrar('Parabéns você consegui fazer um botão funcional')}/>
                <Text style={{fontSize: 23, color: 'red', textAlign: 'center'}}>{this.state.nome}</Text>
            </View>
        );
    }
}

export default App;