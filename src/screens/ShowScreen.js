import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context } from '../context/BlogContext';

export default function ShowScreen() {
  const route = useRoute();
  const { id } = route.params;

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  //   console.log(route.params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
