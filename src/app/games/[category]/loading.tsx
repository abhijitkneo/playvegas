import PageLoader from '@/components/common/PageLoader'
import { Container } from 'react-bootstrap'

export default function loading() {
	return (
		<Container fluid>
			<PageLoader />
		</Container>
	)
}
