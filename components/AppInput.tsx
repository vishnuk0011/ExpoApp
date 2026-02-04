import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../theme/colors';

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function AppInput({ placeholder, secureTextEntry }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.text,
  },
});