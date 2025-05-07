import { Component, ReactNode } from "react";
import { View, Text, Image, StyleSheet } from "react-native";// Declaração de componentes padrão.

class App extends Component {
  render() {

    let nome = 'Fini';
    let img = 'https://segredosdomundo.r7.com/wp-content/uploads/2016/03/6.gif'
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Primeiro App</Text>
        <Text style={{ color: '#AA0009', fontSize: 25, margin: 15, textAlign: 'center' }}>Personagem central</Text>

         <Image source={{ uri: img }}
          style={{ width: 300, height: 300, borderRadius: 20, margin: 'auto' }}></Image>
        <Text style={{ fontSize: 30, textAlign: 'center', color: '#AA0009' }}>{nome}</Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>Lorem Ipsum?
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </Text>
        <Gato largura={500} altura={300} fulano="Gato de Botas"></Gato>


      </View>
    );
  }
};

//criando estilos

const style = StyleSheet.create({

  textoPrincipal: {
    fontSize: 20,
    color: '#353535',
    padding: 10,
  },
  alinhaTexto: {
    textAlign: 'center'
  }
})

export default App;

//tipando
interface GatoBotasProps{
  altura: number;
  largura: number;
  fulano:string;
}
//criaçãodo componente

class Gato extends Component<GatoBotasProps> {
  render() {
    let img = 'https://segredosdomundo.r7.com/wp-content/uploads/2016/03/6.gif'
    return (
      <View>
        <Image source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}></Image>

        <Text> {this.props.fulano}</Text>
      </View>
    );
  }
}
