import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactFeed from './ContactFeed';

class ContactLists extends Component {
    render(){
        const { posts } = this.props.posts;
        return (
          <div className="feed">
            <div className="container">
              <h2 className="form_title"> Contact Lists</h2>
              <div className="row">
                <div className="col-md-12">
                  { !posts.length ? <div className="center_text">No data available.</div> : <ContactFeed posts={posts} /> }
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
	posts: state.posts
})

export default connect(mapStateToProps)(ContactLists);