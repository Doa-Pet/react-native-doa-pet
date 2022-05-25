import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import Image from '../../assets/logo.svg'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 ${RFValue(40)}px;
`

export const Logo = styled(Image)`
  align-self: center;
  margin-top: ${RFValue(120)}px;
`

export const InputArea = styled.View`
  margin-top: ${RFValue(100)}px;
`

export const ForgetPasswordButton = styled.TouchableOpacity`
  margin-left: 2px;
  margin-bottom: ${RFValue(16)}px;
`

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.icon};
`
