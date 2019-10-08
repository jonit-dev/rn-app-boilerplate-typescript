import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { IProduct } from "../../typescript/Product.types";
import { ProductItem } from "../../components/shop/ProductsItem";

const ProductsOverView = props => {
  const products = useSelector(
    state => state.productsReducer.availableProducts
  );

  const renderItem = (item: IProduct) => <ProductItem {...item} />;

  return (
    <View style={styles.productsOverviewContainer}>
      <FlatList<IProduct>
        data={products}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productsOverviewContainer: {
    flex: 1
  }
});

ProductsOverView.navigationOptions = {
  headerTitle: "All Products"
};

export { ProductsOverView };
