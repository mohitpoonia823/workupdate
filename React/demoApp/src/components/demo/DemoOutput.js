import React from 'react'

const DemoOutput = props => {
  return (
    <p>
        {props.show ? 'Thia ia new' : ''}
    </p>
  )
}

export default React.memo(DemoOutput)