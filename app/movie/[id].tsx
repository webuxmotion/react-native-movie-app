import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Movie ID: ${id}`,
    });
  }, [navigation, id]);

  return (
    <View>
      <Text>Movie details: {id}</Text>
    </View>
  );
};

export default Details;
