import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import ModuleLayout from '@/components/layouts/modules/ModuleLayout'
import useTypewriterEffect from '@/shared/hooks/useTypewriterEffect'
import { colorPalette } from '@/constants/colorPalette'
import FlexDiv from '@/shared/FlexDiv'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function DashBoard() {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
        router.push("/login")
        }
    }, [status, router])

    if (status === "loading") {
        return <div>Loading...</div>
    }

	const typewriterTextValue = useTypewriterEffect('This DashBoard is looking like your life. Empty!!!!!!!!!!!', 100)
	return (
		<ModuleLayout>
			<FlexDiv
				justifyContent='center'
                padding={20}
                customStyle={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography variant='h6' color={colorPalette.light}>{typewriterTextValue}</Typography>
            </FlexDiv>
			
		</ModuleLayout>
	)
}

export default DashBoard