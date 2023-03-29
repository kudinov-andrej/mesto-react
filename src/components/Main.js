import  { useEffect, useState } from 'react'; 
import api from "../utils/api.js"
import Card from "../components/Card.js"

function Main(props) {

  const [userName, setUserName] = useState("")
  const [userDescription, setUserescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setcards] = useState([])

  useEffect(() => {
    Promise.all([api.getCards(), api.getCurrentUser()]).then(([cards, userData]) => {
      setcards(cards)
      setUserName(userData.name)
      setUserescription(userData.about)
      setUserAvatar(userData.avatar)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

    return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <button type="button" className="profile__button" onClick={props.onEditAvatar}>
            <div className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }}  ></div>
          </button>
          <div className="profile__content">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="plase">
        {cards.map((card) => (         
          <Card
            key={card._id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            />
            
        ))}
    
      </section>
    </main>
  );
}

export default Main;