import React, { useState } from 'react'
import FlexDiv from '@/shared/FlexDiv'
import { colorPalette } from '@/constants/colorPalette'
import { Typography } from '@mui/material'
import IconButton from '@/shared/buttons/IconButton'
import editIcon from '@/public/assets/icons/editIcon.svg'
import { useDispatch } from 'react-redux'
import { updateUser } from '@/store/reducers/user'
import HoverField from '@/shared/textfields/hoverField'
import useTypewriterEffect from '@/shared/hooks/useTypewriterEffect'

function Bio({ user }) {
	const dispatch = useDispatch()
	const [currentBio, setCurrentBio] = useState(user.bio)

	const [ifTypewriterEnabled, setIfTypewriterEnabled] = useState(true)
	const typewriterTextValue = useTypewriterEffect(user.bio, 100)

	const onUpdateBio = (bio) => {
		dispatch(
			updateUser({
				...user,
				bio: bio,
			})
		)
	}

	return (
		<FlexDiv padding={'0px 20px'} customStyle={{ position: 'relative', width: '100%' }}>
			{	ifTypewriterEnabled ?
				<Typography
					onMouseDown={() => setIfTypewriterEnabled(false)}
					style={{
						width: '100%',
						whiteSpace: 'pre-wrap',
						overflowWrap: 'break-word',
						fontStyle: 'italic',
						fontSize: 12,
						color: colorPalette.light,
					}}
				>{typewriterTextValue}</Typography>
				:
				<HoverField
					value={currentBio}
					onChange={(event) => setCurrentBio(event.target.value)}
					shouldDebounce={true}
					debounceHandler={onUpdateBio}
					multiline={true}
					minRows={1}
					maxRows={3}
					placeholder="Why are you hiding your personality? Type it asap!"
					customStyle={{
						width: '100%',
					}}
					customClass='profile-bio'
				/>
			}
		</FlexDiv>
	)
}

export default Bio
