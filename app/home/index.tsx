import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";
import ScreenHeaderBtn from '@/components/ScreenHeaderBtn';
import importedStyles from '@/styles/styles';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: '#F9FAFB' }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <>
              <ScreenHeaderBtn iconUrl={require('@/assets/images/message-icon.png')} dimension={35} handlePress={() => {}} />
              <ScreenHeaderBtn iconUrl={require('@/assets/images/bell-icon.png')} dimension={35} handlePress={() => {}} />
            </>
          ),
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.searchBtn} onPress={() => router.push('/search')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 25, height: 20, marginRight: 10 }} source={require('@/assets/images/search-icon.png')} />
            <Text style={styles.searchText}>Search Places</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => router.push('/search')}>
          <Image style={{ width: 25, height: 20 }} source={require('@/assets/images/filter-icon.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={importedStyles.image} source={require('@/assets/images/home.png')} />
        <TouchableOpacity style={styles.btn}>
          <Text style={importedStyles.btnText}>Create Your Travel Group!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
  },
  searchBtn: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 50,
    borderColor: '#D0D5DD',
    borderWidth: 1,
  },
  searchText: {
    fontSize: 16,
    color: 'grey',
  },
  filterBtn: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 100,
    marginLeft: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  btn: {
    textAlign: 'center',
    backgroundColor: '#188EFC',
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 50,
  },
});
