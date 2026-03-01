'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, loadSlate, scaleNote } from '@/store/reducers/notes'
import './notelisting.css'
import NoteCard from '@/components/ui/notes/NoteCard'
import { colorPalette } from '@/constants/colorPalette'
import SlateHeader from '../slates/SlateHeader'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import { editSlate } from '@/store/reducers/slates'
import useDebounce from '@/shared/hooks/useDebounce'
import { SLATE_VIEW } from '@/constants/slates'

function NoteListing({
	slateId,
	notes,
	noteRef,
	onScaling,
	onScalingOff,
	deleteCurrentNote,
	floatingDeleteNoteRef,
	setCurrentId,
	currentId,
	view
}) {
	return notes?.listing?.filter((noteItem) => noteItem?.slateId === slateId)
		?.length === 0 ? (
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
	) : (
		<div
			style={{
				display: view === SLATE_VIEW.noteListing ? 'none' : 'block',
				position: 'relative',
				height: 'auto',
				display: 'flex',
				gap: 10,
				flexWrap: 'wrap',
			}}
		>
			{notes?.listing
				?.filter((noteItem) => noteItem?.slateId === slateId)
				?.map((noteItem) => (
					<NoteCard
						key={noteItem.id}
						noteItem={noteItem}
						noteRef={noteRef}
						onScaling={onScaling}
						deleteCurrentNote={deleteCurrentNote}
						onScalingOff={onScalingOff}
						floatingDeleteNoteRef={floatingDeleteNoteRef}
						setCurrentId={setCurrentId}
						currentId={currentId}
					/>
				))}
		</div>
	)
}

export default NoteListing
