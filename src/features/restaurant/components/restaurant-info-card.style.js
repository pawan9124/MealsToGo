import { Card, Text } from "react-native-paper";
import { Image } from "react-native";
import styled from "styled-components/native";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  justify-content: flex-end;
  flex: 1;
  flex-direction: row;
`;
export const Icon = styled(Image)`
  height: 15px;
  width: 15px;
`;

export const RestaurantInformationCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInformationCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
