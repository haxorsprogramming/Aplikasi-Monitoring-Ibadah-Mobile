import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet  } from "react-native";

const logo = require("../../../src/asset/Logo/uinsu.png");

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 2000);
    }, []);
    return (
        <View style={styles.bg}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.judul}>Aplikasi Monitoring Ibadah Harian</Text>
            <Text style={styles.judul2}>LDK (Lembaga Dakwah Kampus) AL - Izzah Uinsu</Text>
            <Text style={styles.developer}>Develop By : Fitria Sri Budi Asih</Text>
            <Text style={styles.kampus}>Program Studi Sistem Informasi, Fakultas Sains dan Teknologi</Text>
            <Text style={styles.kampus}>Universitas Islam Negeri Sumatera Utara</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo : {
        width:150,
        height:150
    },
    bg : {
        backgroundColor : '#dfe6e9',
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    judul : {
        fontSize:25,
        color:"#2d3436"
    },
    judul2 : {
        color:"#2d3436"
    },
    developer : {
        marginTop:50,
        color:"#2d3436"
    },
    kampus : {
        fontSize : 12,
        color:"#2d3436",
        textAlign:"center"
    }
});

export default SplashScreen;
