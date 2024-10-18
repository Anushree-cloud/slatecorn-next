import React from 'react'
import SlateView from '@/components/pages/slates/SlateView'

function Slate({ params }) {
	return <SlateView slateId={parseInt(params.id)} />
}

export default Slate
