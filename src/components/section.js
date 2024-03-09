import React from 'react';

const Section = ({ color, children }) => {
    const sectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
    };

    return (
        <div style={sectionStyle}>
            {children}
        </div>
    );
}

export default Section;
