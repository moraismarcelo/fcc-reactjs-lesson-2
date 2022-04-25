import React from 'react';

function MainContent(props = {
    title: 'string',
    content: 'string',
}) {
    return (
        <div className='app--main-content'>
            <h4>{props.title} </h4>
            <p>{props.content }</p>
        </div>
    );
}

export default MainContent;