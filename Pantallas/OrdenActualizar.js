import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Request from '../funcional/Peticiones.js';

const OrdenActualizar = () => {
  const [orden, setOrden] = useState({
    id: '',
    Data:'',
    order_confirmation: 0,
    id_product: '',
    units:'',
    id_table:''

  });

  const handleSubmit = async () => {
    const request = new Request('/orders');
    
    const response = await request.put(orden, id);

    if (response.status === 200) {
      // La orden se actualizó correctamente.
    } else {
      // Hubo un error al actualizar la orden.
    }
  };

  return (
    <View>
      <Text>Actualizar orden</Text>
      <TextInput
        placeholder="id"
        value={orden.id}
        onChangeText={(text) => setOrden({ ...orden, id: text })}
       />
      <TextInput
        placeholder="Data"
        value={orden.Data}
        onChangeText={(text) => setOrden({ ...orden, Data: Number(text) })}
      />
      <TextInput
        placeholder="id_product"
        value={orden.id_product}
        onChangeText={(text) => setOrden({ ...orden, id_product: Number(text) })}
      />
      <TextInput
        placeholder="units"
        value={orden.units}
        onChangeText={(text) => setOrden({ ...orden, units: text })}
       />
       <TextInput
        placeholder="id_table"
        value={orden.id_table}
        onChangeText={(text) => setOrden({ ...orden, id_table: text })}
       />

      <Button title="Actualizar" onPress={handleSubmit} />
    </View>
  );
};

export default OrdenActualizar;
