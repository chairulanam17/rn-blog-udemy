import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen() {
  const { state } = useContext(Context);
  const route = useRoute();
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);
  // -------------------------------------------------------------
  //   const [title, setTitle] = useState(blogPost.title);
  //   const [content, setContent] = useState(blogPost.content);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
}

const styles = StyleSheet.create({});
