import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import { TOKEN_COOKIE_KEY } from '@/lib'
import React from 'react'
import { useCookies } from 'react-cookie'
import LogoBlack from '../LogoBlack'

export const NavbarAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    {
      label: 'Users',
      link: '/admin/users',
    },
    {
      label: 'Contents',
      link: '/admin/contents',
    },
    {
      label: 'Blogs',
      link: '/admin/blogs',
    },
    {
      label: 'Jobs',
      link: '/admin/jobs',
    },
  ]

  const [, , removeCookie] = useCookies([TOKEN_COOKIE_KEY])

  const handleSignOut = () => {
    removeCookie(TOKEN_COOKIE_KEY)
  }

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <LogoBlack />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <LogoBlack />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={item.link}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button onPress={handleSignOut} href="#" variant="flat">
            Sign out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              // color={
              //   index === 2 ? 'warning' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              // }
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
