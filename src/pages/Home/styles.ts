import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
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
