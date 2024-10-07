"use client";
import React from 'react'
import { Box, Card } from '@mui/material'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import NoteView from '../../pages/home/notes/NoteView'
import Overlay from '@/shared/Overlay'

const NoteCard = ({
    noteRef,
    noteItem,
    noteItemIndex,
    onScaling,
    deleteCurrentNote,
    onScalingOff
}) => {
  return (
    <>
        {noteItem?.isScaling && <Overlay />}
        <Card
            draggable={true}
            // onMouseDown={(e) => onMouseDown(noteItem.id)}
            // onMouseLeave={(e) => console.log('53=>','onMouseLeave')}
            className="card"
            ref={noteRef}
            key={noteItemIndex}
            sx={{ maxWidth: 750, maxHeight: 550 }}
            onClick={() => {
                if(!noteItem?.isScaling) onScaling(noteItem.id)
            }}
            id={noteItem.id}
            style={{
                position: noteItem?.isScaling ? 'fixed' : noteItem.position,
                left: noteItem?.isScaling ? '30%' : noteItem.x,
                top: noteItem?.isScaling ? '200px' : noteItem.y,
                // transform: noteItem?.isScaling
                // 	? 'scale(3.5)'
                // 	: 'scale(1)',
                zIndex: noteItem?.isScaling ? '1000' : '1',
                height: noteItem?.isScaling ? '550px' : '150px',
                width: noteItem?.isScaling ? '750px' : '150px',
                boxShadow: `0px 0px 10px ${colorPalette.info}`,
                transition: 'width 0.5s ease, height 0.5s ease'
            }}
        >
            {noteItem?.isScaling ? 
                <NoteView noteItem={noteItem} deleteCurrentNote={deleteCurrentNote} onScalingOff={onScalingOff}/>
                :
                <FlexDiv flexDirection='column' customStyle={{ border: `1px solid ${colorPalette.dark}`, borderRadius: 5, width: '100%', height: '100%' }}>
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
                    <Typography className='card-description'>Click Me!</Typography>
                </FlexDiv>
            }
        </Card>
    </>
  )
}

export default NoteCard
