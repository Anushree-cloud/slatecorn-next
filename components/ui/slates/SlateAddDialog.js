import React from 'react'
import { colorPalette } from '@/constants/colorPalette'
import {
	Dialog,
	Typography,
} from '@mui/material'
import IconButton from '@/shared/buttons/IconButton'
import closeIcon from '@/public/assets/icons/closeIcon.svg'
import FlexDiv from '@/shared/FlexDiv'
import FormField from '@/shared/textfields/formField'
import { Form, Formik } from 'formik'
import CardButton from '@/shared/buttons/CardButton'

function SlateAddDialog({
    open,
    onClose = () => {},
    handleSubmit = () => {},
}) {

	return (
		<Dialog open={open}>
			<FlexDiv
				flexDirection="column"
				padding={10}
				customStyle={{ width: 500 }}
			>
				<FlexDiv
					justifyContent="space-between"
					alignItems="center"
					customStyle={{ width: '100%' }}
				>
					<Typography
						variant="h5"
						style={{
							fontStyle: 'italic',
							fontWeight: 'bold',
						}}
					>
						Here's to Add
					</Typography>
					<IconButton
						onClick={onClose}
						icon={closeIcon}
					/>
				</FlexDiv>

				<Formik
					initialValues={{
						slateTitle: 'New Slate',
						slateDescription: '',
					}}
					// validationSchema={validateSchema}
					onSubmit={handleSubmit}
				>
					{({
						errors,
						touched,
						isValid,
						values,
						setFieldValue,
						setFieldError,
					}) => {
						return (
							<Form
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									gap: 10,
								}}
							>
								<FlexDiv
									flexDirection="column"
									customStyle={{ width: '100%' }}
								>
									<FormField
										// label={'Title'}
										value={values.slateTitle}
										onChange={(value) =>
											setFieldValue('slateTitle', value)
										}
										placeholder={'Enter the title folk!'}
										fullWidth={true}
										
									/>
									<FormField
										// label={'Description'}
										value={values.slateDescription}
										onChange={(value) =>
											setFieldValue(
												'slateDescription',
												value
											)
										}
										placeholder={'Wanna describe?...'}
										fullWidth={true}
										multiline
										rows={3}
									/>
								</FlexDiv>

								<FlexDiv customStyle={{ width: '100%' }}>
									<CardButton
										type="submit"
										name="Done?"
										disabled={!values.slateTitle}
										width="100%"
										backgroundColor={colorPalette.highlight}
									/>
								</FlexDiv>
							</Form>
						)
					}}
				</Formik>
			</FlexDiv>
		</Dialog>
	)
}

export default SlateAddDialog
