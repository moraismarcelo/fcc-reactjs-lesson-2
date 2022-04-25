import React from 'react';

function Buttom(props = {
    faClass: '',
    color: '',
    title: '',
    bgColor: ''

}) {
    return (
        <div>
            <button
                className='app--btn-links'
                style={{ backgroundColor: props.bgColor }}
            >
                <i className={props.faClass } ></i>
                <span className='app--button-text' style={{color: props.textColor}}>
                    {props.title}
                </span>
            </button>   
        </div>
    );
}

export default Buttom;