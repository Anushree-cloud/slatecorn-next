import React from 'react'
import EditForm from '../../../components/pages/edit/EditForm'

function page({ params }) {
 
  return (
    <EditForm noteId={parseInt(params.id)} />
  )
}

export default page
