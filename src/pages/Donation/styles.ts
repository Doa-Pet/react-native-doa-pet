import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(KeyboardAwareScrollView)`
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

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
  width: ${RFValue(120)}px;
  height: ${RFValue(40)}px;

  border-radius: ${RFValue(10)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const ImageButton = styled.TouchableOpacity`
  margin-bottom: ${RFValue(15)}px;

  background: ${({ theme }) => theme.colors.main};
  justify-content: center;
  align-items: center;

  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(10)}px;
`

export const ImageButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.background};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`
