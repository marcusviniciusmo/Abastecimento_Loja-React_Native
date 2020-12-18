import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #75808B;
    position: absolute;
    width: 90%;
    height: 60px;
    top: 88%;
    border-radius: 8px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerTip = styled.View.attrs((length: number) => {
    length
})`
    width: ${({ length } : any ) => length > 50 ? '73' : '80'}%;
    align-self: center;
`;

export const TipText = styled.Text`
    color: #fff;
    text-align: center;
`;