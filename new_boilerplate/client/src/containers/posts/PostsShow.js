import React, { Component } from 'react';
import { harmonyConnect } from '../../base/features/harmony-redux-react-connect';
import * as actions from '../../actions/posts/actions_posts';

import { Link } from 'react-router';
import { PORTAL } from '../../routes';

class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id);
    }

    render () {
        const { post } = this.props;
        if (!post) {
            return <div>{this.T('loading')}</div>
        }

        return (
            <div>
                <Link to={PORTAL}>{this.T('backToIndex')}</Link>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>
                    {this.T('deletePost')}
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

export default harmonyConnect(PostsShow,
    (state) => {
        return {
            post: state.posts.get('post')
        }
    },
    {
        initializePosts: actions.initializePosts,
        fetchPost: actions.fetchPost,
        deletePost: actions.deletePost
    }
);