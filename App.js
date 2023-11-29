import { useState, useEffect } from 'react';
import { StyleSheet, Image, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PagCadastro from './src/Pages/PagCadastro';
import PagDepois from './src/Pages/PagDepois';
import ModalMenu from './src/components/ModalMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { criaTabela } from './src/database/Queries';
import PagLogin from './src/Pages/PagLogin';


import BoloChocolate from './src/Pages/Receitas/bolo.js';
import Lasanha from './src/Pages/Receitas/lasanha.js';
import PaoDeQueijo from './src/Pages/Receitas/paodequeijo.js';
import Pudim from './src/Pages/Receitas/pudim.js';
import Strogonoff from './src/Pages/Receitas/strogonoff.js';
import Empadao from './src/Pages/Receitas/empadao.js';
import Brownie from './src/Pages/Receitas/brownie.js';
import Panqueca from './src/Pages/Receitas/panqueca.js'
import BoloDeCenoura from './src/Pages/Receitas/boloDeCenoura.js';

export default function AppNavigator({navigation}) {
  const Stack = createNativeStackNavigator();
  const [modalVisible, setModalVisible] = useState(false)

    // é feito ao carregar a página
    useEffect(() => {
      criaTabela();
    }, []);

  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='PagLogin'
        screenOptions={({route, navigation}) => 
        ({ headerLeft: () => (<Image style={styles.imagemLogo} source={require("./src/img/Logo.png")}/>), 
          headerTitle: "", 
          headerRight: () => (
          <View>
            <Icon size={30} name="bars" onPress={() => setModalVisible(true)}/>
            <ModalMenu navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          </View>
          ), 
          animation: 'slide_from_right'  })}>

        <Stack.Screen options={{headerShown: false, animation: 'default'}} name='PagCadastro' component={PagCadastro}/>
        <Stack.Screen options={{headerShown: false, animation: 'default'}} name='PagLogin' component={PagLogin}/>
        <Stack.Screen  name='PagDepois' component={PagDepois}/>
        <Stack.Screen name="BoloDeChocolate" component={BoloChocolate} />
        <Stack.Screen name="Lasanha" component={Lasanha} />
        <Stack.Screen name="Paodequeijo" component={PaoDeQueijo} />
        <Stack.Screen name="Pudim" component={Pudim} />
        <Stack.Screen name="Strogonoff" component={Strogonoff} />
        <Stack.Screen name="Empadao" component={Empadao} />
        <Stack.Screen name="Brownie" component={Brownie} />
        <Stack.Screen name="Panqueca" component={Panqueca} />
        <Stack.Screen name="BoloDeCenoura" component={BoloDeCenoura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imagemLogo: {
    width: 100,
    height: 55,
  },
});
