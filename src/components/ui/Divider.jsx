import React from 'react';

const Divider = () => {
    return (
        <div className='flex items-center gap-3 my-4'>
            <div className="h-px flex-1 bg-border"></div>
            <div className="text-xs text-text-secondary">or</div>
            <div className="h-px flex-1 bg-border"></div>          
        </div>
    );
};

export default Divider;