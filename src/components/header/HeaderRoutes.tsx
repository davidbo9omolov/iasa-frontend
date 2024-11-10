import React from 'react'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { RouterItems } from 'types/router.ts'

import CustomLink from 'components/customLink/CustomLink.tsx'

type HeaderRoutesProps = {
  translatedRoutes: RouterItems[]
}

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const HeaderRoutes = ({ translatedRoutes }: HeaderRoutesProps) => {
  const { t } = useTranslation('home')
  const routesWithoutContacts = translatedRoutes.filter((item) => item.name != t('routes.contacts'))

  return (
    <NavigationMenu className={'z-50'}>
      <NavigationMenuList>
        {routesWithoutContacts.map((item, index) =>
          item.dropdown ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {item?.dropdown?.map((itemElem, index) => (
                    <ListItem key={index} href={itemElem.path} title={itemElem.name}>
                      {itemElem.name}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <CustomLink item={item} navLink className={'mx-7 hover:text-tertiary'} />
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

export default HeaderRoutes
