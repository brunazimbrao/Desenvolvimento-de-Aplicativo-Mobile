import {Platform, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
        height:100,
        backgroundColor: "red",
        paddingTop: Platform.OS === 'ios' ? 70 : 64, 

    },
    

    titulo:{
        fontSize:30,
        color:"#fff",
        marginLeft:20,
        marginTop:30,
        fontWeight:'700'
       
    

    },
    subtitulo:{
        fontSize:15,
        color:"#fff",
        marginLeft:20,
        marginTop:10
    
    },
    subtitulo2:{
        fontSize:15,
        color:"#fff",
        marginLeft:20,
        marginTop:10,
        textDecorationLine:'underline'
    
    },
    cardText:{
        marginTop:50

    },
    validador:{
        marginTop:35
    },
    input:{
        fontSize:25,
        marginTop:30,
        marginLeft:20,
        fontWeight:'bold'

    } ,

    chekbox:{
        width:20,
        height:20,
        borderRadius:3,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#fff',
    
    },
    cardsprincipal:{
        display:'flex',
        flexDirection:'row',
        marginLeft:20,
        marginTop:50,
        alignItems:'flex-end'
  

    },
    cards:{
       backgroundColor: '#fff',
       margin:6,
       width:120,
       height:120,
       borderRadius:5    
    },
    
    icones:{
        width:30,
        height:30,
        margin:3
    },
    butonAvancar:{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        margin:5,
        width:180,
        height:70,
        borderRadius:50,
        marginBottom:30,
        fontSize:17,
        color:'#f55435',
    }, 
    
    avancartext: {
        fontSize:17,
        color:'#f55435',
        marginTop:17,
        marginLeft:52
    } ,
      
   
     butonCadastrar:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#fff',
        margin:5,
        width:180,
        height:70,
        borderRadius:50,
        marginBottom:30,
        fontSize:17,
        backgroundColor:'red',
        color:'#fff',
        alignItems:'center'
     },
     cadastrarText:{
        fontSize:17,
        color:'#fff',
        marginTop:17
     },

     vejamais:{
        fontSize:17,
        color:'#fff',
        marginLeft:110
     },
     logo:{
        marginLeft:20,
        width:30,
        height:30,
     },
     cardPrincipalbotom:{
        display:'flex',
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
        alignItems:'flex-end'
     },

     //Segunda tela 

     divContainer:{
       
        flex:1,
       
        paddingTop: Platform.OS === 'ios' ? 70 : 64, 

     },

     navBar:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',  

     },

     navBarIcones:{
        margin:6,
               
     },
     sino:{
       paddingLeft: 80

    },

    fatura:{
        color:'#808080',
        fontSize:14,
        marginTop:40,
        fontWeight:'500',
        marginLeft:20
    },
    valor:{
        color:'red',
        fontSize:30, 
        marginTop:40,
        fontWeight:"500",
        marginLeft:20

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20
    },
    cardCentral:{
        display:'flex',
        flexDirection:'row',
        marginTop:70,
        alignItems:'center',
        marginLeft:20,
        
    },
    cards2:{
        margin:6,
        width:80,
        height:80,
        borderRadius:5,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#dcdcdc' 

    },
    cardImage:{
        marginTop:23,
        marginLeft:25
    },

    cardCentral2:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20
        
    },
    text2:{
        fontWeight:'bold',
        fontSize:10
    },
    cardTexto:{
        marginLeft:30
        
    },
    text3:{
        color:'#808080',
        fontWeight:'400',
        marginTop:10,
        marginLeft:20,
    
    },
    cardFooter:{
        display:'flex',
        flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:30,
       paddingHorizontal:10
       
    
    },
    text4:{
        fontSize:10,
        color:'#474747',
        fontWeight:'400'
    },
    pagamento:{
       borderBottomWidth:1
    },
    Image:{
        width:28,
        height:28,
        marginLeft:20
    },
    sifrao:{
        marginLeft:10
    },
    presente:{
        marginLeft:25
    },
   




}) 