import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from 'src/interfaces/categories.interface';

export interface SidebarProps {
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}
