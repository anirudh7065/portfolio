'use client'
import { useState } from 'react';
import Loader from './Loader';
import Image from 'next/image';

const Certificate = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <div >
            { !loaded ? <Loader /> : null }
            <Image
                src={ src }
                alt={ alt }
                onLoad={ handleImageLoad }
                width={ 800 }
                height={ 1200 }
                priority={ true }
                className={`my-4 border-2 md:border-4 border-purple-500 ${ loaded ? 'opacity-100' : 'opacity-0' }`}
            />
        </div>
    );
};

export default Certificate;
