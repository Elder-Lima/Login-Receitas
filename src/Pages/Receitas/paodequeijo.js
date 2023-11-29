import React, { useState } from 'react';

import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import paodequeijoF from '../../imagens/paodequeijo.jpg';

import { Animated } from "react-native";



function PaoDeQueijo ( ) {
  
  const recipe = {

    title: 'Pão de Queijo',

    image: paodequeijoF,

    prepTime: '40 minutos',

    difficulty: 'Fácil',

    servings: '30 porções',

    ingredients: [

      '800 g de polvilho azedo',

      '1 xícara de leite',

      '2 ovos',

      'sal a gosto',

      '1 xícara de água',

      '1/2 xícara de óleo',

      '100 g de queijo parmesão ralado',


    ],

    instructions: [

      'Em uma panela, ferva a água e acrescente o leite, o óleo e o sal.',

      'Adicione o polvilho aos poucos até dar liga. Pode ser que você não precise usar os 800g, então coloque devagar e sove a massa até soltar da mão: esse é o ponto.',

      'Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem.',

      'Unte as mãos e enrole bolinhas de 2 cm de diâmetro.',

      'Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas.',

      'Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.',

    
    ],

    assembly: '',

    additionalInfo: '',

    category: 'Pão de Queijo'

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

            resizeMode: 'cover',

            marginTop: 30,

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

export default PaoDeQueijo;