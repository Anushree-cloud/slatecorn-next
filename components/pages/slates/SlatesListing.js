'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorPalette } from '@/constants/colorPalette'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import {
	IconButton as MuiIconButton,
	Dialog,
	Typography,
	Backdrop,
	CircularProgress,
} from '@mui/material'
import addIcon from '@/assets/icons/addIcon.svg'
import IconButton from '@/shared/buttons/IconButton'
import closeIcon from '@/assets/icons/closeIcon.svg'
import FlexDiv from '@/shared/FlexDiv'
import FormField from '@/shared/textfields/formField'
import { addSlate, pinSlate } from '@/store/reducers/slates'
import { Form, Formik, useFormik } from 'formik'
import CardButton from '@/shared/buttons/CardButton'
import { useRouter } from 'next/navigation'
import infoIcon from '@/assets/icons/infoLightIcon.svg'
import moveIcon from '@/assets/icons/moveLight.svg'
import pinIcon from '@/assets/icons/addPinIcon.svg'
import pinnedIcon from '@/assets/icons/pinnedIcon.svg'
import NoteCard from '@/components/ui/notes/NoteCard'
import { shortenString } from '@/utils/stringFormatting'
import SlateAddDialog from '@/components/ui/slates/SlateAddDialog'
import addPinIcon from '@/assets/icons/addPinIcon.svg'

function SlateComponent({ slate, notes, onNavigateToSlate, onPinSlate }) {
	console.log('32=>',slate.pinned)
	return (
		<FlexDiv
			key={slate.id}
			customStyle={{
				border: '1px solid #fff',
				borderRadius: 10,
				padding: 10,
				margin: '20px 0px',
				height: 250,
				width: 400,
				overflow: 'hidden',
				boxShadow: `0px 0px 10px ${colorPalette.light}`,
			}}
		>
			<FlexDiv
				flexDirection="column"
				alignItems="flex-start"
				justifyContent="space-between"
				gap={5}
				customStyle={{
					width: '100%',
					height: '100%',
				}}
			>
				<FlexDiv
					justifyContent="space-between"
					customStyle={{ width: '100%' }}
				>
					<Typography style={{ color: colorPalette.light, fontStyle: 'italic', width: '50%' }}>{shortenString(slate.slateTitle, 30)}</Typography>
					<FlexDiv
						gap={10}
						alignItems="center"
						justifyContent="flex-end"
						customStyle={{ width: '100%' }}
					>
						<IconButton
							icon={slate.pinned ? pinnedIcon : addPinIcon}
							onClick={() => onPinSlate(slate.id, !slate.pinned)}
						/>
						<IconButton icon={infoIcon} />
						<IconButton
							icon={moveIcon}
							customStyle={{
								button: { cursor: 'grab' },
							}}
						/>
					</FlexDiv>
				</FlexDiv>

				<FlexDiv
					alignItems="flex-start"
					customStyle={{
						// border: '1px solid #fff',
						borderRadius: 10,
						padding: 10,
						height: '60%',
						overflow: 'hidden',
						width: '100%',
						// boxShadow: `0px 0px 20px ${colorPalette.light}`,
					}}
				>
					{notes?.listing?.filter(
						(noteItem) => noteItem?.slateId === slate.id
					)?.length === 0 && (
						<FlexDiv
							customStyle={{
								height: '80%',
								width: '100%',
							}}
							justifyContent="center"
						>
							<Typography
								variant="h6"
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
							transform: 'scale(0.2)',
						}}
					>
						{notes?.listing
							?.filter(
								(noteItem) => noteItem?.slateId === slate.id
							)
							?.map((noteItem) => (
								<NoteCard
									noteItem={noteItem}
									miniatureMode={true}
								/>
							))}
					</div>
				</FlexDiv>

				<FlexDiv customStyle={{ width: '100%' }}>
					<CardButton
						backgroundColor={colorPalette.highlight}
						onClick={() => onNavigateToSlate(slate.id)}
						name="Let's go!"
						width="100%"
					/>
				</FlexDiv>
			</FlexDiv>
		</FlexDiv>
	)
}

function SlatesListing() {
	const dispatch = useDispatch()
	const router = useRouter()
	const slates = useSelector((state) => state.slates)
	const notes = useSelector((state) => state.notes)

	const [slateAddDialogOpen, setSlateAddDialogOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleSubmit = (values) => {
		try {
			setLoading(true)
			dispatch(addSlate(values))
			setSlateAddDialogOpen(false)
		} catch (error) {
			alert('Something went wrong! Please try again!')
		} finally {
			setTimeout(() => setLoading(false), 1500)
		}
	}

	const onNavigateToSlate = (id) => router.push(`/slate/${id}`)

	const onPinSlate = (id, value) => {
		console.log('onPinSlate=>', id)
		dispatch(
			pinSlate({
				pinned: value,
				slateId: id,
			})
		)
	}

	return (
		<>
			<FlexDiv flexDirection="column" alignItems="flex-start">
				{slates.listing.filter((slate) => slate.pinned).length !== 0 && (
					<FlexDiv
						flexDirection="column"
						alignItems="flex-start"
						customStyle={{ width: '100%' }}
					>
						<Typography
							variant="subtitle2"
							style={{
								fontStyle: 'italic',
								width: '100%',
								borderBottom: `1px solid #000`,
							}}
						>
							Pinned Slates
						</Typography>

						<FlexDiv alignItems="center" gap={30} flexWrap="wrap">
							{slates.listing
								.filter((slate) => slate.pinned)
								.map((slate) => (
									<SlateComponent 
										slate={slate} 
										notes={notes} 
										onNavigateToSlate={onNavigateToSlate}
										onPinSlate={onPinSlate}
									/>
								))}
						</FlexDiv>

						<Typography
							variant="subtitle2"
							style={{
								fontStyle: 'italic',
								width: '100%',
								borderBottom: `1px solid #000`,
							}}
						>
							All Slates
						</Typography>
					</FlexDiv>
				)}

				<FlexDiv alignItems="center" gap={30} flexWrap="wrap">
					{slates.listing
						.filter((slate) => !slate.pinned)
						.map((slate) => (
							<SlateComponent 
								slate={slate} 
								notes={notes}
								onNavigateToSlate={onNavigateToSlate}
								onPinSlate={onPinSlate}
							/>
						))}
					<MuiIconButton
						onClick={() => setSlateAddDialogOpen(true)}
						style={{ borderRadius: 5 }}
					>
						<TextWithIcon icon={addIcon}>
							Add Slateboard
						</TextWithIcon>
					</MuiIconButton>

					<Backdrop
						open={loading}
						style={{ zIndex: 1300, color: '#fff' }}
					>
						<CircularProgress color="inherit" />
					</Backdrop>
				</FlexDiv>
			</FlexDiv>

			<SlateAddDialog
				open={slateAddDialogOpen}
				onClose={() => setSlateAddDialogOpen(false)}
				handleSubmit={handleSubmit}
			/>
		</>
	)
}

export default SlatesListing
