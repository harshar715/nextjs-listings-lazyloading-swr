import { usePaginatePosts } from "../../useRequest";
import { useRouter } from 'next/router';
import Post from "../../components/Post";

function Index() {

    const router = useRouter();
    const detailId = router.query.id;
    const { posts, error } = usePaginatePosts(`/posts?_page=${detailId}&_limit=1`);

    if (error) return <h1>Something went wrong!</h1>;

    if (posts.length === 0) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div onClick={() => router.back()} className="back">{`<= Back`}</div>
            <h1>Post Details</h1>

            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}

            <style>
                {`
                    .back {
                        top: 5px;
                        position: fixed;
                        left: 50px;
                        font-size: 20px;
                        border: 2px solid #fff;
                        padding: 10px;
                        cursor: pointer;
                    }
                
                `}
            </style>

        </div>
    )
}

export default Index;
