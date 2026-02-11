import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
            <h2>404 | Your Page Not Found</h2>
            {/* <div className=''> */}
            <Link className='underline text-sky-700' href={"/"}>HOME</Link>
            {/* </div> */}
        </div>
    );
};

export default NotFound404;