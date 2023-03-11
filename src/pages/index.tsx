import { Box } from '@mui/system';
import { Content, Hero, Sidebar } from 'src/components';
import Layout from 'src/layout/layout';

const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	);
};

export default IndexPage;
