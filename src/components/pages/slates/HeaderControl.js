'use client'
import { useDispatch, useSelector } from 'react-redux'
import HeaderButton from '@/shared/buttons/HeaderButton'
import { useRouter } from 'next/navigation'
import SlateAddDialog from '@/components/ui/slates/SlateAddDialog'
import { useEffect, useState } from 'react'
import { addSlate, searchSlate } from '@/store/reducers/slates'
import { Backdrop, CircularProgress, TextField } from '@mui/material'
import { ROUTES } from '@/constants/routes'
import FormField from '@/shared/textfields/formField'
import useDebounce from '@/shared/hooks/useDebounce'
import { colorPalette } from '@/constants/colorPalette'

function HeaderControl() {
	const dispatch = useDispatch()
	const router = useRouter()

    const slates = useSelector((state) => state.slates)

	const [slateDialogOpen, setSlateDialogOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchValue = useDebounce(searchValue, 1000)

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
		router.push(ROUTES.SLATE_ROUTES.listing)
	}

    useEffect(() => {        
        if(searchValue.length > 0) {
            dispatch(searchSlate({ searchValue: searchValue }))
        } else {
            dispatch(searchSlate({ searchValue: '' }))
        }
    }, [debouncedSearchValue])

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <TextField
				value={searchValue}
                variant='outlined'
                fullWidth
				placeholder='Search Slateboard'
				style={{
                    height: 35,
                    backgroundColor: colorPalette.light,
					borderRadius: 5,
				}}
				sx={{
					'& .MuiOutlinedInput-root': {
						height: '35px !important',
                        minHeight: '35px !important',
					},
				}}
                disabled={slates.listing.length === 0}
				onChange={(event) => setSearchValue(event.target.value)}
			/>

			<HeaderButton 
                name="New Slateboard" 
                onClick={onAddClick}
                customStyle={{
                    width: 200,
                    height: 35,
                }}
            />
			<HeaderButton
				name="View All"
				onClick={onViewAllClick}
                customStyle={{
                    width: 200,
                    height: 35,
                }}
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

export default HeaderControl
