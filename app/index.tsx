import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

const categories = [
  {
    name: "Animação",
    movies: [
      { title: "Familia do futuro", image: require("../assets/family.jpg"), page: "/screens/ToyStory" },
      { title: "Monstros SA", image: require("../assets/mosnter.jpg"), page: "Shrek" },
      { title: "Procurando Nemo", image: require("../assets/nemo.jpg"), page: "Frozen" },
      { title: "Robôs", image: require("../assets/robos.jpg"), page: "Moana" },
    ],
  },
  {
    name: "Aventura",
    movies: [
      { title: "O pequeno Sturt Little", image: require("../assets/stur.jpg"), page: "Avatar" },
      { title: "Como treinar seu dragão", image: require("../assets/dragao.jpg"), page: "JurassicPark" },
      { title: "Viva a vida é uma festa", image: require("../assets/festa.jpg"), page: "IndianaJones" },
      { title: "Detona Halph", image: require("../assets/detona.jpg"), page: "Pirates" },
    ],
  },
  {
    name: "Comédia",
    movies: [
      { title: "Bingo: O rei das manhãs", image: require("../assets/bing.webp"), page: "WhiteChicks" },
      { title: "Amarração do Amor ", image: require("../assets/amor.jpg"), page: "Hangover" },
      { title: "Divórcio", image: require("../assets/divorcio.jpg"), page: "Ted" },
      { title: "Eu fico louco", image: require("../assets/loko.jpg"), page: "Mask" },
    ],
  },
  {
    name: "Romance",
    movies: [
      { title: "Maré Alta", image: require("../assets/mare.jpg"), page: "Titanic" },
      { title: "Amor de Redenção", image: require("../assets/amoor.jpg"), page: "DearJohn" },
      { title: "Todo tempo que temos", image: require("../assets/ime.jpg"), page: "Notebook" },
    ],
  },
  {
    name: "Terror",
    movies: [
      { title: "Casa Silênciosa", image: require("../assets/house.jpg"), page: "Conjuring" },
      { title: "Isolados", image: require("../assets/iso.jpg"), page: "Annabelle" },
      { title: "Corra", image: require("../assets/corra.jpg"), page: "It" },
    ],
  },
];

export default function Index() {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {categories.map((category, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>{category.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
            {category.movies.map((movie, idx) => (
              <Link href={movie.page}>
                <TouchableOpacity
                  key={idx}
                  style={{ marginRight: 15, alignItems: "center" }}
                >
                    <Image source={movie.image} style={{ width: 100, height: 150, borderRadius: 10 }} />
                    <Text style={{ marginTop: 5, textAlign: "center" }}>{movie.title}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}
