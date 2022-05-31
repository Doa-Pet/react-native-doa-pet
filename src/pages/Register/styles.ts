import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import Icon from '../../assets/arrow-left.svg'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};

  padding: 0 ${RFValue(40)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${RFValue(48)}px;

  text-align: center;

  margin-top: ${RFValue(50)}px;
  margin-bottom: ${RFValue(50)}px;
`

export const ArrowIcon = styled(Icon)``

export const BackButton = styled.TouchableOpacity`
  margin-top: ${RFValue(30)}px;
  margin-left: ${RFValue(-30)}px;
`
