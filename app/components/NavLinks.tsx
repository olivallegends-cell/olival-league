'use client'

import { Home, List, Swords, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { name: 'League Table', href: '/dashboard', icon: Home },
    { name: 'Games', href: '/dashboard/games', icon: List },
    { name: 'Player Stats ', href: `/players`, icon: User },
    { name: 'Duels', href: `/players/duels`, icon: Swords },
]
export default function NavLinks() {
    const pathname = usePathname()
    return (
        navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 ${pathname === item.href ? 'bg-gray-700' : ''
                    }`}
            >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
            </Link>
        ))
    )
}
