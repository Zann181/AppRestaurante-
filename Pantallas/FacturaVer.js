const FActuraVer = () => {
    const [Factura, setFactura] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/bills')
            .then(response => {
                setFactura(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const renderOrder = ({ item }) => (
        <View style={styles.order}>
            <Text style={styles.tabletext}>{item.id}</Text>
            <Text style={styles.tabletext}>{item.date}</Text>
            <Text style={styles.tabletext}>{item.id_waiter}</Text>
            <Text style={styles.tabletext}>{item.amount}</Text>
            <Text style={styles.tabletext}>{item.Price_unit}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Factura</Text>
            <FlatList
                data={Factura}
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

export default FActuraVer;
