import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex items-center justify-between'>
                <Link href="/" className='w-136'>
                    <Image src="/assets/images/logo_3.png" width={108} height={38} alt='Evently Logo' />
                </Link>
                <SignedIn>
                    <nav className='md:flex-between hidden w-full max-w-xs'>
                        <NavItems />
                    </nav>
                </SignedIn>
                <div className='flex w-32 justify-end gap-3'>
                    {/* If signed-in show this */}
                    <SignedIn>
                        <UserButton afterSignOutUrl='/' />
                        <MobileNav />
                    </SignedIn>
                    {/* If signed-out show this */}
                    <SignedOut>
                        <Button asChild className='rounded-full' size='lg'>
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header