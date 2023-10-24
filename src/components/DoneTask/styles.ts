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
    marginBottom: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBg: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 12,
    width: 12,
    borderRadius: 999,
  },
  text: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    lineHeight: 19.6,
    textDecorationLine: 'line-through',
  },
})
