import React from 'react';
import './VideoCardStyle.css'; // Importing the CSS file for styling

const VideoCard = ( { title, thumbnail, views, timestamp, channelName, channelImage } ) =>
{
    return (
        <div className="video-card">
            <img src={thumbnail} alt={title} className="video-thumbnail" />
            <div className="video-info">
                <img src={channelImage} alt={channelName} className="channel-image" />
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channelName}</p>
                    <p>
                        {views} views • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
