import React from 'react';
import Card from './Card';
import Robots from  './Robots';


/*class CardList extends React.Component{
    render(Robots){
        const CardArray=Robots.map((user,i)=>{
            return <Card key={Robots[i].id} id={Robots[i].id} name={Robots[i].name} username={Robots[i].username}/>
        })
        return(
            <div>
            {CardArray}
            </div>
        );
     }
}*/

const CardList = ({Robots}) => {
    return(
        <div>
            {
            Robots.map((user,i)=>{
            return(
            <Card 
                key={Robots[i].id} 
                id={Robots[i].id} 
                name={Robots[i].name} 
                username={Robots[i].username}
                />
            );
        })
        } 
        </div>
    )
}

export default CardList;

