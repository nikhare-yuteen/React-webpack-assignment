import * as React from 'react';

export default class DropComponent extends React.Component{
  

  allowDrop = (event) => {
    event.preventDefault();
  }

  drop =(e) => {
    if (e.target.hasChildNodes()) {
      return false;
    }
    else{
      let data = e.dataTransfer.getData("name");
      document.getElementById(data).classList.remove ("inner");
      document.getElementById(data).classList.add("text");
      e.target.appendChild(document.getElementById(data));
      let removeBtn = e.target.childNodes[0].childNodes[1];
      removeBtn.setAttribute('style','display:block')

    }
  }

  render(){
    const {userList} = this.props
    const droppable = userList.map((user) => <div className='drag' key={user.id} onDragOver={(event) => this.allowDrop(event)} onDrop={(event) => this.drop(event)} id={user.id}></div>))
    return(
      <div>
        {droppable}
      </div>
    )
  }



}
