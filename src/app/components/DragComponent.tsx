import * as React from 'react';
import '../../styles/style.css';

export default class DragComponent extends React.Component{
  drag = (e,name) => {
    e.dataTransfer.setData("name", e.target.id);
  }
  remove = (event) => {
    let buttonParentNode = event.target.parentNode.parentNode;
    let removeUser = event.target.parentNode;
    let remove = buttonParentNode.removeChild(removeUser);
    remove.classList.remove ("text");
    remove.classList.add("inner");
    let drag = document.getElementById('dragComponent');
    drag.insertBefore(drag.appendChild(remove), drag.childNodes[0]);
    remove.childNodes[1].setAttribute("style", "display:none")

  }
  render(){
    const {userList} = this.props
    console.log(userList);
    const users = userList.map((user) => <div className="inner" key={user.id} id={user.id} draggable="true" onDragStart={(event) =>this.drag(event,user.first_name)}>{user.first_name}<span onClick={this.remove} id={user.id} className="close">X</span></div>))
  return(
      <div className='userList' id='dragComponent'>
        <div>{users}</div>
      </div>
    )
  }
}
