import React from 'react'
import { Tooltip, Typography } from '@mui/material'
import FlexDiv from '@/shared/FlexDiv'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import IconButton from '@/shared/buttons/IconButton'
import allLikesIcon from '@/assets/icons/allLikes.svg'
import addPinIcon from '@/assets/icons/addPinIcon.svg'
import menuIcon from '@/assets/icons/menuHorizontal.svg'
import addNotesIcon from '@/assets/icons/addLightIcon.svg'
import rearrangeIcon from '@/assets/icons/rearrangeLightIcon.svg'
import deleteAllIcon from '@/assets/icons/deleteAllLightIcon.svg'
import totalNotesIcon from '@/assets/icons/notesLightIcon.svg'
import pinnedIcon from '@/assets/icons/pinnedIcon.svg'
import nextIcon from '@/assets/icons/nextLightIcon.svg'
import prevIcon from '@/assets/icons/previousLightIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteAll, rearrange } from '@/store/reducers/notes'
import { colorPalette } from '@/constants/colorPalette'
import { emptyNote } from '@/constants/notes'
import { shortenString } from '@/utils/stringFormatting'
import { pinSlate } from '@/store/reducers/slates'
import { useRouter } from 'next/navigation'

function SlateHeader({ slateId, notes }) {
	const dispatch = useDispatch()
	const router = useRouter()

	const slates = useSelector((state) => state.slates)
	const slate = slates.listing.find((slate) => slate.id === slateId)

	const onRearrangeClick = () => {
		dispatch(rearrange({ slateId }))
	}

	const onAddClick = () => {
		if (
			notes.listing?.filter((noteItem) => noteItem?.slateId === slateId)
				?.length === 50
		) {
			alert(
				'Hey! 50 notes added already. Wanna add more? Then create a new slateboard!'
			)
			return
		}
		dispatch(addNote({ ...emptyNote, slateId }))
	}

	const onDeleteAllClick = () => {
		dispatch(deleteAll({ slateId }))
	}

	const onPinClick = () => {
		dispatch(pinSlate({ pinned: !slate.pinned, slateId }))
	}

	const onNavigating = (action) => {
		const currentSlateIndex = slates.listing.findIndex(
			(slateItem) => slateItem.id === slateId
		)
		
		if (
			(currentSlateIndex === slates.listing.length - 1 && action === 'next') ||
			(currentSlateIndex === 0 && action === 'prev')
		) return

		let param = ''

		if (action === 'next') {
			param = slates.listing[currentSlateIndex + 1].id
		} else if (action === 'prev') {
			param = slates.listing[currentSlateIndex - 1].id
		}

		router.push(`/slate/${param}`)
	}

	return (
		<FlexDiv
			padding={'5px 10px'}
			customStyle={{
				width: '100%',
				// backgroundColor: colorPalette.light,
				borderRadius: '5px',
				marginBottom: 10,
			}}
			justifyContent="space-between"
			alignItems="center"
		>
			<FlexDiv justifyContent='space-between' alignItems='center' gap={20} customStyle={{ width: '50%' }}>
				<FlexDiv gap={12} customStyle={{ width: '50%' }}>
					<Typography
						style={{
							fontWeight: 'bold',
							color: colorPalette.light,
							fontStyle: 'italic',
							maxWidth: '65%'
						}}
						variant="h5"
					>
						{shortenString(slate.slateTitle, 20)}
					</Typography>
					<FlexDiv gap={10} padding={'0px 5px'}>
						<Tooltip
							title={`${slate.tokens} loved your board!`}
							placement="bottom"
							arrow
						>
							<TextWithIcon
								icon={allLikesIcon}
								customStyle={{
									text: { color: colorPalette.light },
								}}
							>
								{slate.tokens}
							</TextWithIcon>
						</Tooltip>
						<Tooltip
							title={`${slate.tokens} loved your board!`}
							placement="bottom"
							arrow
						>
							<TextWithIcon
								icon={totalNotesIcon}
								customStyle={{
									text: { color: colorPalette.light },
								}}
							>
								{
									notes.listing?.filter(
										(noteItem) => noteItem?.slateId === slateId
									)?.length
								}
							</TextWithIcon>
						</Tooltip>
					</FlexDiv>
				</FlexDiv>

				<FlexDiv>
					<Tooltip title={`Add a note`} placement="bottom" arrow>
						<IconButton
							icon={prevIcon}
							onClick={() => onNavigating('prev')}
							customStyle={{
								icon: { width: 30, height: 30 },
							}}
						/>
					</Tooltip>
					<Tooltip title={`Add a note`} placement="bottom" arrow>
						<IconButton
							icon={nextIcon}
							onClick={() => onNavigating('next')}
							customStyle={{
								icon: { width: 30, height: 30 },
							}}
						/>
					</Tooltip>
				</FlexDiv>
			</FlexDiv>

			<FlexDiv>
				<Tooltip title={`Add a note`} placement="bottom" arrow>
					<IconButton icon={addNotesIcon} onClick={onAddClick} />
				</Tooltip>
				<Tooltip title={`Pin this slate?`} placement="bottom" arrow>
					<IconButton
						check={true}
						icon={slate.pinned ? pinnedIcon : addPinIcon}
						onClick={onPinClick}
					/>
				</Tooltip>
				<Tooltip title={`Rearrange notes`} placement="bottom" arrow>
					<IconButton
						icon={rearrangeIcon}
						onClick={onRearrangeClick}
					/>
				</Tooltip>
				<Tooltip title={`Delete all notes!`} placement="bottom" arrow>
					<IconButton
						icon={deleteAllIcon}
						onClick={onDeleteAllClick}
					/>
				</Tooltip>
				<IconButton icon={menuIcon} />
			</FlexDiv>
		</FlexDiv>
	)
}

export default SlateHeader
