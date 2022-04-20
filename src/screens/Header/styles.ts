import { View, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)``;

export const Header = styled(View)`
  justify-content: space-around;
  background-color: #9c44dc;
  height: 150px;
  width: 100%;
`;

export const TopView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const UserView = styled(View)`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 30px;
  border-radius: 100px;
  background-color: #a75dd9;
`;

export const IconOptionsView = styled(View)`
  margin-left: 150px;
  flex-direction: row;
  padding: 20px;
`;

export const TextView = styled(View)`
  margin-left: 30px;
`;

export const WelcomeText = styled(Text)`
  color: white;
  font-size: 22px;
`;

export const ContaView = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

export const CastView = styled(View)`
  padding: 25px;
  height: 100px;
`;

export const Cast = styled(Text)`
  font-size: 22px;
  font-weight: 700;
`;

export const CastIcon = styled(View)`
  width: 200px;
  height: 30px;
  background-color: #dcdcdc;
`;
