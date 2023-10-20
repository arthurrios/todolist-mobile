import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    padding: 24,
    marginTop: -58,
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
})
