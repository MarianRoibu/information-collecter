// HomePage.js
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faThumbsUp, faComment, faShare, faMusic, faBook, faCamera, faGamepad } from '@fortawesome/free-solid-svg-icons';
import './HomePageStyle.css';

// Array of icons for variety
const iconOptions = [faVideo, faThumbsUp, faComment, faShare, faMusic, faBook, faCamera, faGamepad];

const HomePage = () =>
{
    const gridRef = useRef( null );
    const [rows, setRows] = useState( [] );

    useEffect( () =>
    {
        generateRows( 300 ); // Generate 30 random icon rows initially
    }, [] );

    useEffect( () =>
    {
        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    entry.target.style.animation = entry.isIntersecting ? 'slideIn 0.5s forwards ease-in-out' : 'slideOut 0.5s forwards ease-in-out';
                } );
            },
            {
                threshold: 0.1,
            }
        );

        const items = gridRef.current.querySelectorAll( '.icon-row' );
        items.forEach( item => observer.observe( item ) );

        return () => items.forEach( item => observer.unobserve( item ) );
    }, [rows] );

    const generateRows = ( numberOfRows ) =>
    {
        const newRows = Array.from( { length: numberOfRows }, () =>
        {
            // Get a random icon from the iconOptions array
            const randomIcon = iconOptions[Math.floor( Math.random() * iconOptions.length )];
            return randomIcon;
        } );
        setRows( newRows );
    };

    return (
        <div className="home-page" ref={gridRef}>
            {rows.map( ( icon, index ) => (
                <div className="icon-row" key={index}>
                    <FontAwesomeIcon icon={icon} className="icon" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
            ) )}
        </div>
    );
};

export default HomePage;
