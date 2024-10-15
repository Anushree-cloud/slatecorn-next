import React from 'react'
import NoteListing from '@/components/pages/notes/NoteListing'  

function Slate({ params }) {
	return <NoteListing slateId={parseInt(params.id)} />
}

export default Slate
