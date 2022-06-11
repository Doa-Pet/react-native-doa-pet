import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0px ${RFValue(30)}px;
`

export const Title = styled.Text`
  font-size: 46px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};

  margin-top: 50px;
  margin-bottom: 50px;

  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const Name = styled.Text`
  text-align: center;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const Address = styled.Text`
  text-align: center;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  margin-top: 10px;
  margin-bottom: 100px;
`

export const Avatar = styled.Image`
  align-self: center;
  border-radius: 300px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.main};
  margin-bottom: 20px;
`
