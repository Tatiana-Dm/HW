import React from "react";
import {connect} from "react-redux";
import {getPosts} from "../actions/posts";


class Index extends React.Component {
    render() {
        const {isLoading, posts} = this.props;
        return (
            <>
                <button className='btn' onClick={() => this.props.getPosts()}>Posts</button>
                {
                    isLoading ? (
                        <h2>Loading...</h2>
                    ) : (
                        <ul>
                            {
                                posts.map((item) => (
                                    <li key={item.id}>
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>

                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    posts: state.posts
});

const mapDispatchToProps = {
    getPosts: getPosts
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Index);