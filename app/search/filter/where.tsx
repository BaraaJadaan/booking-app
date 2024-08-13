import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { CheckboxGroup, Checkbox, CheckboxIndicator, CheckboxLabel, VStack, Box, Text } from '@gluestack-ui/themed';
import { useRouter, Stack } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocationStore } from '@/store/locationStore';
import { useLocations } from '@/services/locations';
import { LocationFeature } from '@/services/locations';
import { useDebounce } from '@/hooks/useDebounce';
import Reset from '@/components/ResetInput';

const schema = z.object({
  search: z.string().min(2, 'Search query must be at least 2 characters'),
});

const Where: React.FC = () => {
  const router = useRouter();
  const { selectedLocations, setSelectedLocations } = useLocationStore();
  const { control, handleSubmit, setValue, watch, trigger } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      search: '',
    },
  });

  const search = watch('search');
  const debouncedSearch = useDebounce(search, 700);
  const { data, isLoading, error } = useLocations(debouncedSearch.length >= 2 ? debouncedSearch : '');

  const filterDuplicates = (locations: LocationFeature[]) => {
    const uniqueLocations = locations.reduce((acc, current) => {
      const duplicate = acc.find(item => item.properties.name === current.properties.name);
      if (!duplicate) {
        acc.push(current);
      }
      return acc;
    }, [] as LocationFeature[]);
    return uniqueLocations;
  };

  const filteredData = data ? filterDuplicates(data) : [];

  const handleSelectLocation = (location: string) => {
    const newSelectedLocations = selectedLocations.includes(location)
      ? selectedLocations.filter((loc: string) => loc !== location)
      : [location, ...selectedLocations];
    setSelectedLocations(newSelectedLocations);
  };

  const handleShowResults = (data: { search: string }) => {
    if (data.search.length >= 2) {
      router.replace({ pathname: '/search'});
    }
  };

  useEffect(() => {
    if (filteredData) {
      const newSelectedLocations = selectedLocations.filter(loc => filteredData.some(item => item.properties.name === loc));
      if (newSelectedLocations.length !== selectedLocations.length) {
        setSelectedLocations(newSelectedLocations);
      }
    }
  }, [filteredData]);

  const resetInputs = () => {
    setSelectedLocations([]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Where?',
          headerTitleAlign: 'center',
          headerRight: () => (<Reset onPress={resetInputs} />),
        }}
      />
      <View style={styles.searchContainer}>
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <>
              <View style={styles.searchInputView}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('@/assets/images/search-icon.png')} />
                <TextInput
                  onBlur={onBlur}
                  onChangeText={(text) => {
                    onChange(text);
                    trigger('search');
                  }}
                  value={value}
                  placeholder="Search Places"
                  style={styles.searchInput}
                  aria-label="Search input"
                />
              </View>
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </>
          )}
        />
      </View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error loading locations</Text>
      ) : (
        <CheckboxGroup
          value={selectedLocations}
          onChange={(values) => {
            values.forEach(handleSelectLocation);
          }}
          aria-label="Select locations"
        >
          <FlatList
            data={filteredData.sort((a, b) => selectedLocations.indexOf(b.properties.name) - selectedLocations.indexOf(a.properties.name))}
            keyExtractor={(item) => item.properties.osm_id.toString()}
            renderItem={({ item }) => (
              <Box key={item.properties.osm_id} style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={item.properties.name}
                  aria-label={`Select ${item.properties.name}`}
                  isChecked={selectedLocations.includes(item.properties.name)}
                  onChange={() => handleSelectLocation(item.properties.name)}
                >
                  <CheckboxIndicator mr="$2" mt='$2' />
                  <CheckboxLabel style={{ color: 'black' }}>{item.properties.name}</CheckboxLabel>
                </Checkbox>
                <Text size="sm" ml="$7">{item.properties.country}</Text>
              </Box>
            )}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </CheckboxGroup>
      )}
      <TouchableOpacity style={styles.showResultsButton} onPress={handleSubmit(handleShowResults)}>
        <Text style={styles.showResultsButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    fontSize: 18,
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 15,
  },
  checkboxContainer: {
    alignItems: 'baseline',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkbox: {},
  showResultsButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#188EFC',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  showResultsButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Where;
