import styled from 'styled-components/native';

export const ContainerPrincipal = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const Container = styled.View`
    width: 100%;
    padding: 30px;
`;

export const ResultadoButton = styled.TouchableOpacity.attrs((option: number, Selected: number) => {
  option
  Selected
})`
  padding: 15px 20px 15px 80px;
  min-height: 80px;
  border: solid;
  border-color: #f5f5f5;
  background-color: ${({ option, Selected }: any) => option === Selected && Selected ? '#0054A6' : '#fff'};
`;

export const InitialCircle = styled.View.attrs((option: number, Selected: number) => {
  option
  Selected
})`
  position: absolute;
  top: 10px;
  left: 20px;
  margin-top: 10px;
  background-color: ${({ option, Selected }: any) => option === Selected && Selected ? '#11406D' : '#efefef'};
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const TextCircle = styled.Text.attrs((option: number, Selected: number) => {
  option
  Selected
})`
  color: ${({ option, Selected }: any) => option === Selected && Selected ? '#fff' : '#555'};
  font-size: 12px;
  margin: auto;
`;


export const TextExposed = styled.Text.attrs((option: number, Selected: number) => {
  option
  Selected
})`
  color: ${({ option, Selected }: any) => option === Selected && Selected ? '#fff' : '#333'};
  margin-top: 10px;
`;