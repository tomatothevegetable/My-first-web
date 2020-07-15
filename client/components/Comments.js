import React from 'react';



class Comments extends React.Component{
    constructor(props){
        super(props);
        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    renderComment(comment,i){
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.
                        bind(null,this.props.match.params.postId,i)}>&times; </button>
                </p>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this);
        const {postId} = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId,author,comment);
        this.refs.commentForm.reset();
    }
    render(){
        return (
       <div className="comment">
           {this.props.postComments.map(this.renderComment)}
           <form ref="commentForm" className="comment-form" >
               <input type="text" ref="author" placeholder="author"/>
               <input type="text" ref="comment" placeholder="comment"/>
               <button  onClick={this.handleSubmit} hidden>submit</button>
           </form>
       </div>
        )
    }
}

export default Comments;