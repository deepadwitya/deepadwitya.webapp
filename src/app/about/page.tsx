import React from 'react';

import { TextAnimate } from '@/components/bgComponents/text-animate';
import FeatureSection from '@/components/features';

function About() {
    return (
        <div className='flex h-auto min-h-screen flex-col items-center justify-center p-12'>
            <h1 className='text-2xl font-bold'></h1>
            <TextAnimate className='text-2xl font-bold' by='word' animation={'slideUp'}>
                A motivated cybersecurity enthusiast with a skill set in Python, ELK Stack and Burp Suite looking for my
                first cyber defense role. I am keen to learn and develop, passionate about detecting vulnerabilities and
                strengthening security protocols and willing to contribute to a dynamic team in the field of
                cybersecurity.
            </TextAnimate>
            <FeatureSection />
        </div>
    );
}

export default About;
