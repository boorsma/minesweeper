import React, { FC, useState } from 'react';
import { IconFlag, IconFlame, IconQuestionMark, TablerIconProps } from '@tabler/icons';

export const Mine = () => {
    
    const [ state, setState ] = useState<MineState>('idle');
    const Icon = selectIconByState(state);
    
    function onClick(event: React.MouseEvent) {
        
        event.preventDefault();
        
        if (event.button === 0) {
            setState('bomb');
        } else {
            setState('flag');
        }
    }
    
    return (
        <button
            className='aspect-w-1 aspect-h-1 rounded bg-white dark:bg-gray-600'
            onClick={ onClick }
            onContextMenu={ onClick }>
            <span className='flex items-center justify-center '>
                <Icon className='max-w-12 max-h-12' />
            </span>
        </button>
    );
};

const selectIconByState = (state: MineState): FC<TablerIconProps> => (
    {
        'idle': IconQuestionMark,
        'flag': IconFlag,
        'bomb': IconFlame,
    }[state]
);

type MineState = 'idle' | 'flag' | 'bomb';
type Props = {};
