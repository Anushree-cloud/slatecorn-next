'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, Card } from '@mui/material'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import NoteView from '@/components/pages/notes/NoteView'
import Overlay from '@/shared/Overlay'
import useDebounce from '@/shared/hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { deleteNote, dragNote, rePosition } from '@/store/reducers/notes'
import IconButtonCustom from '@/shared/buttons/IconButton'
import moveIcon from '@/public/assets/icons/moveLight.svg'
import CardButton from '@/shared/buttons/CardButton'

const NoteCard = ({
	noteRef = null,
    floatingDeleteNoteRef = null,
	noteItem = {},
	onScaling = () => {},
	deleteCurrentNote = () => {},
	onScalingOff = () => {},
	miniatureMode = false, //view from slate listing
    setCurrentId = () => {},
    currentId = null
}) => {
	const dispatch = useDispatch()

    const [position, setPosition] = useState(noteItem.position)
	const [movePoint, setMovePoint] = useState({ x: noteItem.x, y: noteItem.y })
	const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
	const [isOverlapping, setIsOverlapping] = useState(false)
	const [isFloatingDelete, setIsFloatingDelete] = useState(false)

	const debouncedMovePoint = useDebounce(movePoint, 2500)
    // const debouncedPosition = useDebounce(position, 1000)

    const endDragAndDelete = () => {
        setIsDragging(false)
        setIsOverlapping(false)
        setIsFloatingDelete(false)
    }

	const onDragging = () => {
		setIsDragging(true)
	}

    const onOverlapping = () => {
		const noteRect = document.getElementById(`${noteItem.id}`)?.getBoundingClientRect()
		const floatingDeleteNoteRect = document.getElementById('floating-delete-note-button')?.getBoundingClientRect()
        
		const overlapping = 
			noteRect?.left < floatingDeleteNoteRect?.right && 
			noteRect?.right > floatingDeleteNoteRect?.left &&
			noteRect?.top < floatingDeleteNoteRect?.bottom &&
			noteRect?.bottom > floatingDeleteNoteRect?.top

		setIsOverlapping(overlapping)
	}

	const onMouseDown = (event) => {
		onDragging()
        dispatch(rePosition({ id: noteItem.id }))
		setOffset({
			x: event.clientX - movePoint.x,
			y: event.clientY - movePoint.y,
		})
	}

	const onMouseMove = (e) => {
		if (!isDragging) return
		setMovePoint({
			x: e.clientX - offset.x,
			y: e.clientY - offset.y,
		})
        
        onOverlapping()
	}

	const onMouseUp = () => {
        if(isOverlapping) {
            setIsFloatingDelete(true)
        }
		setIsDragging(false)
        setIsOverlapping(false)
	}

	const onMouseLeave = () => {
		endDragAndDelete()
	}

	useEffect(() => {
		dispatch(dragNote({ id: noteItem.id, x: movePoint.x, y: movePoint.y }))
	}, [debouncedMovePoint])

    useEffect(() => {
        if(isFloatingDelete){
            setTimeout(() => dispatch(deleteNote({ id: noteItem.id })), 500)
            // dispatch(deleteNote({ id: noteItem.id }))
            setIsFloatingDelete(false)
        }
        setIsDragging(false)
        setIsOverlapping(false)
    }, [isFloatingDelete])

    useEffect(() => {
        if (isDragging[noteItem.id]) {
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
            document.addEventListener('mouseleave', onMouseLeave)
        } else {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mouseleave', onMouseLeave)
        }
    
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
            document.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [isDragging[noteItem.id]])

    useEffect(() => {
        if(isOverlapping) {
            setCurrentId(noteItem.id)
        } else {
            setCurrentId(null)
        }
    }, [isOverlapping])

	return (
		<>
			{noteItem?.isScaling && !miniatureMode && <Overlay />}
			<Card
				// draggable={true}
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
				onMouseLeave={onMouseLeave}
				className="card"
				ref={noteRef}
				key={noteItem?.id}
				sx={{ maxWidth: 750, maxHeight: 550 }}
				id={noteItem.id}
				style={{
					position:
						noteItem?.isScaling && !miniatureMode
							? 'fixed'
							: noteItem.position,
					left:
						noteItem?.isScaling && !miniatureMode
							? '30%'
							: `${movePoint.x}px`,
					top:
						noteItem?.isScaling && !miniatureMode
							? '200px'
							: `${movePoint.y}px`,
					zIndex:
						noteItem?.isScaling && !miniatureMode ? '1000' : '1',
					height:
						noteItem?.isScaling && !miniatureMode
							? '550px'
							: '150px',
					width:
						noteItem?.isScaling && !miniatureMode
							? '750px'
							: '250px',
					boxShadow: `0px 0px 10px ${colorPalette.info}`,
					transition: 'width 0.5s ease, height 0.5s ease',
                    opacity: isOverlapping ? 0.5 : 1,
				}}
			>
				{noteItem?.isScaling && !miniatureMode ? (
					<NoteView
						noteItem={noteItem}
						deleteCurrentNote={deleteCurrentNote}
						onScalingOff={onScalingOff}
					/>
				) : (
					<FlexDiv
						flexDirection="column"
						justifyContent="flex-start"
						customStyle={{
							border: `1px solid ${colorPalette.dark}`,
							borderRadius: 5,
							width: '100%',
							height: '100%',
						}}
                        padding={10}
					>
						<FlexDiv
							justifyContent="center"
							customStyle={{ width: '100%' }}
						>
							<Typography
								className="card-title"
								gutterBottom
								sx={{
									color: colorPalette.light,
									fontSize: 14,
									marginBottom: 10,
								}}
							>
								{noteItem.title}
							</Typography>

							{/* <IconButtonCustom
								icon={moveIcon}
								// onMouseMove={onMouseMove}
								// onMouseDown={onMouseDown}
                                // onMouseUp={onMouseUp}
                                // onMouseLeave={onMouseLeave}
								customStyle={{ button: { cursor: 'grab' } }}
							/> */}
						</FlexDiv>

                        <FlexDiv flexWrap='wrap' gap={3} customStyle={{ width: '100%', opacity: 0.5 }}>
                            <Typography fontSize={8}>Content:</Typography>
                            <Typography fontStyle={'italic'} fontSize={8}>
                                Code Snippet, Code Editor, Video, Audio, Image, PDF, Text
                            </Typography>
                        </FlexDiv>

						<CardButton
							// className="card-description"
							onClick={() => {
								if (!noteItem?.isScaling && !miniatureMode)
									onScaling(noteItem.id)
							}}
                            name='Details'
                            customStyle={{ width: '100%' }}
						/>
					</FlexDiv>
				)}
			</Card>
		</>
	)
}

export default NoteCard
