import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const OrdenCurso = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const renderOrder = ({ item }) => (
        <View style={styles.order}>
            <Text style={styles.orderId}>{item.id}</Text>
            <Text style={styles.orderDate}>{item.data}</Text>
            <Text style={styles.orderConfirmation}>{item.order_confirmation}</Text>
            <Text style={styles.productId}>{item.id_product}</Text>
            <Text style={styles.units}>{item.units}</Text>
            <Text style={styles.tableId}>{item.id_table}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
            <FlatList
                data={orders}
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
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
    },
    orderConfirmation: {
        fontSize: 14,
    },
    productId: {
        fontSize: 14,
    },
    units: {
        fontSize: 14,
    },
    tableId: {
        fontSize: 14,
    },
});

export default OrdenCurso;
