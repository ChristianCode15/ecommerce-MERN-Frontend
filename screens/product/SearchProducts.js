import React from "react";
import { View, StyleSheet } from "react-native";
import { Content, Body, Left, Text, ListItem, Thumbnail } from "native-base";

const SearchProducts = (props) => {
  const { productsFilter } = props;

  return (
    <Content>
      {productsFilter.length > 0 ? (
        productsFilter.map((item) => (
          <ListItem
            //onPress={navigation}
            key={item._id.$oid}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View>
          <Text style={{ alignSelf: 'center', marginTop: 100}}>
            {" "}
            No existe producto en la busqueda
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SearchProducts;
