// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

// add comment
export function addComment(post, author, comment) {
    return {
        type: 'ADD_COMMENT',
        post,
        author,
        comment
    };
}

// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    };
}