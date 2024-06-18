import Link from "next/link";

const BlogsPage = () => {
    return (
        <div className="p-8">
            {
                blogs.map(blog => <div key={blog.blog} className=" border-2 p-12">

                    <h3>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className="bg-red-400 p-3">
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>

                </div>)
            }
        </div>
    );
};

const blogs = [
    {
        "title": "The Benefits of a Morning Routine",
        "description": "Explore how establishing a morning routine can enhance your productivity and overall well-being.",
        "slug": "benefits-of-morning-routine"
    },
    {
        "title": "Top 10 Travel Destinations for 2024",
        "description": "Discover the must-visit travel destinations for the upcoming year, from exotic beaches to vibrant cities.",
        "slug": "top-10-travel-destinations-2024"
    },
    {
        "title": "A Beginner's Guide to Vegan Cooking",
        "description": "Learn the basics of vegan cooking with easy and delicious recipes that anyone can make.",
        "slug": "beginners-guide-vegan-cooking"
    },
    {
        "title": "The Future of Technology: Trends to Watch",
        "description": "Stay ahead of the curve by learning about the latest trends in technology and what they mean for the future.",
        "slug": "future-technology-trends-2024"
    },
    {
        "title": "Mental Health Tips for the Digital Age",
        "description": "Discover strategies to maintain your mental health in an increasingly digital world.",
        "slug": "mental-health-digital-age"
    }
]



export default BlogsPage;