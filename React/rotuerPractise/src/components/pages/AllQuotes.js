import React from 'react'
import QuoteList from '../quotes/QuoteList.js'

const DUMMY_DATA = [
    {
        id:'q1',
        author:'Max',
        text:'Learning is fun'
    },
    {
        id:'q2',
        author:'Jhon',
        text:'Running is fun'
    },
    {
        id:'q3',
        author:'Clave',
        text:'Swimming is fun'
    }
]

const AllQuotes = () => {
  return (
   <QuoteList quotes={DUMMY_DATA}/>
  )
}

export default AllQuotes