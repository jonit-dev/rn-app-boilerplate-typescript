import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';
import { ButtonContainer } from '../UI/ButtonContainer';

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
  priceStyle: {
    fontWeight: "bold"
  },
  customCardStyle: {
    borderRadius: 20,
    overflow: "hidden",
    margin: 8,
    shadowColor: colors.dark,
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
