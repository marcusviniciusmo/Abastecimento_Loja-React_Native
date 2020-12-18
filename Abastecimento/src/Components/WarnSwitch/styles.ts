import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
    left: -5px;
`;

export const TextWarn = styled.Text.attrs((on: boolean) => { })`
    color: #A5A5A5;
    font-size: 15px;
    font-weight: ${({ on }: any) => on ? 'bold' : 'normal'};
    margin-left: ${({ on }: any) => on ? '15px' : 0};
`;