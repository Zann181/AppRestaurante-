import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


//vistas
import Factura from "./Pantallas/Factura";
import FacturaActualizar from "./Pantallas/FacturaActualizar";
import FacturaCrear from "./Pantallas/FacturaCrear";
import FacturaVer from "./Pantallas/FacturaVer";

import MesaVer from "./PantallasMesaVer";

import Ordenes from "./Pantallas/Ordenes";
import OrdenCurso from "./Pantallas/OrdenCurso";
import OrdenCrear from "./Pantallas/OrdenCrear";
import OrdenActualizar from "./Pantallas/OrdenActualizar";

import Productos from "./Pantallas/Productos";
import Registradora from "./Pantallas/Registradora";
import ProductosVer from "./Pantallas/ProductosVer";
import ProductosActualizar from "./Pantallas/ProductosActualizar";

import Registradora from "./Pantallas/Registradora";
import RegistradoraCrear from "./Pantallas/RegistradoraCrear";
import RegistradoraVer from "./Pantallas/RegistradoraVer";

const HomeStack =createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Ordenes"        component={Ordenes}      options={{ headerShown: false }} />
            <HomeStack.Screen name="OrdenCrear"     component={OrdenCrear}   options={{ headerShown: false }} />
            <HomeStack.Screen name="OrdenCurso"     component={OrdenCurso}   options={{ headerShown: false }} />
            <HomeStack.Screen name="OrdenActualizar" component={OrdenActualizar}       options={{ headerShown: false }} />

            <HomeStack.Screen name="Productos"         component={Productos}       options={{ headerShown: false }} />
            <HomeStack.Screen name="Registradora"    component={Registradora}  options={{ headerShown: false }} />
            <HomeStack.Screen name="ProductosActualizar"   component={ProductosActualizar} options={{ headerShown: false }} />
            <HomeStack.Screen name="ProducstoVer" component={ProductosVer}       options={{ headerShown: false }} />

            <HomeStack.Screen name="Factura" component={Factura}       options={{ headerShown: false }} />
            <HomeStack.Screen name="FacturaActualizar" component={FacturaActualizar}  options={{ headerShown: false }} />
            <HomeStack.Screen name="FacturaCrear" component={FacturaCrear}  options={{ headerShown: false }} />
            <HomeStack.Screen name="FacturaVer" component={FacturaVer}  options={{ headerShown: false }} />

            <HomeStack.Screen name="Registradora" component={Registradora}  options={{ headerShown: false }} />
            <HomeStack.Screen name="RegistradoraCrear" component={RegistradoraCrear}  options={{ headerShown: false }} />
            <HomeStack.Screen name="RegistradoreVer" component={RegistradoraVer}  options={{ headerShown: false }} />
            <HomeStack.Screen name="MesaVer"  component={MesaVer}  options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
}



const Tab =createBottomTabNavigator();
function MyTabs(){

    return(
        <Tab.Navigator
        options={{ headerShown: false }}>
            
            <Tab.Screen name ="Ordenes" component={Ordenes} />
            <Tab.Screen name ="Productos" component={Productos} />
            <Tab.Screen name ="Factura" component={Factura} />
            <Tab.Screen name ="Registradora" component={Registradora}/>
            <Tab.Screen name ="Mesas" component={MesaVer} />
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