import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//vistas
import Bodega from "./Pantallas/Bodega"
import Cocina from "./Pantallas/Cocina"
import Inicio from "./Pantallas/Inicio"
import Ordenes from "./Pantallas/Ordenes";
import StakScreen from "./Pantallas/StackScreen"
import Usuarios from "./Pantallas/Usuario"

//constante para el butomtabnavigator
const Tab =createBottomTabNavigator();
function MyTabs(){

    return(
        <Tab.Navigator
        initialRouteName="Inicio">
            <Tab.Screen name ="Inicio" component={Inicio} />
            <Tab.Screen name ="Ordenes" component={Ordenes} />
            <Tab.Screen name ="Cocina" component={Cocina} />
            <Tab.Screen name ="Bodega" component={Bodega} />
            <Tab.Screen name ="Usuarios" component={Usuarios} />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}