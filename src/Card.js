import React from 'react';

class Card extends React.Component{
    render(){
 //       const{name,email}=props; - this will use when we use function
        return(
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${this.props.id}`} alt="Robots" height="250" width="250"/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p><b><em>{this.props.username}</em></b></p>
                </div>
            </div>
        )
    }
}

export default Card;