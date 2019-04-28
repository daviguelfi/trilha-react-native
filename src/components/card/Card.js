import * as React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Card = ({ text, qtd, styleContainer }) => (
  <View style={{ ...styles.card, ...styleContainer }}>
    <View style={styles.col1}>
      <Text style={styles.cardTitle}>{text}</Text>
      <Text style={styles.cardSubtitle}>{qtd} participantes</Text>
    </View>
    <View style={styles.col2}>
      <Text style={styles.cardNav}>
        <AntDesign name="right" size={32} />
      </Text>
    </View>
  </View>
);

export default Card;
