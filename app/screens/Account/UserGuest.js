import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

const UserGuest = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil de Hospital Air</Text>
      <Text style={styles.description}>
        Busca y visualiza a los mejores doctores de nuestro hospital, vota cuál
        te ha gustado màs y comenta cómo ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyles}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyles: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});
