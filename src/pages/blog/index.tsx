import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { Content } from 'src/components';
import { BlogsType } from 'src/interfaces/blogs.interface';
import Layout from 'src/layout/layout';
import SEO from 'src/layout/seo/seo';
import { BlogsService } from 'src/services/blog.service';

const BlogPage = ({ blogs }: BLogPageProps) => {
	return (
		<SEO metaTitle='All blogs'>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
						justifyContent: 'center',
					}}
				>
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	);
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BLogPageProps> = async () => {
	const blogs = await BlogsService.getAllBLogs();

	return {
		props: { blogs },
	};
};

interface BLogPageProps {
	blogs: BlogsType[];
}
