
import React from "react";
class Users extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Phone</th>
          </tr>
          
          {this.props.users.map(user => (
            <tr key={user.id}>
              <th>{`${user.f_name}`} </th>
              <th>{`${user.l_name}`} </th>
              <th>{`${user.phone}`} </th>  
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default Users;

