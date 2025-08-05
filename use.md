Accordion

<script lang="ts">
 import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>
 
<Accordion.Root type="single">
 <Accordion.Item value="item-1">
  <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
  <Accordion.Content>
   Yes. It adheres to the WAI-ARIA design pattern.
  </Accordion.Content>
 </Accordion.Item>
</Accordion.Root>

Aspect Ratio

<script lang="ts">
 import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
</script>
 
<div class="w-[450px]">
 <AspectRatio ratio={16 / 9} class="bg-muted">
  <img src="..." alt="..." class="rounded-md object-cover" />
 </AspectRatio>
</div>

Avatar

<script lang="ts">
 import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>
 
<Avatar.Root>
 <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
 <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>


Badge

<script lang="ts">
 import { Badge } from "$lib/components/ui/badge/index.js";
</script>
 
# You can use the badgeVariants helper to create a link that looks like a badge.


<Badge variant="outline">Badge</Badge>

<script lang="ts">
 import { badgeVariants } from "$lib/components/ui/badge/index.js";
</script>
 
<a href="/dashboard" class={badgeVariants({ variant: "outline" })}>Badge</a>

Button

<script lang="ts">
 import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Button variant="outline">Button</Button>

# You can convert the <button> into an <a> element by simply passing an href as a prop.

<script lang="ts">
 import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Button href="/dashboard">Dashboard</Button>

# Alternatively, you can use the buttonVariants helper to create a link that looks like a button.


<script lang="ts">
 import { buttonVariants } from "$lib/components/ui/button";
</script>
 
<a href="/dashboard" class={buttonVariants({ variant: "outline" })}>
 Dashboard
</a>

Card

<script lang="ts">
 import * as Card from "$lib/components/ui/card/index.js";
</script>
 
<Card.Root>
 <Card.Header>
  <Card.Title>Card Title</Card.Title>
  <Card.Description>Card Description</Card.Description>
 </Card.Header>
 <Card.Content>
  <p>Card Content</p>
 </Card.Content>
 <Card.Footer>
  <p>Card Footer</p>
 </Card.Footer>
</Card.Root>

Carousel

<script lang="ts">
 import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>
 
<Carousel.Root>
 <Carousel.Content>
  <Carousel.Item>...</Carousel.Item>
  <Carousel.Item>...</Carousel.Item>
  <Carousel.Item>...</Carousel.Item>
 </Carousel.Content>
 <Carousel.Previous />
 <Carousel.Next />
</Carousel.Root>


Navigation Menu

<script lang="ts">
 import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
 import { cn } from "$lib/utils.js";
 import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
 import type { HTMLAttributes } from "svelte/elements";
 import CircleHelpIcon from "@lucide/svelte/icons/circle-help";
 import CircleIcon from "@lucide/svelte/icons/circle";
 import CircleCheckIcon from "@lucide/svelte/icons/circle-check";
 
 const components: { title: string; href: string; description: string }[] = [
  {
   title: "Alert Dialog",
   href: "/docs/components/alert-dialog",
   description:
    "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
   title: "Hover Card",
   href: "/docs/components/hover-card",
   description:
    "For sighted users to preview content available behind a link."
  },
  {
   title: "Progress",
   href: "/docs/components/progress",
   description:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
   title: "Scroll-area",
   href: "/docs/components/scroll-area",
   description: "Visually or semantically separates content."
  },
  {
   title: "Tabs",
   href: "/docs/components/tabs",
   description:
    "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
   title: "Tooltip",
   href: "/docs/components/tooltip",
   description:
    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
 ];
 
 type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
  title: string;
  href: string;
  content: string;
 };
</script>
 
