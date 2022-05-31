import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 ${RFValue(40)}px;
`

export const Header = styled.View``

export const HeaderTitle = styled.Text``
