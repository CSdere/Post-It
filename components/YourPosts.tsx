import Image from "next/image"
import PostsImg from '@/assets/undraw_blog_post_re_fy5x.svg'

export default function YourPosts() {
    return (
        <div className="w-1/3 height-min flex justify-center items-center yourPosts">
            <Image src={PostsImg} alt="Blog Post Image"  className="w-2/3"/>
        </div>
    )
}