import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//vistas
import Bodega from "./Pantallas/Bodega"
import Cocina from "./Pantallas/Cocina"
import Inicio from "./Pantallas/Inicio"
import Ordenes from "./Pantallas/Ordenes";
import Usuarios from "./Pantallas/Usuario"
import { ScreenStackHeaderSearchBarView } from "react-native-screens";
import OrdenCrear from "./Pantallas/OrdenCrear";
import OrdenCurso from "./Pantallas/OrdenCurso";

const HomeStack =createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStack.Navigator
        initialRouteName="Ordenes">
            <HomeStack.Screen
                name="PantallaInicio"
                component={Inicio}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Ordenes"
                component={Ordenes}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="OrdenCrear"
                component={OrdenCrear}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="OrdenCurso"
                component={OrdenCurso}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
}



const Tab =createBottomTabNavigator();
function MyTabs(){

    return(
        <Tab.Navigator
        initialRouteName="Inicio">
            <Tab.Screen name ="Inicio" component={MyStack} />
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