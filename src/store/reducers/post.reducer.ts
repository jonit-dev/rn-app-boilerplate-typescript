const INITIAL_STATE = {
  posts: []
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_READ:
      return { ...state, posts: action.payload };

    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter((post: any) => post._id !== action.payload)
      };

    case POST_UPDATE:
      const updatedPost = action.payload;

      const updatedPosts = state.posts.map((post: any) => {
        // find the post that we want to replace and replace it
        if (post._id === updatedPost._id) {
          return updatedPost;
        }
        return post;
      });

      // then update our state with our updated posts
      return { ...state, posts: updatedPosts };

    default:
      return state;
  }
};

export const POST_CREATE = "POST_CREATE";
export const POST_READ = "POST_READ";
export const POST_UPDATE = "POST_UPDATE";
export const POST_DELETE = "POST_DELETE";
