import React from 'react'
import './card.css'
export default function Card({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (

        <div>
            <div className='card' key={card.id}>
                <div className={flipped ? "flipped" : ""}>
                    <img className='front' src={card.src} alt="card front" />
                    <img
                        className='cover'
                        onClick={handleClick}
                        src="/img/cover.jpg"
                        alt="cover" />
                </div>
            </div>
        </div >
    )
}
