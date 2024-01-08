import React from 'react'
import withLoading from './withLoading'

function Input() {  
    return <input type='text'/>
}

export default withLoading(Input);
