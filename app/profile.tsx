import { Text, View } from 'react-native';
import AppButton from '../components/AppButton';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
      <Text>Mobile: +1234567890</Text>

      <AppButton title="Edit Profile" onPress={() => {}} />
    </View>
  );
}