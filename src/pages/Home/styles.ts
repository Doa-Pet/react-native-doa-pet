import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { PublicationsProps } from '../../context/auth'
export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.main};

  padding: ${RFValue(16)}px 0 ${RFValue(24)}px ${RFValue(30)}px;
`

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.background};
`

export const PickerArea = styled.View`
  flex-direction: row;

  margin-left: ${RFValue(-25)}px;
`

export const List = styled.FlatList`
  margin-top: ${RFValue(24)}px;
`

export const Item = styled.View.attrs({})`
  flex-direction: row;

  margin: ${RFValue(15)}px ${RFValue(15)}px;

  border-width: 1px;
  border-radius: 3px;

  border-color: ${({ theme }) => theme.colors.main};
`

export const ItemImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`

export const ItemTitle = styled.Text`
  margin-left: ${RFValue(20)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ItemDescription = styled.Text`
  margin-left: ${RFValue(20)}px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ItemCity = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ItemRace = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-left: ${RFValue(20)}px;
`

export const ItemType = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: ${RFValue(20)}px;
`

export const ItemBottomArea = styled.View`
  flex-direction: row;
  margin-left: ${RFValue(20)}px;
`

export const ItemTextArea = styled.View`
  flex: 1;

  justify-content: space-between;

  padding: ${RFValue(3)}px 0;
`
