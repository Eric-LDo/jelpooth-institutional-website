'use client'
import { useState, useRef } from 'react';
import { Tool } from '@/app/data/ToolsItem';

const Tools = ({ id, image, name, url }: Tool) => {
    const [scale, setScale] = useState(1);
    const toolRef = useRef<HTMLDivElement>(null);
    
    

    return (
        <div            
            className="flex flex-col justify-center items-center bg-gray-950 rounded-2xl m-2 min-w-40 p-3"
            key={id}
            style={{ transform: `scale(${scale})` }}
        >
            <img
                src={url}
                alt={image}
                className='h-10 w-10 rounded-full'
            />
            <h3 className='text-2xl'>{name}</h3>
        </div>
    );
};

export default Tools;