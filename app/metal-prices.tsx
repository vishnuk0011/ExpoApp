import { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../theme/colors';
import { getMetalPrices } from '../utils/goldApi';

export default function MetalPricesScreen() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadPrices = async () => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const result = await getMetalPrices();
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity
        onPress={loadPrices}
        style={{
          backgroundColor: colors.primary,
          padding: 14,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: colors.white, textAlign: 'center' }}>
          Get Live Metal Prices
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}

      {error ? (
        <Text style={{ color: 'red', marginTop: 16 }}>{error}</Text>
      ) : null}

      {data && (
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            Live Prices (USD)
          </Text>

          <Text style={{ marginTop: 8 }}>
            🟡 Gold: ${data.gold}
          </Text>
          <Text>
            ⚪ Silver: ${data.silver}
          </Text>
          <Text>
            ⚙️ Platinum: ${data.platinum}
          </Text>
          <Text>
            🔘 Palladium: ${data.palladium}
          </Text>
        </View>
      )}
    </View>
  );
}