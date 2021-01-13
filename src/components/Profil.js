
import React from 'react';

class Profil extends React.Component{

    render(){
        return(
            <div>
                <h1>Prenom :  {this.props.prenom} </h1>
                <h2>Nom : {this.props.nom}  </h2>
                <p>Description :  {this.props.children}  </p>
            </div>
            
        )
    }
}

export default Profil;