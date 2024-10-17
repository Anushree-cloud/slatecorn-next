'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, loadSlate, scaleNote } from '@/store/reducers/notes'
import './notelisting.css'
import NoteCard from '@/components/ui/notes/NoteCard'
import { colorPalette } from '@/constants/colorPalette'
import SlateHeader from './SlateHeader'
import FlexDiv from '@/shared/FlexDiv'
import { Skeleton, Typography } from '@mui/material'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import deleteNoteIcon from '@/assets/icons/deleteAllLightIcon.svg'
import SlateLoader from '@/shared/loaders/SlateLoader'
import SlateView from '../slates/SlateView'
import { editSlate } from '@/store/reducers/slates'
import useDebounce from '@/shared/hooks/useDebounce'
import { SLATE_VIEW } from '@/constants/slates'

function NoteListing({ slateId }) {
	const notes = useSelector((state) => state.notes)
	const slate = useSelector((state) => state.slates.listing.find((slate) => slate.id === slateId))
	const dispatch = useDispatch()
	const noteRef = useRef(null)
	const floatingDeleteNoteRef = useRef(null)
	const [currentId, setCurrentId] = useState(null)

	const [slateDescription, setSlateDescription] = useState(slate?.slateDescription)
    const debouncedDescription = useDebounce(slateDescription, 1500)
    
    const [isTypewriterEnabled, setIsTypewriterEnabled] = useState(true)

	const onEditSlate = (fieldName, value) => {
		dispatch(editSlate({ [fieldName]: value, id: slate?.id }))
	}

	useEffect(() => {
		onEditSlate('slateDescription', slateDescription)
	}, [debouncedDescription])

	const [view, setView] = useState(SLATE_VIEW.noteListing)

	const onSlateLoad = (loadState) => {
		dispatch(loadSlate({ id: slateId, loading: loadState }))
	}

	const deleteCurrentNote = (id) => {
		dispatch(deleteNote({ id }))
	}

	const onScaling = (id) => {
		dispatch(scaleNote({ id, scale: true }))
	}

	const onScalingOff = (id) => {
		dispatch(scaleNote({ id, scale: false }))
	}

	const onViewChange = (currentView) => {
		setView(currentView)
		onSlateLoad(true)
		setTimeout(() => {
			onSlateLoad(false)
		}, 3000)
	}

	useEffect(() => {
		onSlateLoad(true)
		setTimeout(() => {
			onSlateLoad(false)
		}, 1000)
	}, [
		view
	])

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
				position: 'relative'
			}}
		>
			{notes?.isLoading[slateId] ? 
				<Skeleton variant='rounded' height={30} style={{ width: '100%', background: 'rgba(240, 237, 229, 0.4)' }} />
				:
				<SlateHeader 
					slateId={slateId} 
					notes={notes} 
					onViewChange={onViewChange} 
					view={view}
				/>
			}

			{notes?.isLoading[slateId] && (
				<FlexDiv
					customStyle={{ height: '80%', width: '100%' }}
					justifyContent="center"
				>
					<SlateLoader loadingText={'Loading your notes...'} />
				</FlexDiv>
			)}


			{/* note listing view */}
			{(!notes?.isLoading[slateId] && (view === SLATE_VIEW.noteListing) && 
				(notes?.listing?.filter((noteItem) => noteItem?.slateId === slateId)
				?.length === 0) ? 
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
				:
				(<div
					style={{
						display: (view === SLATE_VIEW.noteListing) ? 'none' : 'block',
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
				</div>))
			}

			{/* slate details view */}
			{(view === SLATE_VIEW.slateView && !notes?.isLoading[slateId]) && (
				<SlateView 
					onViewChange={onViewChange} 
					slate={slate}
					setIsTypewriterEnabled={setIsTypewriterEnabled}
					isTypewriterEnabled={isTypewriterEnabled}
					slateDescription={slateDescription}
					setSlateDescription={setSlateDescription}
					onEditSlate={onEditSlate}
				/>
			)}

			<div
				id='floating-delete-note-button'
				ref={floatingDeleteNoteRef} 
				style={{
					position: 'absolute',
					bottom: 50,
					left: '47%',
					// zIndex: 1001
				}}
			>
				{currentId &&
					<FlexDiv
						// ref={floatingDeleteNoteRef}
						padding={20} 
						customStyle={{ 
							background: colorPalette.danger, 
							borderRadius: 12, 
							opacity: 0.5,
							zIndex: 1000
						}}
					>
						<TextWithIcon 
							customStyle={{ 
								text: { 
									color: colorPalette.light 
								}
							}} 
							icon={deleteNoteIcon}
						>
							Delete Note
						</TextWithIcon>
					</FlexDiv>
				}
			</div>
			
		</div>
	)
}

export default NoteListing
