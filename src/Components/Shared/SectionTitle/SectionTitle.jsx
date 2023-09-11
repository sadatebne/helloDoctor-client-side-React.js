import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div>
            <div className="w-1/3 text-center mx-auto my-4 mt-16">
                <h3 className="text-4xl font-semibold uppercase border-b-4 py-4 border-green-500">{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;