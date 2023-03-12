import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { Content, Sidebar } from 'src/components';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from 'src/interfaces/categories.interface';
import Layout from 'src/layout/layout';
import { BlogsService } from 'src/services/blog.service';

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoriesPageProps) => {
	return (
		<Layout>
			<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({ query }) => {
	const blogs = await BlogsService.getDetaieldCateogriesBlog(query.slug as string);
	const latestBlogs = await BlogsService.getLatestBlog();
	const categories = await BlogsService.getCategories();

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	};
};

interface DetailedCategoriesPageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
