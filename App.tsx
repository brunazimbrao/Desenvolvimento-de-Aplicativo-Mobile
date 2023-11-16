
import { Text, TextInput, View,Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import perfil from './img/perfil.png'
import setaparabaixo from './img/seta-para-baixo-cinza.png'
import sino from './img/sino.png'
import fatura from './img/fatura.png'
import pdf from './img/ficheiro-pdf.png' 
import setadireita from './img/seta-direita.png'
import presente from './img/presente.png'
import loja from './img/loja-de-compras.png'
import boneco from './img/boneco.png'
import claro from './img/claro.png' 
import sifrao from './img/simbolo-do-dolar.png'

const App = () => {
  
  return (
    <View  style={styles.divContainer}>
      
      <View style={[{overflow:'hidden',paddingBottom:2}]}>

      <View style={styles.navBar} >
        
        <View style={[styles.navBarIcones,{marginLeft:110}]}>
          <Image source={perfil}/>
        </View>

        <View style={styles.navBarIcones}>
          <Text>21 9999 9999</Text>
        </View>

        <TouchableOpacity style={styles.navBarIcones}>
          <Image source={setaparabaixo}></Image>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.sino} >
          <Image  source={sino}></Image>
        </TouchableOpacity>
        
      
      </View>
      </View>
      
      <Text style={styles.fatura}>Fatura</Text>
      <Text style={styles.valor}>R$39,70</Text>
      <Text style={styles.text}>Sua fatura desse</Text>
      <Text style={styles.text}>mês esta paga</Text>

      <View >
        <View style={styles.cardCentral}>
          
          <TouchableOpacity style={styles.cards2} >
            <Image style={styles.cardImage} source={fatura}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cards2}>
            <Image style={styles.cardImage}source={pdf}></Image>
          </TouchableOpacity>
        
        </View>

        <View style={styles.cardCentral2}>
          <View >
            <Text style={styles.text2}>    2ª via da</Text>
            <Text style={styles.text2}>última fatura</Text>
          </View>
          
          <View style={styles.cardTexto} >
            <Text style={styles.text2}>Compatilhar </Text>
            <Text style={styles.text2}>     fatura</Text>
          </View>
        
        </View>
      
      </View>

      <View style={styles.cardCentral}>
        <Text>Dia do vencimento</Text>
        <Image source={setadireita}></Image>
      </View>

      <Text style={styles.text3}>Todo dia 10</Text>

      <View style={styles.cardCentral}>
        <Text >Pagamento automático</Text>
        <Image source={setadireita}></Image>
      </View>

      <View style={styles.cardFooter}>

        <TouchableOpacity>
         <Image style={styles.Image} source={claro}></Image>
          <Text style={styles.text4}>Meu plano</Text>
        
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.sifrao}source={sifrao}></Image>
          <Text style={styles.text4}>Fatura</Text>
        
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.presente} source={presente}></Image>
          <Text style={styles.text4}>Claro clube</Text>
        
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={loja}></Image>
          <Text style={styles.text4}>Loja</Text>
        
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={boneco}></Image>
          <Text style={styles.text4} >Perfil</Text>
        
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
export default App;