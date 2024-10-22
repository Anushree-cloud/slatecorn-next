import React, { use, useEffect, useState } from 'react'
import { MenuItem, Popover, Tooltip, Typography } from '@mui/material'
import FlexDiv from '@/shared/FlexDiv'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import IconButton from '@/shared/buttons/IconButton'
import allLikesIcon from '@/public/assets/icons/allLikes.svg'
import addPinIcon from '@/public/assets/icons/addPinIcon.svg'
import menuIcon from '@/public/assets/icons/menuHorizontal.svg'
import addNotesIcon from '@/public/assets/icons/addLightIcon.svg'
import rearrangeIcon from '@/public/assets/icons/rearrangeLightIcon.svg'
import deleteAllIcon from '@/public/assets/icons/deleteAllLightIcon.svg'
import totalNotesIcon from '@/public/assets/icons/notesLightIcon.svg'
import pinnedIcon from '@/public/assets/icons/pinnedIcon.svg'
import nextIcon from '@/public/assets/icons/nextLightIcon.svg'
import prevIcon from '@/public/assets/icons/previousLightIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteAll, rearrange, reAssignMovingPoints } from '@/store/reducers/notes'
import { colorPalette } from '@/constants/colorPalette'
import { emptyNote } from '@/constants/notes'
import { shortenString } from '@/utils/stringFormatting'
import { deleteSlate, pinSlate } from '@/store/reducers/slates'
import { useRouter } from 'next/navigation'
import { SLATE_VIEW } from '@/constants/slates'
import listIcon from '@/public/assets/icons/listIcon.svg'
import deleteIcon from '@/public/assets/icons/deleteIcon.svg'
import BasicAlert from '@/shared/alerts/BasicAlert'
import CardButton from '@/shared/buttons/CardButton'
import { ROUTES } from '@/constants/routes'

