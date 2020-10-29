import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
/* Layout Components */
import Header from './Header';
import Footer from './Footer';
/* Page Level Components */
import Home from '../pages/home';
import Login from  '../pages/login';
import Launches from '../pages/launches';
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
                    <Switch>
                        <Route exact path="/" render={props => 
                            <Home {...props} />
                        } />
                        <Route exact path="/launches" render={props => 
                            <Launches {...props} />
                        } />
                        <Route exact path="/login" render={props => 
                            <Login {...props} />
                        } />
                    </Switch>
                </main>
            <Footer />
        </StyledLayout>
    );
};
