// components/Slide.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import styles from '@/styles/styles'

const { width: viewportWidth } = Dimensions.get('window');
const windowHeight = Dimensions.get('window').height;

interface SlideProps {
  image: any; // the correct type for img
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ image, title, description }) => {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};


export default Slide;
