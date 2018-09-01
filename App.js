import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.mainImage}
          source={{
            uri:
              "https://res.cloudinary.com/hdsqazxtw/image/upload/f_auto/v1514907687/Logo_Coderhouse_kotc5v.svg"
          }}
        />
        <Text> Curso de Desarrollo Mobile con React Native </Text>{" "}
        <Button
          title="Empezar"
          style={styles.mainImage}
          accessibilityLabel="Empezar ahora"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mainImage: {
    width: 200,
    height: 60
  },
  mainButton: {
    color: "blue",
    backgroundColor: "black"
  }
});
