import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/users';
import { Route } from 'react-router-dom';
import AllUserByAdminForm from './AllUserByAdminForm';

class AllUsersAdminView extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props;
    return (
        <div>
            <div>
            <Route path="/users" component={AllUserByAdminForm} />
            </div>
            <h1>Our Beloved Users:</h1> 
            <div>
            {users.length < 1 ? (
                <h1>There are no Users to display :(</h1>
            ) : (
                users.map((user) => (
                <div className="single-product-border" key={user.id}>
                    {/* <Link to={`/users/${product.id}`}> */}
                    <h2>isAdmin: {user.isAdmin.toString()}</h2>
                    <h2>username: {user.username}</h2>
                    <h2>fullName: {user.fullName}</h2>
                    <h2>email: {user.email}</h2>
                    <h2>address: {user.address}</h2>
                    <h2>dob: {user.dob}</h2>
                    {/* </Link> */}
                </div>
                ))
            )}
            </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(fetchUsers());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllUsersAdminView);