{#snippet ListItem({
 title,
 content,
 href,
 class: className,
 ...restProps
}: ListItemProps)}
 <li>
  <NavigationMenu.Link>
   {#snippet child()}
    <a
     {href}
     class={cn(
      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
      className
     )}
     {...restProps}
    >
     <div class="text-sm font-medium leading-none">{title}</div>
     <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
      {content}
     </p>
    </a>
   {/snippet}
  </NavigationMenu.Link>
 </li>
{/snippet}
 
<NavigationMenu.Root viewport={false}>
 <NavigationMenu.List>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul
     class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
    >
     <li class="row-span-3">
      <NavigationMenu.Link
       class="from-muted/50 to-muted bg-linear-to-b outline-hidden flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline focus:shadow-md"
      >
       {#snippet child({ props })}
        <a {...props} href="/">
         <div class="mb-2 mt-4 text-lg font-medium">shadcn-svelte</div>
         <p class="text-muted-foreground text-sm leading-tight">
          Beautifully designed components built with Tailwind CSS.
         </p>
        </a>
       {/snippet}
      </NavigationMenu.Link>
     </li>
     {@render ListItem({
      href: "/docs",
      title: "Introduction",
      content:
       "Re-usable components built using Bits UI and Tailwind CSS."
     })}
     {@render ListItem({
      href: "/docs/installation",
      title: "Installation",
      content: "How to install dependencies and structure your app."
     })}
     {@render ListItem({
      href: "/docs/components/typography",
      title: "Typography",
      content: "Styles for headings, paragraphs, lists...etc"
     })}
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul
     class="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
    >
     {#each components as component, i (i)}
      {@render ListItem({
       href: component.href,
       title: component.title,
       content: component.description
      })}
     {/each}
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
 
  <NavigationMenu.Item>
   <NavigationMenu.Link>
    {#snippet child()}
     <a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
    {/snippet}
   </NavigationMenu.Link>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>List</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul class="grid w-[300px] gap-4 p-2">
     <li>
      <NavigationMenu.Link href="#">
       <div class="font-medium">Components</div>
       <div class="text-muted-foreground">
        Browse all components in the library.
       </div>
      </NavigationMenu.Link>
      <NavigationMenu.Link href="#">
       <div class="font-medium">Documentation</div>
       <div class="text-muted-foreground">
        Learn how to use the library.
       </div>
      </NavigationMenu.Link>
      <NavigationMenu.Link href="#">
       <div class="font-medium">Blog</div>
       <div class="text-muted-foreground">
        Read our latest blog posts.
       </div>
      </NavigationMenu.Link>
     </li>
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <ul class="grid w-[200px] gap-4 p-2">
     <li>
      <NavigationMenu.Link href="#">Components</NavigationMenu.Link>
      <NavigationMenu.Link href="#">Documentation</NavigationMenu.Link>
      <NavigationMenu.Link href="#">Blocks</NavigationMenu.Link>
     </li>
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>
 
   <NavigationMenu.Content>
    <ul class="grid w-[200px] gap-4 p-2">
     <li>
      <NavigationMenu.Link href="#" class="flex-row items-center gap-2">
       <CircleHelpIcon />
       Backlog
      </NavigationMenu.Link>
 
      <NavigationMenu.Link href="#" class="flex-row items-center gap-2">
       <CircleIcon />
       To Do
      </NavigationMenu.Link>
 
      <NavigationMenu.Link href="#" class="flex-row items-center gap-2">
       <CircleCheckIcon />
       Done
      </NavigationMenu.Link>
     </li>
    </ul>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
 </NavigationMenu.List>
</NavigationMenu.Root>

Progress

<script lang="ts">
 import { Progress } from "$lib/components/ui/progress/index.js";
</script>
 
<Progress value={33} />

Resizable

<script lang="ts">
 import * as Resizable from "$lib/components/ui/resizable/index.js";
</script>
 
<Resizable.PaneGroup direction="horizontal">
 <Resizable.Pane>One</Resizable.Pane>
 <Resizable.Handle />
 <Resizable.Pane>Two</Resizable.Pane>
</Resizable.PaneGroup>

Scroll Area

<script lang="ts">
 import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
</script>
 
<ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
 Jokester began sneaking into the castle in the middle of the night and
 leaving jokes all over the place: under the king's pillow, in his soup, even
 in the royal toilet. The king was furious, but he couldn't seem to stop
 Jokester. And then, one day, the people of the kingdom discovered that the
 jokes left by Jokester were so funny that they couldn't help but laugh. And
 once they started laughing, they couldn't stop.
</ScrollArea>

Select

<script lang="ts">
 import * as Select from "$lib/components/ui/select/index.js";
</script>
 
<Select.Root type="single">
 <Select.Trigger class="w-[180px]"></Select.Trigger>
 <Select.Content>
  <Select.Item value="light">Light</Select.Item>
  <Select.Item value="dark">Dark</Select.Item>
  <Select.Item value="system">System</Select.Item>
 </Select.Content>
</Select.Root>

Seperator

<script lang="ts">
 import { Separator } from "$lib/components/ui/separator/index.js";
</script>
 
<div>
 <div class="space-y-1">
  <h4 class="text-sm font-medium leading-none">Bits UI Primitives</h4>
  <p class="text-muted-foreground text-sm">
   An open-source UI component library.
  </p>
 </div>
 <Separator class="my-4" />
 <div class="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
 </div>
</div>

Sheet

<script lang="ts">
 import * as Sheet from "$lib/components/ui/sheet/index.js";
</script>
 
<Sheet.Root>
 <Sheet.Trigger>Open</Sheet.Trigger>
 <Sheet.Content>
  <Sheet.Header>
   <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
   <Sheet.Description>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </Sheet.Description>
  </Sheet.Header>
 </Sheet.Content>
</Sheet.Root>

Skeleton

<script lang="ts">
 import { Skeleton } from "$lib/components/ui/skeleton/index.js";
</script>

<Skeleton class="h-[20px] w-[100px] rounded-full" />


Slider

<script lang="ts">
 import { Slider } from "$lib/components/ui/slider/index.js";
 let value = $state(33);
</script>
 
<Slider type="single" bind:value max={100} step={1} />

Switch

<script lang="ts">
 import { Switch } from "$lib/components/ui/switch/index.js";
</script>
 
<Switch />


Table

<script lang="ts">
 import * as Table from "$lib/components/ui/table/index.js";
</script>

<Table.Root>
 <Table.Caption>A list of your recent invoices.</Table.Caption>
 <Table.Header>
  <Table.Row>
   <Table.Head class="w-[100px]">Invoice</Table.Head>
   <Table.Head>Status</Table.Head>
   <Table.Head>Method</Table.Head>
   <Table.Head class="text-right">Amount</Table.Head>
  </Table.Row>
 </Table.Header>
 <Table.Body>
  <Table.Row>
   <Table.Cell class="font-medium">INV001</Table.Cell>
   <Table.Cell>Paid</Table.Cell>
   <Table.Cell>Credit Card</Table.Cell>
   <Table.Cell class="text-right">$250.00</Table.Cell>
  </Table.Row>
 </Table.Body>
</Table.Root>

Tabs

<script lang="ts">
 import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>
 
<Tabs.Root value="account" class="w-[400px]">
 <Tabs.List>
  <Tabs.Trigger value="account">Account</Tabs.Trigger>
  <Tabs.Trigger value="password">Password</Tabs.Trigger>
 </Tabs.List>
 <Tabs.Content value="account">
  Make changes to your account here.
 </Tabs.Content>
 <Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>

Text Area

<script lang="ts">
 import { Textarea } from "$lib/components/ui/textarea/index.js";
</script>