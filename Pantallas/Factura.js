import { StyleSheet, Text, View,Button } from 'react-native'
import React  from 'react'
import { useNavigation } from '@react-navigation/native'

const Factura = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Crear Factura" 
      onPress={()=>navigation.navigate('FacturaCrear')} 
      
      />
      <Button title= "ver Facturas" 
      onPress={()=>navigation.navigate('FacturaVer')}
      />

<Button title= "Actualizar Factura" 
      onPress={()=>navigation.navigate('FacturaActualizar')}
      />
    </View>
  )
}

export default Factura

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3B87D'
}
})