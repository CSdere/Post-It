import Image from "next/image"
import HeroImg from '@/assets/undraw_publish_post_re_wmql.svg'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <main className="w-full flex flex-col justify-center items-center px-16 height-min lg:flex-row lg:justify-between">
            <div className="flex flex-col text-center justify-center items-center my-4 lg:text-left lg:block">
                <h1 className="text-4xl w-full font-bold lg:text-6xl lg:w-2/3">Post Your Ideas For The World To See</h1>
                <Button asChild className="mt-8">
                    <Link href="/posts">Get Started</Link>
                </Button>

                <p className="text-xl font-medium mt-8">Leading the world in innovation</p>
            </div>
            <div className="flex justify-center items-center my-4">
                <Image src={HeroImg} alt="Hero Image" className="h-1/2"/>
            </div>
        </main>
    )
}