import { TextInput } from 'react-native-paper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import theme from '../../global/theme'

export const Container = styled(TextInput).attrs({
  activeOutlineColor: theme.colors.main,
  outlineColor: theme.colors.icon,
})`
  background: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(16)}px;
`
