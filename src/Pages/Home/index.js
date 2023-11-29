import { ImageBackground } from "react-native";
import { View, StatusBar, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";


import bolo from '../../imagens/bolo.png'

import lasanha from '../../imagens/lasanha.png'
import paodequeijo from '../../imagens/paodequeijo.jpg'
import pudim from '../../imagens/pudim.jpg'
import strogonoff from '../../imagens/strogonoff.jpg'
import empadao from '../../imagens/empadao.jpg'
import brownie from '../../imagens/brownie.jpg'
import panqueca from '../../imagens/panqueca.jpg'
import boloCenouraFoto from "../../imagens/bolodecenoura.jpeg";

function HomeScreen({ navigation }) {
  const data = [
    { id: '1', title: 'Bolo de Chocolate', photos: bolo, subT: '11 ingredientes | 45 min', name: 'BoloDeChocolate' },
    { id: '2', title: 'Lasanha', photos: lasanha, subT: '14 ingredientes | 50 min', name: 'Lasanha'},
    { id: '3', title: 'Pão de Queijo', photos: paodequeijo, subT: '7 ingredientes | 40 min', name: 'Paodequeijo' },
    { id: '4', title: 'Pudim', photos: pudim, subT: '4 ingredientes | 1h 50 min', name: 'Pudim' },
    { id: '5', title: 'Strogonoff de Frango', photos: strogonoff, subT: '12 ingredientes | 1h', name: 'Strogonoff' },
    { id: '6', title: 'Empadão de Frango', photos: empadao, subT: '18 ingredientes | 2h', name: 'Empadao' },
    { id: '7', title: 'Brownie', photos: brownie, subT: '5 ingredientes | 30min', name: 'Brownie' },
    { id: '8', title: 'Massa de Panqueca', photos: panqueca, subT: '4 ingredientes | 30min', name: 'Panqueca' },
    { id: '9', title: 'Bolo de Cenoura', photos: boloCenouraFoto, subT: '10 ingredientes | 40min', name: 'BoloDeCenoura' },
  ];

  return (
    

    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#121212"} barStyle="light-content" transLucent={false} />

      
      
      <FlatList
        
        data={data}
        keyExtractor={(item) => item.id }
        showVerticalScrollIndicator={false}
        renderItem= { ({ item }) => (
          <View style={styles.item}>

           
            <TouchableOpacity onPress={() => navigation.navigate(`${item.name}`)}>
              <ImageBackground style={styles.imagemF}  source={item.photos}> 
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.subtitulo}>{item.subT}</Text>
              </ImageBackground>

            </TouchableOpacity>
            
          </View>  
        )}
      />

    </View>

  )
}


const styles = StyleSheet.create({
  
    
   
    
    logo: {
        width: 90,
        height: 90,
        flexDirection: "row",
        position: 'absolute',
        marginLeft: 20,
        marginTop: -10
    },
    
  item: {
      height: 200,
      marginTop: 30,
      
    },
    
    titulo: {
        marginTop: '41%',
        marginLeft: 30,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
        
    },
    
    subtitulo: {
        marginTop: 1,
        marginLeft: 30,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    
    imagemF: {
        overflow: "hidden",
        height: 200,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    
}

});

export default HomeScreen;