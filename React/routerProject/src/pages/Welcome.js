import React from 'react'
import { Route } from 'react-router-dom'

const Welcome = () => {
  return (
<section>
<h1>Welcome page</h1>
<Route path='/welcome/new-user'>
  <h1>welcome new user</h1>
</Route>
</section>
    )
}

export default Welcome