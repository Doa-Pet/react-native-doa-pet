import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.main};

  border-radius: ${RFValue(5)}px;

  margin-bottom: ${RFValue(16)}px;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`
