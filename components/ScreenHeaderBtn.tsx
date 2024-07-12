import React from 'react';
import { Image, TouchableOpacity, ImageSourcePropType, GestureResponderEvent, StyleSheet, ImageStyle } from 'react-native';

export interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: number;
  handlePress: (event: GestureResponderEvent) => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        
        source={iconUrl}
        resizeMode='cover'
        style={btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
});

const btnImg = (dimension: number): ImageStyle => ({
  width: dimension,
  height: dimension,
});

export default ScreenHeaderBtn;
