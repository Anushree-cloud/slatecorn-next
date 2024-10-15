'use client'
import { useDispatch } from 'react-redux'
import { addNote, deleteAll, rearrange } from '@/store/reducers/notes'
import { emptyNote } from '@/constants/notes'
import HeaderButton from '@/shared/buttons/HeaderButton'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import SlateAddDialog from '../slates/SlateAddDialog'
import { useState } from 'react'
import { addSlate } from '@/store/reducers/slates'
import { Backdrop, CircularProgress } from '@mui/material'

function Control() {
	const dispatch = useDispatch()
	const router = useRouter()

	const [slateDialogOpen, setSlateDialogOpen] = useState(false)
    const [loading, setLoading] = useState(false)

	const onAddClick = () => {
		setSlateDialogOpen(true)
	}

	const onClose = () => {
		setSlateDialogOpen(false)
	}

	const handleSubmit = (values) => {
		try {
            setLoading(true)
			dispatch(addSlate(values))
			setSlateDialogOpen(false)
		} catch (error) {
			alert('Something went wrong! Please try again!')
		} finally {
            setTimeout(() => setLoading(false), 1500)
        }
	}

	const onViewAllClick = () => {
		router.push('/')
	}

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
			<HeaderButton name="Add new slateboard" onClick={onAddClick} />
			<HeaderButton
				name="View all slateboards"
				onClick={onViewAllClick}
			/>

			<Backdrop open={loading} style={{ zIndex: 1300, color: '#fff' }}>
				<CircularProgress color="inherit" />
			</Backdrop>

			<SlateAddDialog
				open={slateDialogOpen}
				handleSubmit={handleSubmit}
				onClose={onClose}
			/>
		</div>
	)
}

export default Control