function SlateHeader({ slateId, notes, onViewChange, view }) {
	const dispatch = useDispatch()
	const router = useRouter()

	const slates = useSelector((state) => state.slates)
	const slate = slates.listing.find((slate) => slate?.id === slateId)
	const slateIndex = slates.listing.findIndex((slate) => slate?.id === slateId)

	const [slateMenu, setSlateMenu] = useState(null)

	const [alertsOpen, setAlertsOpen] = useState({
		deleteAllNotes: false,
		deleteSlate: false
	})

	const [loading, setLoading] = useState(false)

	const deleteSlatePopoverOpen = (openValue) => {
		setAlertsOpen({ ...alertsOpen, deleteSlate: openValue })
	}

	const deleteAllNotesPopoverOpen = (openValue) => {
		setAlertsOpen({ ...alertsOpen, deleteAllNotes: openValue })
	}

	const onRearrangeClick = () => {
		dispatch(rearrange({ slateId, notes: notes.listing }))
		// setTimeout(() => dispatch(reAssignMovingPoints({ notes: notes.listing })), 5000)
	}

	const onAddClick = () => {
		if (notes.listing?.filter((noteItem) => noteItem?.slateId === slateId)?.length === 20) {
			alert('Hey! 20 notes added already. Wanna add more? Then create a new slateboard!')
			return
		}
		dispatch(addNote({ ...emptyNote, slateId }))
	}

	const onDeleteAllClick = () => {	
		try {
			setLoading(true)
			dispatch(deleteAll({ slateId }))
		} catch (error) {
			alert('Something went wrong! Please try again!')
		} finally {	
			setLoading(false)
		}
	}

	const onPinClick = () => {
		dispatch(pinSlate({ pinned: !slate?.pinned, slateId }))
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

		router.push(ROUTES.SLATE_ROUTES.view.replace(':slateId', param))
	}

	const onDeleteSlate = () => {
		try {
			setLoading(true)
			setSlateMenu(null)
			dispatch(deleteSlate({ id: slateId }))
			dispatch(deleteAll({ slateId }))
		} catch (error) {
			alert('Something went wrong! Please try again!')
		} finally {
			router.push(ROUTES.SLATE_ROUTES.listing)
			setLoading(false)
		}
	}

	const isDisabled = {
		next: slateIndex === (slates.listing.length - 1),
		prev: slateIndex === 0,
		add: view === SLATE_VIEW.slateView || notes.listing.length === 20,
		delete: view === SLATE_VIEW.slateView || notes.listing.length === 0,
		rearrange: view === SLATE_VIEW.slateView || notes.listing.length === 0 || notes.isRearrange[slateId]
	}

	return (
		<FlexDiv
			padding={'5px 10px'}
			customStyle={{
				width: '100%',
				borderRadius: '5px',
				marginBottom: 10,
			}}
			justifyContent="space-between"
			alignItems="center"
		>
			<FlexDiv justifyContent='space-between' alignItems='center' gap={20} customStyle={{ width: '53%' }}>
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
						{shortenString(slate?.slateTitle, 20)}
					</Typography>
					<FlexDiv gap={10} padding={'0px 5px'}>
						<Tooltip
							title={`${slate?.tokens?.length} loved your board!`}
							placement="bottom"
							arrow
						>
							<span>
								<TextWithIcon
									icon={allLikesIcon}
									customStyle={{
										text: { color: colorPalette.light },
									}}
								>
									{slate?.tokens?.length}
								</TextWithIcon>
							</span>
						</Tooltip>
						<Tooltip
							title={`${slate?.tokens} loved your board!`}
							placement="bottom"
							arrow
						>
							<span>
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
							</span>
						</Tooltip>
					</FlexDiv>
				</FlexDiv>

				<FlexDiv>
					<Tooltip title={`Add a note`} placement="bottom" arrow>
						<span>
							<IconButton
								icon={prevIcon}
								onClick={() => onNavigating('prev')}
								disabled={isDisabled.prev}
								customStyle={{
									icon: { width: 30, height: 30 },
									button: {
										boxShadow: `0px 0px 5px ${colorPalette.light}`,
										opacity: isDisabled.prev ? 0.2 : 1,
										padding: 3,
									}
								}}
							/>
						</span>
					</Tooltip>
					<Tooltip title={`Add a note`} placement="bottom" arrow>
						<span>
							<IconButton
								icon={nextIcon}
								onClick={() => onNavigating('next')}
								disabled={isDisabled.next}
								customStyle={{
									icon: { width: 30, height: 30 },
									button: {
										boxShadow: `0px 0px 5px ${colorPalette.light}`,
										opacity: isDisabled.next ? 0.2 : 1,
										padding: 3,
									}
								}}
							/>
						</span>
					</Tooltip>
				</FlexDiv>
			</FlexDiv>

			<FlexDiv>
				<Tooltip title={`Add a note`} placement="bottom" arrow>
					<span>
						<IconButton 
							icon={addNotesIcon} 
							onClick={onAddClick} 
							disabled={isDisabled.add}
							customStyle={{
								button: {
									opacity: isDisabled.add ? 0.2 : 1
								}
							}}
						/>
					</span>
				</Tooltip>
				<Tooltip title={`Pin this slate?`} placement="bottom" arrow>
					<span>
						<IconButton
							icon={slate?.pinned ? pinnedIcon : addPinIcon}
							onClick={onPinClick}
						/>
					</span>
				</Tooltip>
				<Tooltip title={`Rearrange notes`} placement="bottom" arrow>
					<span>
						<IconButton
							icon={rearrangeIcon}
							onClick={onRearrangeClick}
							disabled={isDisabled.rearrange}
							customStyle={{
								button: {
									opacity: isDisabled.rearrange ? 0.2 : 1
								}
							}}
						/>
					</span>
				</Tooltip>
				<Tooltip title={`Delete all notes!`} placement="bottom" arrow>
					<span>
						<IconButton
							icon={deleteAllIcon}
							onClick={() => deleteAllNotesPopoverOpen(true)}
							disabled={isDisabled.delete}
							customStyle={{
								button: {
									opacity: isDisabled.delete ? 0.2 : 1
								}
							}}
						/>
					</span>
				</Tooltip>
				<IconButton icon={menuIcon} onClick={(event) => setSlateMenu(event.currentTarget)} />
			</FlexDiv>

			<Popover 
				id='slate-menu' 
				open={Boolean(slateMenu)} 
				anchorEl={slateMenu} 
				onClose={() => setSlateMenu(null)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<MenuItem 
					style={{
						boxShadow: `inset 0px 0px 5px ${colorPalette.highlight}`
					}}
					onClick={() => {
						const targetView = view === SLATE_VIEW.slateView ? SLATE_VIEW.noteListing : SLATE_VIEW.slateView
						onViewChange(targetView)
					}}
				>
					<TextWithIcon icon={listIcon}>{ view === SLATE_VIEW.slateView ? 'Notes Listing' : 'Slate Details'}</TextWithIcon>
				</MenuItem>
				<MenuItem
					style={{
						boxShadow: `inset 0px 0px 5px ${colorPalette.highlight}`
					}}
					onClick={() => deleteSlatePopoverOpen(true)}
				>
					<TextWithIcon icon={deleteIcon}>Delete This Slate</TextWithIcon>
				</MenuItem>
			</Popover>

			<BasicAlert 
				title='Delete All Notes?' 
				body={`Are you sure you want to delete all notes from this slateboard?`}
				open={alertsOpen.deleteAllNotes} 
				onClose={() => deleteAllNotesPopoverOpen(false)} 
				handleSubmit={onDeleteAllClick}
				loading={loading}
			/>

			<BasicAlert 
				title='Delete This Slate?' 
				body={slate?.pinned ? `Hey! you can't delete a pinned slate!` : `Are you sure you want to delete this slateboard?`}
				open={alertsOpen.deleteSlate} 
				onClose={() => deleteSlatePopoverOpen(false)} 
				handleSubmit={onDeleteSlate}
				{...(slate?.pinned ? { 
					CustomCancelButton: <></>,
					CustomConfirmButton: <CardButton name='Okay' onClick={() => deleteSlatePopoverOpen(false)} />
				} : {})}
				loading={loading}
			/>
		</FlexDiv>
	)
}

export default SlateHeader
