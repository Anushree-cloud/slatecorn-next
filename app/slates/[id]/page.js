import React from 'react'
import Notes from '@/components/pages/notes'

function Slate({ params }) {
	return <Notes slateId={parseInt(params.id)} />
}

export default Slate
