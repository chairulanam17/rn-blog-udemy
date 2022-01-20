import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ShowScreen({ navigation }) {
  //ini core jika mau pake useContext dan useRoute
  const route = useRoute();
  const { id } = route.params;
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  //==============================================================
  //   console.log(route.params.id);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate('Edit', { id: id })}
          >
            <MaterialCommunityIcons name="pencil" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 5,
    color: 'white',
  },
});
