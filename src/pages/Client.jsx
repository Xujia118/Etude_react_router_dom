import React from 'react'
import { useParams } from 'react-router-dom'

function Client() {
    const { clientId } = useParams();

  return (
    <div>Client: {clientId}</div>
  )
}

export default Client