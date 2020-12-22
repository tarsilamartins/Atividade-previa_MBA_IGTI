import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './UsersList.css';

function UsersList({ users }) {
  return (
    <div>
      <ListGroup>
        {users.map((user) => {
          return (
            <ListGroup.Item id="mainList" key={user.email}>
              Nome: {user.name} | E-mail: {user.email}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default UsersList;
