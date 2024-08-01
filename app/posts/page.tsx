import YourPosts from "@/components/YourPosts"
import AllPosts from "@/components/AllPosts"
import CreatePost from "@/components/CreatePost"

export default function Posts() {
    return (
        <div className="flex posts">
            <YourPosts />
            <AllPosts />
            <CreatePost />
        </div>
    )
}