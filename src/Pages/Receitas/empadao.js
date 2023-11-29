import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { Animated } from "react-native";

function Empadao ( ) {

    
  
  const recipe = {

    title: 'Empadão de Frango',

    image: empadaoFoto,

    prepTime: '2h',

    difficulty: 'Fácil',

    servings: '12 porções',

    ingredients: [

      '400 g de farinha de trigo',

      '1 ovo inteiro',

      'sal a gosto',

      '1 gema de ovo para pincelar sobre a massa',

      '200 g de manteiga gelada',

      '1 gema de ovo batido para a massa',

      '6 colheres (sopa) de leite',

      '1 kg de peito de frango desossado',

      '2 dentes de alho picados e amassados',

      '1 colher de sopa de azeite',

      '1 lata de milho verde',

      '1 colher (sopa) cheia de farinha de trigo',

      'azeitonas picadas',

      '1 cebola média picadinha',

      '1 tomate picado sem pele',

      'cheiro-verde picado',

      '1 lata de molho de tomate',

      '3 cubos de caldo de galinha',

    ],

    instructions: [

      'Recheio:',

      'Cozinhe o peito de frango, desfie e reserve.',

      'Em uma panela, coloque o azeite, frite a cebola e deixe dourar.',

      'Adicione o alho, frite por mais alguns minutos e acrescente o frango desfiado.',

      'Dissolva os cubinhos de caldo de galinha na água quente e junte ao refogado.',

      'Acrescente o trigo e mexa sem parar, vigorosamente, até obter uma consistência cremosa.',

      'Despeje o milho, as azeitonas, o cheiro-verde, o tomate e misture.',

      'Massa:',

      'Em uma tigela, misture o trigo e a manteiga até obter uma farofa.',

      'Acrescente os demais ingredientes e amasse bem até obter uma massa lisa.',

      'Embrulhe em papel filme e leve à geladeira por aproximadamente 30 minutos.',

      'Use metade da massa para forrar a assadeira e a outra para cobrir o recheio.',

      'Pincele o empadão com a gema e leve ao forno médio (180° C), preaquecido, por aproximadamente 40 minutos.',

    ],

    assembly: '',

    additionalInfo: '',

    category: 'Salgado (comida)',

    

  };

  const renderInstructions = (instructions) => {
    let count = 1; // Começa a contar a partir de 1
    let isBold = false; // Determina se a numeração deve ser em negrito
  
    return instructions.map((instruction, index) => {
      if (instruction === 'Massa:' || instruction === 'Recheio:') {
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

export default Empadao;