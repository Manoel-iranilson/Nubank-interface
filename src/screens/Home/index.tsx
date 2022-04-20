import React from "react";
import { ScrollView, View } from "react-native";

// import { Container } from './styles';
import Header from "../Header";
import Options from "../Options";

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <Options />
      </ScrollView>
    </View>
  );
};

export default Home;
