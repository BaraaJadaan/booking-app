import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Box, Input } from '@gluestack-ui/themed-native-base';

interface InputFormProps {
  iconSource: ImageSourcePropType;
  placeholder: string;
  onPress: () => void;
}

const FilterInput: React.FC<InputFormProps> = ({ iconSource, placeholder, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
      <Box style={styles.box}>
        <Image style={styles.icon} source={iconSource} />
        <Input
          isReadOnly
          value=""
          placeholder={placeholder}
          style={styles.input}
        />
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    width: '100%',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    marginVertical: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default FilterInput;
