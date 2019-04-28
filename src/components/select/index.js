import * as React from 'react';
import { Text, Picker, View } from 'react-native';
import styles from './styles';

const Select = ({
  label,
  value,
  onChange,
  stylesInput,
  stylesLabel,
  stylesContainer,
  items,
  ...props
}) => (
  <View style={stylesContainer}>
    <Text style={{ ...styles.label, ...stylesLabel }}>{label}</Text>
    <Picker
      selectedValue={value}
      style={{ ...styles.input, ...stylesInput }}
      onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      {...props}
    >
      {items.map(item => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
    </Picker>
  </View>
);

export default Select;
