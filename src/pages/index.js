import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Layout } from '../components/Layout';

export default () => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Layout />
        </>
    );
};