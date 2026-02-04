import { useState } from 'react';
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import colors from '../theme/colors';
import { getRandomQuote } from '../utils/quotesApi';

export default function QuoteScreen() {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadQuote = async () => {
    setLoading(true);
    setError('');
    setQuote(null);
    setAuthor(null);

    try {
      const data = await getRandomQuote();
      setQuote(data.content);
      setAuthor(data.originator?.name || 'Unknown');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={loadQuote}
        style={{
          backgroundColor: colors.primary,
          padding: 14,
          borderRadius: 8,
          marginBottom: 24,
        }}
      >
        <Text style={{ color: colors.white, textAlign: 'center' }}>
          Get Random Quote
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}

      {error ? (
        <Text style={{ color: 'red', textAlign: 'center' }}>
          {error}
        </Text>
      ) : null}

      {quote && (
        <View>
          <Text
            style={{
              fontSize: 18,
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            “{quote}”
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            — {author}
          </Text>
        </View>
      )}
    </View>
  );
}