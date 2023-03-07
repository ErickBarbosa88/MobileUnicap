import { FlatList, Image, SafeAreaView, View } from "react-native";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Body() {
    const DATA = [
        {
          img: require("../assets/teemo.jpg"),
          text: "teemo perfil"
        },
        {
          
          img: require("../assets/teemo2.jpg"),
          text: "Teemo panda"
        },
        {
          
          img: require("../assets/teemo3.jpg"),
          text: "super teemo"
        },
        {
          
            img: require("../assets/teemo4.jpg"),
            text: "teemo abelha"
          },
          {
          
            img: require("../assets/teemo6.jpg"),
            text: "teemo esquadrao omega"
          },
          {
          
            img: require("../assets/teemo7.jpg"),
            text: "teemo astronauta"
          },
          {
          
            img: require("../assets/teemo3.jpg"),
            text: "super teemo"
          }
    ]

    const Item = ({img, text}) => (
        <View style={styles.item}>
            <Image source= {img} style= {{ width: 180, height:170, borderRadius: 25}}  />
            <Text>{text}</Text>
        </View>
      );

    return(
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item img={item.img} text={item.text} />}
        />
      </SafeAreaView>
  
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgb(161, 201, 247)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17
      },
      container: {
        height: 740,
        backgroundColor: '#fff'
      }
  });
