import { StyleSheet, Alert, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';



export default function BodegaCrear() {
  const [name, setName] = useState("");
  const [units, setUnits] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    

    axios.post("http://127.0.0.1:8000/api/products", {
        name,
        units, 
        price, 
      })
      .then((response) => {
       Alert.alert('Se guardo correctamente en el inventario', response);
      })
      .catch((error) => {
        Alert.alert('Error al guardar', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Unidades"
        value={units}
        keyboardType="numeric"
        onChangeText={(text) => setUnits(text)}      />
      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
