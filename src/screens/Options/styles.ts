import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(View)``;

export const ViewOptions = styled(View)`
  background-color: #dcdcdc;
  height: 70px;
  width: 70px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
`;

export const Mycard = styled(View)`
  padding: 10px;
  align-items: center;
  flex-direction: row;
  width: 360px;
  height: 70px;
  border-radius: 20px;
  background-color: #dcdcdc;
`;

export const AllView = styled(View)`
  margin-top: 20px;
  padding: 25px;
  border-top-width: 1.5px;
  border-color: #dcdcdc;
`;

export const AreasView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleView = styled(Text)`
  font-size: 22px;
  font-weight: 600;
`;

export const FaturaView = styled(View)`
  margin-bottom: 5px;
`;

export const SubTitle = styled(Text)`
  font-size: 14px;
  color: gray;
`;

export const FaturaBtn = styled(View)`
  border-width: 1px;
  margin-right: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
`;

export const BtnSafe = styled(TouchableOpacity)`
  margin-top: 10px;
  flex-direction: row;
  border-width: 1px;
  background-color: #dfdbdb;
  border-color: #dfdbdb;
  border-radius: 20px;
  height: 55px;
  align-items: center;
`;

export const DiscoverView = styled(View)`
  margin-top: 25px;
  background-color: #dfdbdb;
  width: 227px;
  height: 260px;
  border-radius: 20px;
  margin-right: 25px;
`;

export const DiscoverTItle = styled(Text)`
  font-weight: 600;
`;
export const DiscoverSubTItle = styled(Text)`
  color: gray;
`;

export const DiscoverBtn = styled(TouchableOpacity)`
  margin-left: 8px;
  margin-top: 10px;
  border-width: 1px;
  background-color: #9c44dc;
  border-color: #9c44dc;
  border-radius: 20px;
  height: 40px;

  padding: 5px;
  align-items: center;
  justify-content: center;
`;
