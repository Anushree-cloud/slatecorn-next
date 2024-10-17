import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import TextWithIcon from '@/shared/typography/TextWithIcon'
import FlexDiv from '@/shared/FlexDiv'
import { Typography } from '@mui/material'
import backIcon from '@/assets/icons/backIconLight.svg'
import HoverField from '@/shared/textfields/hoverField'
import { colorPalette } from '@/constants/colorPalette'
import useDebounce from '@/shared/hooks/useDebounce'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { dateFormates } from '@/constants/date'
import { editSlate } from '@/store/reducers/slates'
import likeIcon from '@/assets/icons/allLikes.svg'
import commentsIcon from '@/assets/icons/commentsLight.svg'
import shareIcon from '@/assets/icons/shareLight.svg'
import privateIcon from '@/assets/icons/privateLight.svg'
import publicIcon from '@/assets/icons/publicLight.svg'
import BasicAlert from '@/shared/alerts/BasicAlert'
import useTypewriterEffect from '@/shared/hooks/useTypewriterEffect'
import { SLATE_VIEW } from '@/constants/slates'

function SlateView({ 
    onViewChange, 
    slate,
    setIsTypewriterEnabled,
    isTypewriterEnabled,
    slateDescription,
    setSlateDescription,
    // typewriterText,
    onEditSlate
}) {
	const dispatch = useDispatch()

    const [typewriterText, setTypewriterText] = useState('')
    const typewriterTextValue = useTypewriterEffect(slateDescription, 100)
    const [privacyAlertOpen, setPrivacyAlertOpen] = useState(false)

	const handlePrivacyAlertClose = () => setPrivacyAlertOpen(false)
    const handlePrivacyAlertOpen = () => setPrivacyAlertOpen(true)
    const handlePrivacyAlertConfirm = () => {
        setPrivacyAlertOpen(false)
        onEditSlate('isPublic', !slate?.isPublic)
    }

    useEffect(() => {
        setTypewriterText(typewriterTextValue)
    }, [typewriterTextValue])

	return (
		<FlexDiv
			flexDirection="column"
			alignItems="flex-start"
			padding={'0px 20px'}
			customStyle={{ width: '100%' }}
		>
			<Button>
				<TextWithIcon
					icon={backIcon}
					onClick={() => onViewChange(SLATE_VIEW.noteListing)}
					customStyle={{
						text: {
							color: colorPalette.light,
							fontStyle: 'italic',
						},
					}}
				>
					Back to Listing
				</TextWithIcon>
			</Button>

			<FlexDiv customStyle={{ width: '100%' }}>
				<Typography color={colorPalette.light}>
					Slate created at:
				</Typography>
				<Typography color={colorPalette.light} fontStyle={'italic'}>
					{moment(slate?.createdAt).format(
						dateFormates.fullDateReverse
					)}
				</Typography>
			</FlexDiv>

			<FlexDiv
				flexDirection="column"
				alignItems="flex-start"
				gap={5}
				customStyle={{ width: '100%', marginBottom: 20 }}
			>
				<Typography variant="h4" color={colorPalette.light}>
					Your Slateboard's Description:
				</Typography>
                {isTypewriterEnabled ?
                    <Typography 
                        style={{
                            color: colorPalette.light,
                            fontStyle: 'italic',
                            padding: '0px !important',
                            width: '100%',
                            textWrap: 'wrap',
                            whiteSpace: 'pre-wrap',
                        }}
                        onMouseDown={() => setIsTypewriterEnabled(false)}
                    >
                        {typewriterText}
                    </Typography>
                    :
                    <HoverField
                        value={slateDescription}
                        onChange={(event) =>
                            setSlateDescription(event.target.value)
                        }
                        placeholder="Wanna describe?..."
                        multiline
                        minRows={1}
                        maxRows={8}
                        customStyle={{
                            input: {
                                color: colorPalette.light,
                                fontStyle: 'italic',
                                padding: '0px !important',
                            },
                        }}
                    />
                }
			</FlexDiv>

			<FlexDiv customStyle={{ width: '100%' }}>
				<Typography color={colorPalette.light}>
					Slate visibility:
				</Typography>
				<Typography color={colorPalette.light} fontStyle={'italic'}>
					{slate?.isPublic ? 'Public' : 'Private'}
				</Typography>
				<Button
					variant="container"
					style={{
						background: 'rgba(240, 237, 229, 0.1)',
						textTransform: 'none',
					}}
                    onClick={handlePrivacyAlertOpen}
				>
					<TextWithIcon
						iconPosition="right"
						customStyle={{
							text: {
								color: colorPalette.light,
								textTransform: 'none',
							},
						}}
						icon={slate?.isPublic ? publicIcon : privateIcon }
					>
						Change
					</TextWithIcon>
				</Button>
			</FlexDiv>

            <BasicAlert 
                title='Change Slate Privacy?' 
                body={`Your privacy is currently set to ${slate?.isPublic ? 'Public' : 'Private'}. Do you want to change it?`}
                open={privacyAlertOpen} 
                onClose={handlePrivacyAlertClose} 
                handleSubmit={handlePrivacyAlertConfirm}
            />

			<FlexDiv customStyle={{ width: '100%' }}>
				<Button
					variant="container"
					style={{ background: 'rgba(240, 237, 229, 0.1)' }}
				>
					<TextWithIcon
						iconPosition="right"
						icon={likeIcon}
						customStyle={{
							text: {
								color: colorPalette.light,
								textTransform: 'none',
							},
						}}
					>
						{slate?.tokens?.length} Tokens
					</TextWithIcon>
				</Button>
				<Button
					variant="container"
					style={{ background: 'rgba(240, 237, 229, 0.1)' }}
				>
					<TextWithIcon
						iconPosition="right"
						icon={commentsIcon}
						customStyle={{
							text: {
								color: colorPalette.light,
								textTransform: 'none',
							},
						}}
					>
						{slate?.comments?.length} Comments
					</TextWithIcon>
				</Button>
				<Button
					variant="container"
					style={{ background: 'rgba(240, 237, 229, 0.1)' }}
				>
					<TextWithIcon
						iconPosition="right"
						icon={shareIcon}
						customStyle={{
							text: {
								color: colorPalette.light,
								textTransform: 'none',
							},
						}}
					>
						{slate?.shares?.length} Shares
					</TextWithIcon>
				</Button>
			</FlexDiv>
		</FlexDiv>
	)
}

export default SlateView
