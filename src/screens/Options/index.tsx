import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import {
  AllView,
  AreasView,
  Container,
  FaturaBtn,
  SubTitle,
  FaturaView,
  Mycard,
  TitleView,
  ViewOptions,
  BtnSafe,
  DiscoverView,
  DiscoverTItle,
  DiscoverSubTItle,
  DiscoverBtn,
} from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

const Options: React.FC = () => {
  return (
    <Container>
      {/* options area */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ padding: 15 }}
      >
        <View>
          <ViewOptions>
            <Text>+++</Text>
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Pix</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <AntDesign name="barcode" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Pagar</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <MaterialCommunityIcons name="cash-minus" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Transferir</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <MaterialCommunityIcons name="cash-plus" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Depositar</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <MaterialCommunityIcons name="cellphone" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Recarda de</Text>
            <Text>celular</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <FontAwesome name="money" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Cobrar</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <Entypo name="heart-outlined" size={25} color="black" />
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Doação</Text>
          </View>
        </View>

        <View>
          <ViewOptions>
            <Text>+++</Text>
          </ViewOptions>
          <View style={{ alignItems: "center", marginLeft: 10 }}>
            <Text>Transferir</Text>
            <Text>Internac.</Text>
          </View>
        </View>
      </ScrollView>
      {/* my cards */}
      <View style={{ paddingLeft: 22, paddingTop: 10 }}>
        <TouchableOpacity>
          <Mycard>
            <MaterialCommunityIcons
              name="credit-card-multiple-outline"
              size={25}
              color="black"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "700" }}>Meus cartões</Text>
            </View>
          </Mycard>
        </TouchableOpacity>
      </View>
      {/* credit card */}
      <AllView>
        <AntDesign name="creditcard" size={28} color="black" />
        <AreasView>
          <TitleView>Cartão de crédito</TitleView>
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" />
          </View>
        </AreasView>
        <View>
          <FaturaView>
            <SubTitle>Fatura Fechada</SubTitle>
          </FaturaView>
          <FaturaView>
            <TitleView>R$200,00</TitleView>
          </FaturaView>
          <SubTitle>Vencimento dia 20</SubTitle>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <FaturaBtn
            style={{ backgroundColor: "#ee6d6d", borderColor: "#ee6d6d" }}
          >
            <Text style={{ color: "white" }}>Pagar Fatura</Text>
          </FaturaBtn>
          <FaturaBtn
            style={{ backgroundColor: "#dfdbdb", borderColor: "#dcdcdc" }}
          >
            <Text style={{ fontWeight: "600" }}>Parcelar</Text>
          </FaturaBtn>
        </View>
      </AllView>
      {/* my investments */}
      <AllView>
        <FontAwesome name="signal" size={28} color="black" />
        <AreasView>
          <TitleView>Investimentos</TitleView>
          <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" />
        </AreasView>
        <SubTitle>
          O jeito Nu de investir:sem asteriscos,linguagem fácil e a partir de
          R$1. Saiba mais.
        </SubTitle>
      </AllView>
      {/* safe */}
      <AllView>
        <Feather name="umbrella" size={28} color="black" />
        <AreasView>
          <TitleView>Seguros</TitleView>
          <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" />
        </AreasView>
        <SubTitle>Proteção para você cuidar do que importa</SubTitle>
        <BtnSafe>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Feather name="heart" size={28} color="black" />
            <View style={{ marginLeft: 10, marginTop: 4 }}>
              <Text style={{ fontWeight: "600" }}>Seguro de vida</Text>
            </View>
          </View>
        </BtnSafe>
      </AllView>
      {/* Shopping */}
      <AllView>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={28}
          color="black"
        />
        <AreasView>
          <TitleView>Shopping</TitleView>
          <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" />
        </AreasView>
        <SubTitle>Vantagens exclusivas das nossas marcas preferidas</SubTitle>
      </AllView>
      {/* Find out more */}
      <AllView>
        <TitleView>Descubra mais</TitleView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <DiscoverView>
            <View>
              <Image source={require("../../../assets/Portabilidade.png")} />
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ marginBottom: 10 }}>
                <DiscoverTItle>Portabilidade de salario</DiscoverTItle>
              </View>
              <DiscoverSubTItle>
                Sua liberdade financeira começa com você escolhendo
              </DiscoverSubTItle>
            </View>
            <DiscoverBtn style={{ width: 105 }}>
              <Text style={{ color: "white" }}>Conhecer</Text>
            </DiscoverBtn>
          </DiscoverView>
          <DiscoverView>
            <View>
              <Image source={require("../../../assets/indique.png")} />
            </View>
            <View style={{ padding: 10 }}>
              <View style={{ marginBottom: 10 }}>
                <DiscoverTItle>Indique seus amigos</DiscoverTItle>
              </View>
              <DiscoverSubTItle>
                Mostre aos seus amigos como é fácil ter uma vida sem ...
              </DiscoverSubTItle>
            </View>
            <DiscoverBtn style={{ width: 120 }}>
              <Text style={{ color: "white" }}>Indicar Amigos</Text>
            </DiscoverBtn>
          </DiscoverView>
        </ScrollView>
      </AllView>
    </Container>
  );
};

export default Options;
