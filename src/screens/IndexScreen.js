import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});