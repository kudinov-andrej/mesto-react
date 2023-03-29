import React from 'react';


function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
      }
    
    return (
            <article className="photo-plase">
                <button type="button" className="photo-plase__delete-button"></button>
                <img className="photo-plase__image" src={props.link} alt={props.name} onClick={handleClick} />
                <div className="photo-plase__content">
                    <h2 className="photo-plase__name">{props.name}</h2>
                    <div className="photo-plase__like-conteiner">
                        <button type="button" className="photo-plase__hard"></button>
                        <div className="photo-plase__counter-like">{props.likes}</div>
                    </div>
                </div>
            </article>        
    );
}

export default Card;