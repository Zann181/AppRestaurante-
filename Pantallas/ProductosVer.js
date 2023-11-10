import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductosVer = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products')
            .then(response => {
                setproducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const renderOrder = ({ item }) => (
        <View style={styles.order}>
            <Text style={styles.tabletext}>{item.id}</Text>
            <Text style={styles.tabletext}>{item.name}</Text>
            <Text style={styles.tabletext}>{item.units}</Text>
            <Text style={styles.tabletext}>{item.price}</Text>
           
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>products</Text>
            <FlatList
                data={products}
                renderItem={renderOrder}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    order: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    tabletext: {
          fontSize: 14,
    },
});

export default ProductosVer;
