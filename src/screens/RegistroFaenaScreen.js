import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import fondoFrutas from "../../assets/fondo-frutas.jpg";
import db from "../utils/DB";

const RegistroFaenas = () => {
  //Variables para crear la faena en DB
  const [empresa, setEmpresa] = useState("");
  const [tipoFaena, setTipoFaena] = useState("");
  const [nombreFaena, setNombreFaena] = useState("");
  const [pagoFaena, setPagoFaena] = useState("Seleccione tipo de pago...");
  const [montoFaena, setMontoFaena] = useState(0);
  //Variable para navegar en la aplicación
  const { navigate } = useNavigation();

  //Función encargada de enviar los datos a SQLite
  const guardarTrabajo = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO trabajos (empresa, tipo_faena, nombre_faena, pago_faena, monto_faena) VALUES (?, ?, ?, ?, ?)",
        [empresa, tipoFaena, nombreFaena, pagoFaena, montoFaena.toString()],
        //Caso de éxito
        (_, result) => {
          console.log("Registro insertado con ID:", result.insertId);
          Alert.alert("Faena creada", "La faena ha sido creada exitosamente!");
          //Redirige a la screen de Home
          navigate("Home");
        },
        //Caso de error
        (_, error) => console.log("Error al insertar registro:", error)
      );
    });
  };
  //Funciones encargada de reaccionar ante cambios en los input
  const handleChangePagoFaena = (value) => {
    setPagoFaena(value);
  };
  const handleChangeTipoFaena = (value) => {
    setTipoFaena(value);
  };

  return (
    <ImageBackground source={fondoFrutas} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Faenas</Text>
        <View style={styles.formulario}>
          <Text style={styles.label}>Empresa: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Frutal S.A"
            value={empresa}
            onChangeText={(texto) => setEmpresa(texto)}
          />
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Tipo de faena: </Text>
          <Picker
            style={styles.input}
            selectedValue={tipoFaena}
            onValueChange={handleChangeTipoFaena}
          >
            <Picker.Item label="Cosecha" value="Cosecha" />
            <Picker.Item label="Raleo" value="Raleo" />
            <Picker.Item label="Plantación" value="Plantación" />
          </Picker>
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Nombre de la faena: </Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Cosecha de arándanos, etc..."
            value={nombreFaena}
            onChangeText={(texto) => setNombreFaena(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Modo pago faena:</Text>
          <Picker
            style={styles.input}
            selectedValue={pagoFaena}
            onValueChange={handleChangePagoFaena}
          >
            <Picker.Item label="Día" value="dia" />
            <Picker.Item label="Kilo" value="kilo" />
            <Picker.Item label="Tótem" value="totem" />
          </Picker>
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Monto de faena($):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 5000"
            value={montoFaena.toString()}
            keyboardType="numeric"
            onChangeText={(texto) => setMontoFaena(texto)}
          />
        </View>
        <TouchableOpacity style={styles.boton} onPress={guardarTrabajo}>
          <Text>Guardar trabajo</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

//Variable que almacena los estilos de la screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0cf",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#009688",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 200,
    padding: 5,
    fontSize: 16,
  },
});

export default RegistroFaenas;
