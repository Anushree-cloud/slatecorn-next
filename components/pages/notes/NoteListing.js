'use client'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, scaleNote } from '@/store/reducers/notes'
import './notelisting.css'
import NoteCard from '@/components/ui/notes/NoteCard'
import { colorPalette } from '@/constants/colorPalette'
import SlateHeader from './SlateHeader'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'

function NoteListing({ slateId }) {
	const notes = useSelector((state) => state.notes)
	const dispatch = useDispatch()
	const noteRef = useRef(null)

	// const [isDragging, setIsDragging] = React.useState({
	// 	0: false,
	// })

	const deleteCurrentNote = (id) => {
		dispatch(deleteNote({ id }))
	}

	const onScaling = (id) => {
		dispatch(scaleNote({ id, scale: true }))
	}

	const onScalingOff = (id) => {
		dispatch(scaleNote({ id, scale: false }))
	}

	// const onDragging = (id) => {
	// 	setIsDragging({ [id]: true })
	// }

	// const onMouseDown = (id) => {
	// 	onDragging({ [id]: true })
	// }

	// const onPositionChange = (id, x, y) => {
	// 	dispatch(dragNote({ id, x, y }))
	// }

	// const onMouseMove = (e) => {
	// if (isDragging[e.target.id]) {
	// 	console.log('55=>', 'onMouseMove', e.clientX, e.clientY)
	// }
	// onPositionChange(id, x, y)
	// }

	return (
		<div
			style={{
				border: '1px solid #fff',
				borderRadius: 10,
				padding: 10,
				margin: '20px 0px',
				height: 750,
				overflow: 'auto',
				boxShadow: `0px 0px 20px ${colorPalette.light}`,
			}}
		>
			<SlateHeader slateId={slateId} notes={notes} />

			{notes?.listing?.filter((noteItem) => noteItem?.slateId === slateId)
				?.length === 0 && (
				<FlexDiv
					customStyle={{ height: '80%', width: '100%' }}
					justifyContent="center"
				>
					<Typography
						variant="h4"
						style={{
							fontStyle: 'italic',
							color: colorPalette.light,
							opacity: 0.5,
						}}
					>
						Slate is empty!
					</Typography>
				</FlexDiv>
			)}

			<div
				style={{
					position: 'relative',
					height: 'auto',
					display: 'flex',
					gap: 10,
					flexWrap: 'wrap',
				}}
				// onMouseMove={onMouseMove}
			>
				{notes?.listing
					?.filter((noteItem) => noteItem?.slateId === slateId)
					?.map((noteItem) => (
						<NoteCard
							noteItem={noteItem}
							noteRef={noteRef}
							onScaling={onScaling}
							deleteCurrentNote={deleteCurrentNote}
							onScalingOff={onScalingOff}
						/>
					))}
			</div>
		</div>
	)
}

export default NoteListing
