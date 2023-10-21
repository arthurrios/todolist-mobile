import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    alignSelf: 'stretch',
    backgroundColor: '#262626',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 8,
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19.6,
  },
})
