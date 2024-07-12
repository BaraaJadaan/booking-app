import React, { useRef, useState } from 'react';
import styles from '../styles/styles'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Slide from '../components/Slide';
import { Link } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const slides = [
  {
    image: require('../assets/images/first-intro.png'),
    title: 'Smooth Group Travel Coordination',
    description: 'Effortless Planning, Booking, and Payment Management Together',
  },
  {
    image: require('../assets/images/second-intro.png'),
    title: 'Easiest Way to Split Group Payment',
    description: 'Minimizes Confusion, Make Convenient and Accessible for Everyone Involved',
  },
  {
    image: require('../assets/images/third-intro.png'),
    title: 'Create Your Customized Filter to Search',
    description: 'Create Your Own Custom Filters and Use for More Smooth Search Experience',
  },
];

const IntroCarousel: React.FC = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const renderSlide = ({ item }: { item: any }) => (
    <Slide image={item.image} title={item.title} description={item.description} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderSlide}
        width={windowWidth}
        height={windowHeight}
        onSnapToItem={setActiveSlide}
      />
      <Link href='/home' style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </Link>
    </View>
  );
};



export default IntroCarousel;