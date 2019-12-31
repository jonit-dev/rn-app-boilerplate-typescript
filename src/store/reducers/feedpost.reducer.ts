const INITIAL_STATE = {
  feedPosts: []
};

export const feedPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDPOST_READ:
      return { ...state, feedPosts: action.payload };

    case FEEDPOST_UPDATE:
      const updatedPost = action.payload;

      const updatedFeedPosts = state.feedPosts.map((post: any) => {
        // find the post that we want to replace and replace it
        if (post._id === updatedPost._id) {
          return updatedPost;
        }
        return post;
      });

      // then update our state with our updated posts
      return { ...state, feedPosts: updatedFeedPosts };

    default:
      return state;
  }
};

export const FEEDPOST_CREATE = "FEEDPOST_CREATE";
export const FEEDPOST_READ = "FEEDPOST_READ";
export const FEEDPOST_UPDATE = "FEEDPOST_UPDATE";
export const FEEDPOST_DELETE = "FEEDPOST_DELETE";
