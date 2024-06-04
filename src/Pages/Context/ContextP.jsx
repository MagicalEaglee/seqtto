import React from 'react'
import { useState } from 'react';
import ContextS from './ContextS'
function ContextP(props) {
    const [imageSrc, setImageSrc] = useState('');
  return (
    <ContextS.Provider value={{setImageSrc,imageSrc}}>
        {props.children}
    </ContextS.Provider>
  )
}

export default ContextP
