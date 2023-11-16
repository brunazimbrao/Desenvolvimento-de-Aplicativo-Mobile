import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View,Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import sifrao from './img/sifrao-vermelho.png'
import codigo from './img/codigo-de-barras.png'
import telefone from './img/telefone.png'
import seta from './img/seta-para-baixo.png'
import logobranco from './img/claro-branco.png'

const App = () => {
  
  return (
    <View style={styles.container} >

      <Image style={styles.logo} source={logobranco}/>
      
      <Text style={styles.titulo}>Acesso rápido</Text>
     
      <View style={styles.cardsprincipal}>
        
        <TouchableOpacity style = {styles.cards}>
          <Image style={styles.icones} source = {sifrao}/>
          <Text style={styles.cardText}>Fatura fácil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style = {styles.cards}>
          <Image style={styles.icones} source = {telefone}/>
          <Text style={styles.cardText}>Fazer recarga</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style = {styles.cards}>
          <Image style={styles.icones} source = {codigo}/>
          <Text  style={styles.validador}>Validador de boleto</Text>
        </TouchableOpacity>
      
      </View>

        <Text style={styles.titulo}>Insira seu CPF</Text>
        <Text style={styles.subtitulo}>ou escolha</Text>
        
        <TouchableOpacity>
          <Text  style={styles.subtitulo2}>outras formas para acessar</Text>
        </TouchableOpacity>

        
        <TextInput style={styles.input} placeholder='000.000.000-00' placeholderTextColor='rgba(255, 255, 255, 0.6)'  ></TextInput>

        <View style={styles.cardsprincipal}>

          <TouchableOpacity  style={styles.chekbox}></TouchableOpacity>
          <Text style={styles.subtitulo}>Lembrar meu acesso</Text>

        </View>

      <View style={styles.cardPrincipalbotom}>
        
        <TouchableOpacity  style={styles.butonAvancar}>
          <Text style={styles.avancartext} >Avançar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.butonCadastrar}>
          <Text style={styles.cadastrarText} >Cadastre-se</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity  style={styles.cardPrincipalbotom}>
        <Text style={styles.vejamais}>Veja mais</Text>
        <Image source ={seta}></Image>
      </TouchableOpacity>
      
    </View>
  );
}
export default App;