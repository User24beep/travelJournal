import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl}/>
            <div className="card-flex">
                <div>
                    <p className="location">📌{props.item.location}</p>
                    <a className="link" href={props.item.googleMapsUrl}>View on Google maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="time">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}