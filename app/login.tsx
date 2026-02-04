import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <AppInput placeholder="Email or Mobile" />
      <AppInput placeholder="Password" secureTextEntry />

      <TouchableOpacity>
        <Text style={{ textAlign: 'right', marginBottom: 16 }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <AppButton
        title="Login"
        onPress={() => router.replace('/home')}
      />

      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Don’t have an account?{' '}
        <Text
          style={{ fontWeight: '600' }}
          onPress={() => router.push('/register')}
        >
          Register
        </Text>
      </Text>
    </View>
  );
}