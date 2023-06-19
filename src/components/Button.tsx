import React from 'react'

type HandleProps= {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: HandleProps) => {
  return (
    <button onClick={(event)=>{
        props.handleclick(event, 1)
    }} >Button</button>
  )
}

export default Button