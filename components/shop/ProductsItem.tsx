import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { IProduct } from "../../typescript/Product.types";

const ProductItem = ({ id, title }: IProduct) => {
  return (
    <Card key={id}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  productItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 4 * 10,
    borderWidth: 1,
    borderColor: "red"
  }
});

export { ProductItem };
