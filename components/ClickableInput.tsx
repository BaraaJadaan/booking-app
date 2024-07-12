import React from 'react';
import { View, StyleSheet, Text, Image, ImageSourcePropType, TouchableWithoutFeedback } from 'react-native';

interface ClickableInputProps {
  iconSource: ImageSourcePropType;
  placeholder: string;
  value: string;
  onPress: () => void;
}

const ClickableInput: React.FC<ClickableInputProps> = ({ iconSource, placeholder, value, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.icon} source={iconSource} />
        <View style={styles.textContainer}>
          {value ? (
            <Text style={styles.value}>{value}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 50,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  placeholder: {
    fontSize: 18,
    color: 'black'
  },
  value: {
    fontSize: 18,
    color: 'black'
  },
});

export default ClickableInput;
