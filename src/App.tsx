import React from 'react';
import { Mine } from './features/Mine/Mine';

export const App = () => (
    <div className='w-screen h-screen bg-gray-100 dark:bg-gray-900 p-16'>
        <div className='container'>
            <div className='grid grid-cols-6 gap-10'>
                <Mine />
                <Mine />
                <Mine />
                <Mine />
                <Mine />
                <Mine />
                <Mine />
                <Mine />
            </div>
        </div>
    </div>
);
