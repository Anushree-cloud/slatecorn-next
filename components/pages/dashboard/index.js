import Image from 'next/image'
import React from 'react'
import dummyDashboard from '@/assets/images/dummyDashboard.png'

function DashBoard() {
	return (
		<>
			<Image
				src={dummyDashboard}
				alt="dashboard"
				width={1000}
				height={100}
                style={{
                    color: 'transparent',
                    height: 750,
                    objectFit: 'fill',
                    width: '100%',
                }}
			/>
		</>
	)
}

export default DashBoard
