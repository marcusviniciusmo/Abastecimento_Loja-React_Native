import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #0054A6;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin : auto 13px;
    align-items: center;
    padding: 5px;
`;

export const ButtonBack = styled.TouchableOpacity`
`;

export const TextHeaderView = styled.Text`
    font-size: 18px;
    color: #fff;
    text-align: center;
    flex: 1;
    padding: 10px;
`;