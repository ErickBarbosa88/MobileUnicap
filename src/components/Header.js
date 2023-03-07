import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
    return (
    <View style={styles.container}>
        <Image source={require('../assets/teemo.jpg')} style= {{ width: 180, height:170, borderRadius: 25}} />
        <View style={styles.header}>

        <Text style= {{color: 'white', fontSize: 40}} >
            Teemo
            {"\n"}
            13 anos
        </Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      height: 170,  
      backgroundColor: 'rgb(6, 59, 94)',
      flexDirection: "row",
      marginTop: 35,
      
    
    },
    header: {
        color: 'white',
        fontSize: 90,
    }
  });