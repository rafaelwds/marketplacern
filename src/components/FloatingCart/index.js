import React from "react";
import { useNavigation } from "@react-navigation/native";

import FeatherIcon from "react-native-vector-icons/Feather";

import {
  Container,
  CartPricing,
  CartTotalPrice,
  CardButton,
  CardButtonText,
} from "./styles";

export default function FloatingCart() {
  const navigation = useNavigation();
  return (
    <Container>
      <CardButton onPress={() => navigation.navigate("Cart")}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CardButtonText>2 itens</CardButtonText>

        <CartPricing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPricing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CardButton>
    </Container>
  );
}
