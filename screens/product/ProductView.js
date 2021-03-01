import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import ProductList from "./ProductList";
import SearchProducts from "./SearchProducts";
import Banner from "../../shared/Banner";

const data = require("../../assets/data/products.json"); //Data Fake Para testear

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const ProductView = () => {
  const [products, setProducts] = useState([]); //State para mostrar productos
  const [productsFilter, setProductsFilter] = useState([]);
  const [focus, setFocus] = useState();

  useState(() => {
    setProducts(data);
    setProductsFilter(data);
    setFocus(false);

    return () => {
      setProducts([]); //Despues de setear products se limpia setProducts
      setProductsFilter([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFilter(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase())) //Predigo productos y el include para filtar tambien argumentos para encontrar el producto
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container style={{ width: width }}>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Buscar"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus === true ? ( //Aqui activo icono de x para poder cancelar la busqueda y mostrar los productos de nuevo
            <Icon onPress={onBlur} name="ios-close" />
          ) : null}
        </Item>
      </Header>
      {focus === true ? (
        <SearchProducts productsFilter={productsFilter} />
      ) : (
        <View style={styles.container}>
          <View>
          <Banner />
            <FlatList
              numColumns={2}
              data={products}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductView;
