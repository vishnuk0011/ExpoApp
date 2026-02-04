import { router } from 'expo-router';
import { View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <AppInput placeholder="Full Name" />
      <AppInput placeholder="Email or Mobile" />
      <AppInput placeholder="Password" secureTextEntry />
      <AppInput placeholder="Confirm Password" secureTextEntry />

      <AppButton
        title="Register"
        onPress={() => router.replace('/home')}
      />
    </View>
  );
}