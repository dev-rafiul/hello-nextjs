import Title from '@/components/Title';
import React from 'react';
// import page from './../../../../../../login/page';

const TutorialPage = async({params}) => {
    // const {technology, topic, page_no, subject} = await params
    const {slug} = await params
    const [technology, topic, page_no, subject] = slug || []
    
    return (
        <div>
            This is Tutorials Page
            <Title>{technology} Tutorials</Title>
            <h2>{topic}</h2>
            <hr />
            <div className='flex justify-between'>
                <h3 className='font-bold'>{subject}</h3>
                <p>Page no: {page_no}</p>
            </div>
        </div>
    );
};

export default TutorialPage;