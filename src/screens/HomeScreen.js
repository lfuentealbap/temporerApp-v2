import React from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import fondoFrutas from "../../assets/fondo-frutas.jpg";
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {

  const {navigate} = useNavigation();

  const handleButtonRegistro = () => {
    navigate('RegistroFaena');
  }

  return (
    <ImageBackground source={fondoFrutas} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titulo}>🍏Hola!👋🏻 Bienvenid@! a TemporerApp 🍎</Text>
      <Text>Esta es la pantalla de inicio</Text>

      <Button title="Registrar Nueva Faena" onPress={handleButtonRegistro} />
    </View>
    </ImageBackground>
  );
};

//Variable que almacena los estilos de la screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0cf",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
