'use client';
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'
import { IoChevronBackOutline } from 'react-icons/io5'

const BackButton = () => {
	const router = useRouter()
	return (
		<Button variant='primary' size='sm' className='btn-with-icon' onClick={() => router.push('/')}>
			<IoChevronBackOutline size={20} />
		</Button>
	)
}

export default BackButton