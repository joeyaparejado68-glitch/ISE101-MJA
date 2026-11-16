
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ConnectionStatus() {
  const [status, setStatus] = useState('Checking');

  useEffect(() => {
    // Example side effect
    setStatus('Ready for Campus Connect');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Connection Status</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 15,
    color: '#16A34A',
  },
});
