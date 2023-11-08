import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Bodega = ({ navigation }) => {
  const handleBodegaCrearPress = () => {
    navigation.navigate('BodegaCrear');
  };

  const handleBodegaActualPress = () => {
    navigation.navigate('BodegaActual');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Crear Bodega"
        onPress={handleBodegaCrearPress}
      />
      <Button
        title="Ver Bodegas"
        onPress={handleBodegaActualPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Bodega;
