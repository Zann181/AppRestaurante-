import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Request from './peticiones.js';

const FacturaActualizar = () => {
  const [Factura, setFactura] = useState({
    id: '',
    date:'',
    id_waiter: '',
    amount: '',
    price_unit:''

  });

  const handleSubmit = async () => {
    const request = new Request('/orders');
    
    const response = await request.put(Factura, id);

    if (response.status === 200) {
    
    } else {
      
    }
  };

  return (
    <View>
      <Text>Actualizar Factura</Text>
      <TextInput
        placeholder="Id"
        value={Factura.Id}
        onChangeText={(text) => setFactura({ ...Factura, Id: text })}
       />
      <TextInput
        placeholder="date"
        value={Factura.date}
        onChangeText={(text) => setFactura({ ...Factura, date: Number(text) })}
      />
      <TextInput
        placeholder="amount"
        value={Factura.amount}
        onChangeText={(text) => setFactura({ ...Factura, amount: Number(text) })}
      />
     <TextInput
        placeholder="price_unit"
        value={Factura.price_unit}
        onChangeText={(text) => setFactura({ ...Factura, price_unit: Number(text) })}
      />

      <Button title="Actualizar" onPress={handleSubmit} />
    </View>
  );
};

export default FacturaActualizar;