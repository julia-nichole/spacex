import React from 'react';
/* Layout Components */
import Header from './Header';
import Footer from './Footer';
export default function Layout(props) {
    return (
        <div>
            <Header />
                <main>
                </main>
            <Footer />
        </div>
    );
};