import styled from 'styled-components/native';
import ButtonConfirm from '../../Components/ButtonConfirm';

export const Container = styled.ScrollView`
  width: 100%;
  padding: 30px;
`;

export const ContainerInput = styled.View`
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const Logo = styled.Image`
  height: 33.5px;
  width: 288px;
  margin: 50px auto 30px auto;
`;

export const Footer = styled.View`
  margin: 10px 0 50px 0;
`;

export const TextFooter = styled.Text`
  text-align: center;
`;

export const SubmitButton = styled(ButtonConfirm)`
  margin-top: 5px;
`;