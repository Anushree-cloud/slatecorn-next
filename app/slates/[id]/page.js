"use client"
import Notes from '@/components/pages/notes'
import { useParams } from 'next/navigation'

function Slate() {
	const params = useParams()
	return <Notes slateId={parseInt(params.id)} />
}

export default Slate
