import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

const Input = ({
  label,
  value,
  onChange,
  stylesInput,
  stylesLabel,
  stylesContainer,
  security,
  invalid,
  messageInvalid,
  stylesInvalid,
  ...props
}) => {
  let inputInvalidStyle = { ...styles.invalid, ...stylesInvalid };
  let inputStyle = { ...styles.input, ...stylesInput };
  inputStyle = invalid ? { ...inputStyle, ...inputInvalidStyle } : inputStyle;

  let labelInvalidStyle = { ...styles.invalid, ...stylesInvalid };
  let labelStyle = { ...styles.label, ...stylesLabel };
  labelStyle = invalid ? { ...labelStyle, ...labelInvalidStyle } : labelStyle;

  return (
    <View style={stylesContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={security}
        style={inputStyle}
        onChangeText={password => onChange(password)}
        value={value}
        {...props}
      />
      {invalid && messageInvalid ? (
        <Text style={{ ...styles.invalid, ...stylesInvalid }}>
          {messageInvalid}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;