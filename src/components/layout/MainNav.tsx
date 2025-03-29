import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>קטגוריות</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <li key={category.title}>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href={category.href}
                    >
                      <div className="text-sm font-medium leading-none">
                        {category.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {category.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const categories = [
  {
    title: "אירועים",
    description: "המלצות על מקומות לאירועי חברה, ימי גיבוש וכנסים",
    href: "/categories/events",
  },
  {
    title: "הדרכה ופיתוח ארגוני",
    description: "מרצים, מנחים ותוכניות פיתוח מנהלים",
    href: "/categories/training",
  },
  {
    title: "רווחה",
    description: "פעילויות רווחה, מתנות וחוויות לעובדים",
    href: "/categories/wellbeing",
  },
  {
    title: "כלי HR",
    description: "מערכות וכלים לניהול משאבי אנוש",
    href: "/categories/hr-tools",
  },
] 