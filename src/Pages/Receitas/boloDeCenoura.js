import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import boloCenoura from '../../imagens/bolodecenoura.jpeg';

import { Animated } from "react-native";

function BoloDeCenoura ( ) {

    
  
  const recipe = {

    title: 'Bolo de cenoura',

    image: boloCenoura,

    prepTime: '40min',

    difficulty: 'Médio',

    servings: '8 porções',

    ingredients: [

      '1/2 xícara (chá) de óleo',

      '4 ovos',

      '2 e 1/2 xícaras (chá) de farinha de trigo',

      '3 cenouras médias raladas',

      '2 xícaras (chá) de açúcar',

      '1 colher (sopa) de fermento em pó',

      '1 colher (sopa) de manteiga',

      '1 xícara (chá) de açúcar',

      '3 colheres (sopa) de chocolate em pó',

      '1 xícara (chá) de leite',

    ],

    instructions: [

      'Massa:',

      'Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.',

      'Acrescente o açúcar e bata novamente por 5 minutos.',

      'Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.',

      'Acrescente o fermento e misture lentamente com uma colher.',

      'Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.',

      'Cobertura:',

      'Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.',

      'Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.',

    ],

    assembly: '',

    additionalInfo: '',

    category: 'Sobremesa',

    

  };

  const renderInstructions = (instructions) => {
    let count = 1; // Começa a contar a partir de 1
    let isBold = false; // Determina se a numeração deve ser em negrito
  
    return instructions.map((instruction, index) => {
      if (instruction === 'Massa:' || instruction === 'Cobertura:') {
        isBold = true; // Inicia a formatação em negrito
        return (
          <Text key={index} style={{ marginBottom: 20, fontWeight: 'bold' }}>
            {instruction}
          </Text>
        );
      } else {
        return (
          <Text key={index} style={{ marginBottom: 20 }}>
            <Text style={isBold ? { fontWeight: 'bold' } : {}}>{`${count++}. `}</Text>
            {instruction}
          </Text>
        );
      }
      count++;
    });
  };



  const [modalVisible, setModalVisible] = useState(false);




  return (

      
    <ScrollView stickyHeaderIndices={[0]}>
      <View>
        
      </View>


      <View style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 20 }}>

        <Image

          source={recipe.image}

          style={{

            width: '100%',

            height: 200,

            marginTop: 30,

            marginBottom: 20,

            resizeMode: 'cover',

            borderRadius: 5,

          }}

        />




        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginBottom: 10 }}>

          {recipe.title}

        </Text>




        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: '100%' }}>

          <LinearGradient

            colors={['#F98921', '#F98921']}

            style={{

              borderRadius: 5,

              marginBottom: 10,

              width: '100%',

            }}

          >

            <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

              Ver Ingredientes

            </Text>

          </LinearGradient>

        </TouchableOpacity>




        <LinearGradient

          colors={['#F98921', '#F98921']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Dificuldade: {recipe.difficulty}

          </Text>

        </LinearGradient>




        <LinearGradient

          colors={['#F98921', '#F98921']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 8, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Modo de preparo:

          </Text>

        </LinearGradient>



        <View>
  {renderInstructions(recipe.instructions)}
</View>
              
              



        {recipe.assembly && <Text style={{ marginBottom: 20 }}>Montagem: {recipe.assembly}</Text>}

        {recipe.additionalInfo && <Text style={{ marginBottom: 20 }}>Informações adicionais: {recipe.additionalInfo}</Text>}




        <LinearGradient

          colors={['#F98921', '#F98921']}

          style={{

            borderRadius: 5,

            marginBottom: 10,

            width: '100%',

          }}

        >

          <Text style={{ backgroundColor: 'transparent', height: 38, padding: 10, borderRadius: 5, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>

            Categoria: {recipe.category}

          </Text>

        </LinearGradient>




        <Modal

          visible={modalVisible}

          animationType="slide"

          transparent={true}

          onRequestClose={() => setModalVisible(false)}

        >

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Ingredientes ({recipe.ingredients.length})</Text>

              <ScrollView>

                {recipe.ingredients.map((ingredient, index) => (

                  <View key={index} style={{ backgroundColor: '#F98921', borderRadius: 5, marginBottom: 5 }}>

                    <Text style={{ fontSize: 17, padding: 10, color:'white', fontWeight: 'bold'}}>

                      <Text style={{ fontWeight: 'bold' }}>{index + 1}.   </Text> {ingredient}

                    </Text>

                  </View>

                ))}

              </ScrollView>

              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>

                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', fontWeight: 'bold', }}>Fechar</Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </View>

    </ScrollView>

  );

};

export default BoloDeCenoura;