'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Not Working', href: '/' },
  { name: 'Working', href: '/working' },
]

export default function NavBar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className='mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 gap-x-12'>
            {navigation.map((item) => (
                <Link key={item.name} href={item.href} className={`text-sm font-semibold leading-6 text-gray-900 decoration-4 decoration-gray-300 underline-offset-8 ${pathname === item.href ? 'underline' : 'hover:underline'}`}>
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}