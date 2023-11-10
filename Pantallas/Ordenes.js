import { StyleSheet, Text, View,Button } from 'react-native'
import React  from 'react'
import { useNavigation } from '@react-navigation/native'

const Ordenes = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Crear Orden" 
      onPress={()=>navigation.navigate('OrdenCrear')} 
      
      />
      <Button title= "Ordenes en curso" 
      onPress={()=>navigation.navigate('OrdenCurso')}
      />

      <Button title= "Actualizar Orden" 
      onPress={()=>navigation.navigate('OrdenActualizar')}
      />

    </View>

    
  )
}

export default Ordenes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3B87D'
}
})