"use client";

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Welcome to EXTEND FASHION',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                '',
                0,
                'Welcome to EXTEND FASHION',
                1000,
                // 'Welcome to EXTEND FASHION',
                // 1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export default ExampleComponent;