import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const styledH1 = styled.h1`
    color: rebeccapurple;
`;

export default () => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <styledH1>{title}</styledH1>
            <p>{description}</p>
        </>
    );
};