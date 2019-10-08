import React from "react";
import { StyleSheet, View } from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";
import { IProduct } from "../../typescript/Product.types";
import { ButtonContainer } from "../UI/ButtonContainer";
import Colors from "../../constants/UI/Colors";

const ProductItem = props => {
  const { id, title, price, description, imageUrl } = props;

  return (
    <Card key={id} style={styles.customCardStyle}>
      <Card.Cover source={{ uri: imageUrl }} />

      <Card.Content>
        <Title>{title}</Title>
        <Paragraph style={styles.priceStyle}>$ {price.toFixed(2)}</Paragraph>
        <Paragraph>{description}</Paragraph>
      </Card.Content>

      <ButtonContainer>
        <Button mode="contained" onPress={() => props.onViewDetails()}>
          View Details
        </Button>
        <Button mode="contained" onPress={() => props.onAddToCard()}>
          To Cart
        </Button>
      </ButtonContainer>
    </Card>
  );
};

const styles = StyleSheet.create({
  productItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "red"
  },
  priceStyle: {
    fontWeight: "bold"
  },
  customCardStyle: {
    borderRadius: 20,
    overflow: "hidden",
    margin: 8,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});

export { ProductItem };
