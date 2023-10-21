import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  main: {
    padding: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
  inputFocus: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#5E60CE',
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
  taskQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 21,
  },
  quantityContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  doneText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityNumberBg: {
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: 19,
    width: 25,
    borderRadius: 999,
  },
  quantity: {
    alignItems: 'center',
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#D9D9D9',
    fontWeight: 'bold',
  },
})
