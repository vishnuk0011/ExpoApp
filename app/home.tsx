import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 20 }}>
        Welcome, John
      </Text>

      <MenuItem label="Profile" onPress={() => router.push('/profile')} />
      <MenuItem label="Settings" />
      <MenuItem label="About" />
      <MenuItem label="Metal Prices" onPress={() => router.push('/metal-prices')}  />
      <MenuItem label="Quotes" onPress={() => router.push('/quote')}  />
      <MenuItem
        label="Logout"
        onPress={() => router.replace('/login')}
      />
    </View>
  );
}

function MenuItem({ label, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 18,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 16,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '600' }}>{label}</Text>
    </TouchableOpacity>
  );
}