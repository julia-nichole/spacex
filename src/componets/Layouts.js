import React from 'react';
import styled from 'styled-components';
/* Layout Components */
import Header from './Header';
import Footer from './Footer';
const StyledLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    main {
        flex-grow: 1;
    }
`;
export default function Layout(props) {
    return (
        <StyledLayout>
            <Header />
                <main>
                </main>
            <Footer />
        </StyledLayout>
    );
};