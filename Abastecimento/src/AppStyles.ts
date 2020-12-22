import styled from 'styled-components/native';

export const ContainerPrincipal = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const Container = styled.View`
    width: 100%;
    padding: 30px;
`;

export const CentroDistribuicaoButton = styled.TouchableOpacity`
  padding: 15px 20px 15px 80px;
  min-height: 80px;
  border: solid;
  border-color: #f5f5f5;
  background-color: #fff;
`;

export const InitialCircle = styled.View`
  position: absolute;
  top: 10px;
  left: 20px;
  background-color: #efefef;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TextCircle = styled.Text`
  color: #555;
  font-size: 12px;
  margin: auto;
`;

export const TextExposed = styled.Text`
  color: #333;
  margin-top: 10px;
`;