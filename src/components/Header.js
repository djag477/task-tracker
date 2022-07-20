import React from 'react'
import Button from './Button'

const Header = ({title="Task tracker", toggleShow, showAddTask}) => {
  return (
    <header className='header'>
        <h1>
        {title}
        </h1>
        <Button 
            color={showAddTask ? "red" : "purple"}
            text={showAddTask ? "Close add task bar" : "Show add task bar"}
            toggleShow={toggleShow}
        />
        </header>
  )
}

export default Header