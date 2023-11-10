import React, { useState, useEffect } from 'react';
import { TextInput, Button, View } from 'react-native';
import Request from '../funcional/Peticiones';

const RegistradoraCrear = () => {
  const [Registradora, setRegistradora] = useState({
    Base_value: '',
    id_bill: '',
    Total_day: ''
  });

  const handleSubmit = async () => {
    const request = new Request('/bills');
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await request.post(Registradora, headers);

  };

  return (
    <View>
      <TextInput
        placeholder="Base_value"
        value={Registradora.Base_value}
        onChangeText={(text) => setRegistradora({ ...Registradora, Base_value: text })}
      />
      <TextInput
        placeholder="id_bill"
        value={Registradora.id_bill}
        onChangeText={(text) => setRegistradora({ ...Registradora, id_bill: Number(text) })}
      />
      <TextInput
        placeholder="Total_day"
        value={Registradora.Total_day}
        onChangeText={(text) => setRegistradora({ ...Registradora, Total_day: Number(text) })}
      />
      
      <Button title="Actualizar" onPress={handleSubmit} />
    </View>
  );
};

export default RegistradoraCrear;