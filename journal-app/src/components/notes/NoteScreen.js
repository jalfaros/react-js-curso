import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (

        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    className="notes__title-input"
                    type = "text"
                    placeholder = "An awesome title :D"
                />

                <textarea 
                    className="notes__textarea"
                    placeholder = "What happened today?"
                ></textarea>
                

                <div className="notes__image">
                    <img 
                        src = "https://i.pinimg.com/originals/8a/68/10/8a6810b0d7a2d8f00c80fd8a11fc3016.jpg"
                        alt = "image"
                    />
                </div>

            </div>


        </div>
    )
}
