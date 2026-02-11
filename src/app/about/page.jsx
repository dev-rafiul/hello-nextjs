import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>Welcome to About</Title>

            <nav>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/contact/teams'}>Team</Link>
            </nav>
        </div>
    );
};

export default About;