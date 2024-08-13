import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Stack } from "expo-router";;
import { useRouter } from 'expo-router';
import ClickableInput from '@/components/ClickableInput';
import Reset from '@/components/ResetInput';
import { useLocationStore } from '@/store/locationStore';

const Search = () => {
  const router = useRouter();
  const { selectedLocations, setSelectedLocations } = useLocationStore();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    setLocation(selectedLocations.join(', '));
  }, [selectedLocations]);

  const resetInputs = () => {
    setLocation('');
    setSelectedLocations([]);
    setDate('');
    setGuests('');
  };

  return (
    <View>
      <Stack.Screen
      options={{  
        headerTitle: 'Search',
        headerTitleAlign: 'center',
        headerRight: () => (<Reset onPress={resetInputs}/>),
      }}
      />
      <View>
      <ClickableInput
      iconSource={require('@/assets/images/location-icon.png')}
      placeholder="Where?"
      value={location}
      onPress={() => router.replace('search/filter/where')}
      />
      <ClickableInput
        iconSource={require('@/assets/images/calendar-icon.png')}
        placeholder="When?"
        value={date}
        onPress={() => router.replace('search/filter/when')}
      />
      <ClickableInput
        iconSource={require('@/assets/images/guests-icon.png')}
        placeholder="Guests?"
        value={guests}
        onPress={() => router.replace('search/filter/guests')}
      />
      </View>
    </View>
    );
  };
  
  
  
  export default Search;
