import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className="card">
            <img src={`https://robohash.org/"${id}?size=200x200`} alt="robot" />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;