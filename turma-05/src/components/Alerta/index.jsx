import React from 'react'
import './styles.css'

function Alerta({ children }) {
  return (
    <div className="alerta">
      {children}
    </div>
  )
}

export default Alerta