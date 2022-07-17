import React from "react"
import data from "./data.js"
import Card  from "./Card.js"
import Header from "./Header.js"

export default function App(){
    return (
        <div>
            <Header/>
            <div className="cards">
                {data.map(el=><Card key={el.id} item={el}/>)}
            </div>
        </div>
    )
}