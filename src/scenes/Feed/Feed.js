import React from 'react';

import {Spinner} from 'native-base';
import {Text, SafeAreaView, FlatList} from 'react-native';
import Card from '../../components/CardFeed/CardFeed';
import styles from './Feed.style';
import {useState} from 'react';
import {useEffect} from 'react';
import FeedService from '../../services/feed/Feed.service';
import {PRIMARY_COLOR} from '../../assets/style/_common';
import AppStatusBar from '../../components/AppStatusBar/AppStatusBar';

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
    <SafeAreaView style={styles.topSafeArea}>
      <AppStatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      {list && (
        <FlatList
          style={[styles.container]}
          data={list}
          keyExtractor={(item, i) => i + ''}
          renderItem={renderItem}
          onEndReached={handleRefresh}
          onEndReachedThreshold={0.001}
          ListFooterComponent={renderFooter} // show activity indicator
          showsVerticalScrollIndicator={true}
          refreshing={false}
        />
      )}
      {isLoading && <Spinner color="blue" />}
      {/* <Card /> */}
    </SafeAreaView>
  );
};
export default Feed;
