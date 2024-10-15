import React from 'react'
import { Card, Typography } from '@mui/material'
import Link from 'next/link'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'
import CardButton from '@/shared/buttons/CardButton'
import moment from 'moment'

function NoteView({ noteItem, deleteCurrentNote, onScalingOff }) {
	return (
		<FlexDiv
			flexDirection="column"
			justifyContent="space-between"
			alignItems="flex-start"
			customStyle={{
				height: '100%',
				width: '100%',
				border: `1px solid ${colorPalette.info}`,
				borderRadius: 5,
			}}
			padding={10}
		>
			<FlexDiv
				flexDirection="column"
				alignItems="flex-start"
				customStyle={{ width: '100%' }}
				gap={0}
			>
				<FlexDiv
					justifyContent="space-between"
					customStyle={{ width: '100%', padding: 0 }}
				>
					<Typography
						className="card-title"
						gutterBottom
						sx={{
							color: colorPalette.light,
							fontSize: '30px !important',
							marginBottom: 10,
						}}
					>
						{noteItem.title}
					</Typography>

					<FlexDiv customStyle={{ padding: 0 }}>
						<CardButton
							name="D"
							onClick={() => deleteCurrentNote(noteItem.id)}
							backgroundColor={colorPalette.danger}
						/>
						<CardButton
							onClick={() => onScalingOff(noteItem?.id)}
							name="C"
						/>
					</FlexDiv>
				</FlexDiv>

				<Typography className="card-description" variant="body2">
					{moment(noteItem.createdAt)?.format('DD MMMM YYYY, h:mmA')}
				</Typography>
			</FlexDiv>

			<FlexDiv
				flexDirection="column"
				justifyContent="space-between"
				alignItems="flex-start"
				customStyle={{ width: '100%', height: '100%', border: `1px solid ${colorPalette.info}`, borderRadius: 5, }}
                padding={10}
			>
				<Typography className="card-description" variant="body2">
					{noteItem.description}
				</Typography>
				<Link
					href={`/edit/${noteItem.id}`}
					passHref
					style={{ width: '100%' }}
				>
					<CardButton
						name="Edit"
						backgroundColor={'#657a3f'}
						width="100%"
					/>
				</Link>
			</FlexDiv>
		</FlexDiv>
	)
}

export default NoteView
