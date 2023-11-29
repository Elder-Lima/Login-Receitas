import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import bolo from '../../imagens/bolo.png';


import { Animated } from "react-native";



function BoloChocolate () {
  
  const recipe = {

    title: 'Bolo de Chocolate',

    image: bolo,

    prepTime: '45 minutos',

    difficulty: 'Médio',

    servings: '8 porções',

    ingredients: [

      '2 xícaras de farinha de trigo',

      '1 xícara de açúcar',

      '1/2 xícara de cacau em pó',

      '1 colher de chá de fermento em pó',

      '1 colher de chá de bicarbonato de sódio',

      '1/2 colher de chá de sal',

      '1 xícara de leite',

      '1/2 xícara de óleo vegetal',

      '2 ovos',

      '1 colher de chá de extrato de baunilha',

      '1 xícara de água fervente'

    ],

    instructions: [

      'Preaqueça o forno a 180°C. Unte uma forma redonda com manteiga e farinha.',

      'Em uma tigela grande, misture a farinha, o açúcar, o cacau em pó, o fermento, o bicarbonato e o sal.',

      'Adicione o leite, o óleo, os ovos e a baunilha à mistura seca e bata até ficar homogêneo.',

      'Acrescente a água fervente e misture até incorporar.',

      'Despeje a massa na forma preparada e leve ao forno por 30-35 minutos, ou até que um palito inserido no centro saia limpo.',

      'Deixe o bolo esfriar antes de desenformar e decorar a gosto.'

    ],

    assembly: '',

    additionalInfo: '',

    category: 'Sobremesa'

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

            marginBottom: 20,

            marginTop: 30,

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




        {recipe.instructions.map((instruction, index) => (

          <Text key={index} style={{ marginBottom: 20 }}>

            <Text style={{ fontWeight: 'bold' }}>{index + 1}. </Text>

            {instruction}

          </Text>

        ))}




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

              <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, }}>Ingredientes ({recipe.ingredients.length})</Text>

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

export default BoloChocolate;