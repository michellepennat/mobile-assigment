import React from 'react';

import {Container, Header, Spinner} from 'native-base';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Card from '../../components/CardFeed/CardFeed';
import styles from './Feed.style';
import {useState} from 'react';
import {useEffect} from 'react';
import FeedService from '../../services/feed/Feed.service';

const Feed = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCharacters() {
      setIsLoading(true);
      const newData = await FeedService.getAll(page);
      if (newData.err) return alert(newData.err);
      setList(newData.results);
      setMaxPages(newData.info.pages);
      setIsLoading(false);
    }
    getCharacters();
  }, []);

  useEffect(() => {
    async function getCharacters() {
      setIsLoading(true);
      const newData = await FeedService.getAll(page);
      if (newData.err) return alert(newData.err);

      if (list) newData.results.unshift(...list);
      setList(newData.results);
      setIsLoading(false);
    }
    getCharacters();
  }, [page]);

  const handleRefresh = () => {
    if (page < maxPages) setPage(page + 1);
  };

  const renderItem = ({item}) => <Card navigation={navigation} {...item} />;

  const renderFooter = ({}) => <Text>Im loading</Text>;

  return (
    <SafeAreaView>
      <Header style={[styles.header]}>
        <Text style={[styles.textHeader]}>Feed</Text>
      </Header>
      {list && (
        <FlatList
          style={[styles.container]}
          data={list}
          keyExtractor={(item, i) => i + ''}
          renderItem={renderItem}
          onEndReached={handleRefresh}
          onEndReachedThreshold={0.08}
          ListFooterComponent={renderFooter} // show activity indicator
          refreshing={false}
        />
      )}
      {isLoading && <Spinner color="blue" />}
      <Card />
    </SafeAreaView>
  );
};
export default Feed;
