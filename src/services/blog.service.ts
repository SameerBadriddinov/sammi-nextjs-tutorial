import { request, gql } from 'graphql-request';
import { BlogsType } from 'src/interfaces/blogs.interface';
import { CategoryType } from 'src/interfaces/categories.interface';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
	async getAllBLogs() {
		const query = gql`
			query GetBlogs {
				blogs {
					excerpt
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
				}
			}
		`;

		const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
		return result.blogs;
	},

	async getLatestBlog() {
		const query = gql`
			query GetLatestBlog {
				blogs(last: 2) {
					id
					slug
					title
					createdAt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
				}
			}
		`;

		const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
		return result.blogs;
	},

	async getCategories() {
		const query = gql`
			query GetCategories {
				categories {
					slug
					label
				}
			}
		`;

		const result = await request<{ categories: CategoryType[] }>(graphqlAPI, query);
		return result.categories;
	},
};
