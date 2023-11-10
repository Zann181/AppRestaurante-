import { StyleSheet, Text, View,Button } from 'react-native'
import React  from 'react'
import { useNavigation } from '@react-navigation/native'

const Registradora = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Crear Factura" 
      onPress={()=>navigation.navigate('RegistradoraCrear')} 
      
      />
      <Button title= "Factura en curso" 
      onPress={()=>navigation.navigate('RegistradoraVer')}
      />
    </View>
  )
}

export default Registradora

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3B87D'
}
})