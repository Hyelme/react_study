import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <Dialog 
        // title="Thanks" 
        title={<h1 style={{ color: 'purple'}}>Hello~!</h1>}
        description="It is honor to meet you!"
        button={<button style={{ backgroundColor: 'skyblue', color: 'black', border: '1px solid sk', borderRadius: '3'}}></button>}
    />
  )
}

