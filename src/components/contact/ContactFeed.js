import React, { Component } from 'react';
import {uid} from 'react-uid';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <ContactItem key={uid(post)} post={post} />);
  }
}

ContactFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default ContactFeed;
