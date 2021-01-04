import styled from 'styled-components/native';

export const ContainerPrincipal = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const Container = styled.View`
    width: 100%;
    padding: 30px;
`;

export const CentroDistribuicaoButton = styled.TouchableOpacity.attrs((cd: number, cdSelected: number) => {
  cd
  cdSelected
})`
  padding: 15px 20px 15px 80px;
  min-height: 80px;
  border: solid;
  border-color: #f5f5f5;
  background-color: ${({ cd, cdSelected }: any) => cd === cdSelected ? '#0054A6' : '#fff'};
`;

export const InitialCircle = styled.View.attrs((cd: number, cdSelected: number) => {
  cd
  cdSelected
})`
  position: absolute;
  top: 10px;
  left: 20px;
  background-color: ${({ cd, cdSelected }: any) => cd === cdSelected ? '#11406D' : '#efefef'};
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TextCircle = styled.Text.attrs((cd: number, cdSelected: number) => {
  cd
  cdSelected
})`
  color: ${({ cd, cdSelected }: any) => cd === cdSelected ? '#fff' : '#555'};
  font-size: 12px;
  margin: auto;
`;

export const TextExposed = styled.Text.attrs((cd: number, cdSelected: number) => {
  cd
  cdSelected
})`
  color: ${({ cd, cdSelected }: any) => cd === cdSelected ? '#fff' : '#333'};
  margin-top: 10px;
`;