import { ModeToggle } from '@/components/DarkModeButton'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center px-16 h-16 header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <div className='flex justify-between items-center text-3xl'>
                <div className=' w-16 h-16 flex justify-center items-center'>
                    <a href="/"><i className="fa-solid fa-message " /> </a> 
                </div>
                <a href="/"><h1 className='font-bold ml-4'>Post-it</h1></a>
            </div>
            <div className='flex w-28 justify-between items-center  headerRightButtons'>
                
                <SignedIn >
                    <UserButton />
                </SignedIn>
                <SignedOut >
                    <SignInButton mode='modal' forceRedirectUrl='/'/>
                </SignedOut>
                <ModeToggle />
            </div>

            <div className='hidden dropDownMenu'>
                <DropdownMenu>
                    <DropdownMenuTrigger><i className="fa-solid fa-bars"></i></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel> 
                        <div className='flex justify-between items-center text-xl'>
                            <div className='flex justify-center items-center'>
                                <a href="/"><i className="fa-solid fa-message " /> </a> 
                            </div>
                            <a href="/"><h1 className='font-bold ml-4'>Post-it</h1></a>
                        </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='flex justify-center'>
                            <SignedIn >
                                <UserButton />
                            </SignedIn>
                            <SignedOut >
                                <SignInButton mode='modal' forceRedirectUrl='/'/>
                            </SignedOut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex justify-center'><ModeToggle /></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        </header>
    )
}