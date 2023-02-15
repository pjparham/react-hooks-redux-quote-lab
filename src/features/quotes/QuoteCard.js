import React from "react";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteCard({ quote }) {


  const dispatch = useDispatch()

  function handleRemoveClick(){
    dispatch(removeQuote(quote.id))
  }

  function handleUpvoteClick(){
    dispatch(upvoteQuote(quote.id))
  }
  function handleDownvoteClick(){
    dispatch(downvoteQuote(quote.id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button onClick={handleUpvoteClick}type="button" className="btn btn-primary">
              Upvote
            </button>
            <button onClick={handleDownvoteClick} type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button onClick={handleRemoveClick} type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
