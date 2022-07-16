import React from 'react'
import {Link} from 'react-router-dom'

function Cards (props) {
    return (
        <div>
            <li className="card-item">
                <Link to= {props.path} state={{test: 'test'}} className="card-item-link" >
                    <figure className="card-item-pic">
                        <img src={props.src} alt="service1" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default Cards;