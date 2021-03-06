import React from 'react'
import QuoteForm from '../quotes/QuoteForm.js'
import { useHistory } from 'react-router-dom'

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    history.push('/quotes');
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote