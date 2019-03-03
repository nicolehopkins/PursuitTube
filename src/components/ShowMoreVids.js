import React, { Component } from 'react';


const showMore = props => {
    const clickHandler = e => {
        props.showMoreVideos();
    }


    return (
        <>
            <button className='show-more-button' onClick={clickHandler}>Show More</button>
        </>
    )
}


export default showMore;