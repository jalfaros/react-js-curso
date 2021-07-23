import React from 'react'

export const JournalEntry = () => {
    return (
        <div className = "journal__entry pointer">
            <div 
                className = "journal__entry-picture"
                style = {{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/250000/velka/idk-idk-idk.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>

                <p className="journal__entry-content">
                    Enim sunt in laboris mollit id ut laboris consequat.
                </p>   
            </div>

            <div className="journal__entry-date-box">
                <span>Tuesday</span>
                <h4>22</h4>
            </div>

        </div>
    )
}
