import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Productos = ({ navigation }) => {
  const handleProductosCrearPress = () => {
    navigation.navigate('ProductosCrear');
  };

  const handleProductosActualPress = () => {
    navigation.navigate('ProductosActual');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Crear Producto"
        onPress={handleProductosCrearPress}
      />
      <Button
        title="Ver Productos"
        onPress={handleProductosActualPress}
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

export default Productos;
