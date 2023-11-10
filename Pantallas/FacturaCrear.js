import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import Request from '../funcional/Peticiones';

const FacturaCrear = () => {
  const [Factura, setFactura] = useState({
    data: '',
    id_waiter: '',
    amount: '',
    price_units:'',
    
  });

  const handleSubmit = async () => {
    const request = new Request('/orders');
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await request.post(Factura, headers);

  };

  return (
    <View>
      <TextInput
        placeholder="data"
        value={Factura.data}
        onChangeText={(text) => setFactura({ ...Factura, data: text })}
      />
      <TextInput
        placeholder="id_waiter"
        value={Factura.id_waiter}
        onChangeText={(text) => setFactura({ ...Factura, id_waiter: Number(text) })}
      />
      <TextInput
        placeholder="amount"
        value={Factura.amount}
        onChangeText={(text) => setFactura({ ...Factura, amount: Number(text) })}
      />
      <TextInput
        placeholder="price_units"
        value={Factura.price_units}
        onChangeText={(text) => setFactura({ ...Factura,  price_units: Number(text) })}
      />
      
      <Button title="Actualizar" onPress={handleSubmit} />
    </View>
  );
};

export default FacturaCrear;
