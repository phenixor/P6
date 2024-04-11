import React from 'react';

function Tags({ tags }) {
    const renderTags = () => {
        return tags.map((tag, index) => <div key={index}>{tag}</div>);
    };

    return (
        <div>
            <div className="tags">
                {renderTags()}
            </div>
        </div>
    );
}

export default Tags;