import { faCashRegister, faGifts, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card  = () => {

    const cards = [
        {title: "Elige como pagar.", icon: faCashRegister, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, optio. At, dolorum officia incidunt'},
        {title: "Envios Gratis desde $ 5000.", icon: faGifts, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum sed magnam voluptas placeat,' }, 
        {title: "Seguridad desde principio a fin.", icon: faHeartbeat, description: ' sapiente dolor pariatur quo aut veritatis dolore fuga ipsum voluptatem mollitia.'}]

    return (
    <>
        
        {cards.map((card) => (
          <> 
<div className="col-lg-3 p-3">
              <FontAwesomeIcon key={card.title} icon={card.icon} size="3x" />
            <h3 className="text-center">{card.title}</h3>
            <p className="text-center">{card.description}</p>
            
          </div>  
</> 
        ))}
        
        </>
        )

}

export default Card;