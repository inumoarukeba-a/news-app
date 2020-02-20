import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './components/LisItem';
import articles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        author={article.title}
        title={article.author}
        key={index}
      />
    );
  });

  return <View style={styles.container}>{items}</View>;
}
