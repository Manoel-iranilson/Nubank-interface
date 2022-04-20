import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import {
  Container,
  Header,
  UserView,
  IconOptionsView,
  TopView,
  WelcomeText,
  TextView,
  CastView,
  ContaView,
  Cast,
  CastIcon,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home: React.FC = () => {
  const [ShowCast, setShowCast] = useState(false);

  return (
    <Container>
      <Header>
        <TopView>
          <UserView>
            <Ionicons name="person-outline" size={28} color="#fff" />
          </UserView>

          <IconOptionsView>
            <TouchableOpacity onPress={() => setShowCast(!ShowCast)}>
              <View style={{ marginRight: 20 }}>
                {ShowCast ? (
                  <Ionicons name="eye-outline" size={28} color="#fff" />
                ) : (
                  <Ionicons name="eye-off-outline" size={28} color="#fff" />
                )}
              </View>
            </TouchableOpacity>
            <View style={{ marginRight: 20 }}>
              <Ionicons name="help-circle-outline" size={28} color="#fff" />
            </View>
            <View>
              <Ionicons name="person-add-outline" size={28} color="#fff" />
            </View>
          </IconOptionsView>
        </TopView>
        <TextView>
          <WelcomeText>Olá, Manoel</WelcomeText>
        </TextView>
      </Header>

      <CastView>
        <ContaView>
          <Cast>Conta</Cast>
          <Ionicons name="arrow-forward-outline" size={28} color="gray" />
        </ContaView>
        {ShowCast ? (
          <Cast>R$ 1,500</Cast>
        ) : (
          <View>
            <CastIcon />
          </View>
        )}
      </CastView>
    </Container>
  );
};

export default Home;
