const CommentList = ({comments, title, handleDelete}) => {
    return (
        <div className="comment-list">
            <h2>{title}</h2>
            {comments.map((comment) => (
                <div className="comment-preview" key={comment.id}>
                    <h2>{comment.title}</h2>
                    <p>Written by: {comment.author}</p>
                    <button onClick={() => handleDelete(comment.id)}>Delete Comment</button>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
