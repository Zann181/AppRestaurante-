import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Request from './peticiones.js';

const ProductosActualizar = () => {
  const [producto, setproducto] = useState({
    id: '',
    name:'',
    units: '',
    price: '',
    

  });

  const handleSubmit = async () => {
    const request = new Request('/orders');
    
    const response = await request.put(producto, id);

    if (response.status === 200) {
    
    } else {
      
    }
  };

  return (
    <View>
      <Text>Actualizar producto</Text>
      <TextInput
        placeholder="Id"
        value={producto.Id}
        onChangeText={(text) => setproducto({ ...producto, Id: text })}
       />
      <TextInput
        placeholder="name"
        value={producto.name}
        onChangeText={(text) => setproducto({ ...producto, name: Number(text) })}
      />
      <TextInput
        placeholder="price"
        value={producto.price}
        onChangeText={(text) => setproducto({ ...producto, price: Number(text) })}
      />
     

      <Button title="Actualizar" onPress={handleSubmit} />
    </View>
  );
};

export default ProductosActualizar;