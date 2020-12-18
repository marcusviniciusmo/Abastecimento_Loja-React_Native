import React from 'react';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

export interface loadingProps {
    isLoading: boolean;
    children: any;
};

const Loading = ({ isLoading, children }: loadingProps) => {
    return isLoading ? (
        <Container>
            <ActivityIndicator
                size="large"
                color="0000ff"
            />
        </Container>
    ) : (
            <>{children}</>
        );
};

export default Loading;