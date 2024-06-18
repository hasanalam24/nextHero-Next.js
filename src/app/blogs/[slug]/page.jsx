
const page = ({ params }) => {

    const singleBlog = blogs.find(blog => blog.slug == params.slug)

    const { title, description, slug } = singleBlog

    return (
        <div className="h-screen">
            Detail BlogsPage
            <h3>{slug}</h3>
            <h3>{title}</h3>
            <p>{description}</p>
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


export default page;