import React, { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../comments/Comments.js";
import HighlightedQuote from "../quotes/HighlightedQuote.js";
import NoQuotesFound from "../quotes/NoQuotesFound.js";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Max",
    text: "Learning is fun",
  },
  {
    id: "q2",
    author: "Jhon",
    text: "Running is fun",
  },
  {
    id: "q3",
    author: "Clave",
    text: "Swimming is fun",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <h1>Quote not found</h1>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
