import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import Request from '../funcional/Peticiones';

const OrdenCrear = () => {
  const [orden, setOrden] = useState({
    data: '',
    order_confirmation: '',
    id_product: '',
    units:'',
    id_table:''
  });

  const handleSubmit = async () => {
    const request = new Request('/orders');
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await request.post(orden, headers);

  };

  return (
    <View>
      <TextInput
        placeholder="data"
        value={orden.data}
        onChangeText={(text) => setOrden({ ...orden, data: text })}
      />
      <TextInput
        placeholder="order_confirmation"
        value={orden.order_confirmation}
        onChangeText={(text) => setOrden({ ...orden, order_confirmation: Number(text) })}
      />
      <TextInput
        placeholder="id_product"
        value={orden.id_product}
        onChangeText={(text) => setOrden({ ...orden, id_product: Number(text) })}
      />
      <TextInput
        placeholder="units"
        value={orden.units}
        onChangeText={(text) => setOrden({ ...orden,  units: Number(text) })}
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

export default OrdenCrear;
