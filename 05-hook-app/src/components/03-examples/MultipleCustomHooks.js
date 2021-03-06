import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  // console.log(author, quote);

  return (
    <div>
      <h1>BreakingBad Quotes: </h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className="display-6"> {quote} </p>
            <footer className="blockquote-footer"> {author} </footer>
          </blockquote>
        </figure>
      )}

      <button
        className="btn btn-primary"
        disabled={loading}
        onClick={increment}
      >
        Next quote
      </button>
    </div>
  );
};
