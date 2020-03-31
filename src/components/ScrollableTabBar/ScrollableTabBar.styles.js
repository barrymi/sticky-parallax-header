import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentContainer: {
    alignItems: 'center',
    // paddingHorizontal: 20
    paddingRight: 16
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  countWrapper: {
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontSize: 16
  },
  nestedStyle: {
    alignSelf: 'center'
  }
})
