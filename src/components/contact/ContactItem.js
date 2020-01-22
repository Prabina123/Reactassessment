import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
 
  render() {
    const { post } = this.props;
    console.log(post);

    return (
        <div>
            <table border="1" cellPadding="0" cellSpacing="0" >
                <tbody>
                    <tr>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td>{post.address}</td>
                        <td>{post.gender}</td>
                        <td>{post.phone}</td>
                        <td>{post.nationality}</td>
                        <td>{post.educationBackground}</td>
                        <td>{post.modeOfContact}</td>
                    </tr>
                </tbody>
        </table>
      </div>
    );
  }
}


ContactItem.propTypes = {
  post: PropTypes.object.isRequired,
};


export default ContactItem;
