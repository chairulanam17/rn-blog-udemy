import React, { useContext } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IndexScreen({ navigation, route }) {
  const { state, deleteBlogPost } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate('Create')}
          >
            <MaterialCommunityIcons name="plus" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  iconContainer: {
    marginRight: 10,
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 5,
    color: 'white',
  },
});
