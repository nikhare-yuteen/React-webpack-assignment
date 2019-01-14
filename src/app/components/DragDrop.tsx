import * as React from 'react';
import DragComponent from './DragComponent';
import DropComponent from './DropComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import '../../styles/style.css';

export class DragDrop extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      usersData : [
                    {
                      "id": 1,
                      "first_name": "Cleavland",
                      "last_name": "Everington",
                      "email": "ceverington0@google.pl"
                      "status":0
                    },
                    {
                      "id": 2,
                      "first_name": "Cobbie",
                      "last_name": "Dukelow",
                      "email": "cdukelow1@nytimes.com"
                      "status":0
                    },
                    {
                      "id": 3,
                      "first_name": "Dawn",
                      "last_name": "Fearnyough",
                      "email": "dfearnyough2@vistaprint.com"
                      "status":0
                    },
                    {
                      "id": 4,
                      "first_name": "Rodge",
                      "last_name": "Billison",
                      "email": "rbillison3@jimdo.com"
                      "status":0
                    },
                    {
                      "id": 5,
                      "first_name": "Lombard",
                      "last_name": "Dorow",
                      "email": "ldorow4@tinypic.com"
                      "status":0
                    },
                    {
                      "id": 6,
                      "first_name": "Kendre",
                      "last_name": "Lavielle",
                      "email": "klavielle5@quantcast.com"
                      "status":0
                    },
                    {
                      "id": 7,
                      "first_name": "Fremont",
                      "last_name": "Castelletto",
                      "email": "fcastelletto6@wunderground.com"
                      "status":0
                    },
                    {
                      "id": 8,
                      "first_name": "Dareen",
                      "last_name": "Fagan",
                      "email": "dfagan7@imageshack.us"
                      "status":0
                    },
                    {
                      "id": 9,
                      "first_name": "Avictor",
                      "last_name": "Hame",
                      "email": "ahame8@cafepress.com"
                      "status":0
                    },
                    {
                      "id": 10,
                      "first_name": "Starlene",
                      "last_name": "Hick",
                      "email": "shick9@ezinearticles.com"
                      "status":0
                    }
                  ]
    }
  }
  render(){
    return(
      <div className="mainContainer">
        <DragComponent userList={this.state.usersData}/>
        <DropComponent userList={this.state.usersData}/>
      </div>
    )
  }
}
