"use client"
import Link from "next/link"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
 Avatar,
 AvatarFallback,
 AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
 Breadcrumb,
 BreadcrumbEllipsis,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import {
 Collapsible,
 CollapsibleContent,
 CollapsibleTrigger,
} from "@/components/ui/collapsible"

const FormSchema = z.object({
 mobile: z.boolean().default(false).optional(),
 items: z.array(z.string()).refine((value) => value.some((item) => item), {
  message: "You have to select at least one item.",
}),
})

const items = [
 {
   id: "recents",
   label: "Recents",
 },
 {
   id: "home",
   label: "Home",
 },
 {
   id: "applications",
   label: "Applications",
 },
 {
   id: "desktop",
   label: "Desktop",
 },
 {
   id: "downloads",
   label: "Downloads",
 },
 {
   id: "documents",
   label: "Documents",
 },
] as const

const notifications = [
 {
   title: "Your call has been confirmed.",
   description: "1 hour ago",
 },
 {
   title: "You have a new message!",
   description: "1 hour ago",
 },
 {
   title: "Your subscription is expiring soon!",
   description: "2 hours ago",
 },
]

type CardProps = React.ComponentProps<typeof Card>

export default function ShadcnUI(){
 return (
  <div>
    <h1>✨Theming</h1>
    theming bg
    <div className="bg-zinc-950 dark:bg-white">
     <div style={{height: '100px'}}></div>
    </div>
    <div className="bg-background text-foreground">
     <h1>Hello</h1>
    </div>

    <br/>
    <br/>
    <hr/>

    <h1>✨Dark Mode</h1>
    <ModeToggle />

    <br/>
    <br/>
    <hr/>
    
    <h1>✨Typhography</h1>
    <Typography />

    <br/>
    <br/>
    <hr/>

    <h1>✨Components</h1>
    <ComponentsUI />
    
    <br/>
    <br/>
    <hr/>

  </div>
 )
}


function ComponentsUI(){
 const [date, setDate] = React.useState<Date | undefined>(new Date())
 const [api, setApi] = React.useState<CarouselApi>()
 const [current, setCurrent] = React.useState(0)
 const [count, setCount] = React.useState(0)
 const [isOpen, setIsOpen] = React.useState(false)

 const form = useForm<z.infer<typeof FormSchema>>({
   resolver: zodResolver(FormSchema),
   defaultValues: {
     mobile: true,
     items: ["recents", "home"],
   },
 })

 function onSubmit(data: z.infer<typeof FormSchema>) {
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  })
}

 React.useEffect(() => {
  if (!api) {
    return
  }

  setCount(api.scrollSnapList().length)
  setCurrent(api.selectedScrollSnap() + 1)

  api.on("select", () => {
    setCurrent(api.selectedScrollSnap() + 1)
  })
}, [api])

 return (
  <>
   <h2>✨✨Accordion</h2>
   <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
     <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
   </Accordion>

   <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

   <h2>✨✨Alert</h2>
   <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
   </Alert>

   <Alert variant="destructive">
     <AlertCircle className="h-4 w-4" />
     <AlertTitle>Error</AlertTitle>
     <AlertDescription>
       Your session has expired. Please log in again.
     </AlertDescription>
   </Alert>

   <h2>✨✨Alert Dialog</h2>
   <AlertDialog>
     <AlertDialogTrigger>Open</AlertDialogTrigger>
     <AlertDialogContent>
       <AlertDialogHeader>
         <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
         <AlertDialogDescription>
           This action cannot be undone. This will permanently delete your account
           and remove your data from our servers.
         </AlertDialogDescription>
       </AlertDialogHeader>
       <AlertDialogFooter>
         <AlertDialogCancel>Cancel</AlertDialogCancel>
         <AlertDialogAction>Continue</AlertDialogAction>
       </AlertDialogFooter>
     </AlertDialogContent>
   </AlertDialog>

   <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

   <h2>✨✨Alert Dialog</h2>
   <div className="w-[450px]">
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
   </div>

   <h2>✨✨Avatar</h2>
   <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
   </Avatar>

   <h2>✨✨Badge</h2>
   <Badge>Badge</Badge>

   <h2>✨✨Breadcrumb</h2>
   <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    
   <h2>✨✨Button</h2>
   <Button>Button</Button>
   <Button variant="outline">Button</Button>
   <Button variant="secondary">Secondary</Button>
   <Button variant="destructive">Destructive</Button>
   <Button variant="ghost">Ghost</Button>
   <Button variant="link">Link</Button>
   <Button variant="outline" size="icon">
     <ChevronRight className="h-4 w-4" />
   </Button>
   <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
    <Link href="/" className={buttonVariants({ variant: "outline" })}>Click here</Link>

   <h2>✨✨Date</h2>
   <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />

   <h2>✨✨Card</h2>
<Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>

   <CardDemo />

   <h2>✨✨Carousel</h2>
   <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>

   <h2>✨✨Checkbox</h2>
   <div className="flex items-center space-x-2">
     <Checkbox id="terms" />
     <label
       htmlFor="terms"
       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
     >
       Accept terms and conditions
     </label>
   </div>

   <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    
   <h2>✨✨Collapsible</h2>
   <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>

  </>
 )
}

// Card Example
export function CardDemo({ className, ...props }: CardProps) {
 return (
   <Card className={cn("w-[380px]", className)} {...props}>
     <CardHeader>
       <CardTitle>Notifications</CardTitle>
       <CardDescription>You have 3 unread messages.</CardDescription>
     </CardHeader>
     <CardContent className="grid gap-4">
       <div className=" flex items-center space-x-4 rounded-md border p-4">
         <BellRing />
         <div className="flex-1 space-y-1">
           <p className="text-sm font-medium leading-none">
             Push Notifications
           </p>
           <p className="text-sm text-muted-foreground">
             Send notifications to device.
           </p>
         </div>
         <Switch />
       </div>
       <div>
         {notifications.map((notification, index) => (
           <div
             key={index}
             className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
           >
             <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
             <div className="space-y-1">
               <p className="text-sm font-medium leading-none">
                 {notification.title}
               </p>
               <p className="text-sm text-muted-foreground">
                 {notification.description}
               </p>
             </div>
           </div>
         ))}
       </div>
     </CardContent>
     <CardFooter>
       <Button className="w-full">
         <Check className="mr-2 h-4 w-4" /> Mark all as read
       </Button>
     </CardFooter>
   </Card>
 )
}
// Dakr Mode
export function ModeToggle() {
 const { setTheme } = useTheme()

 return (
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
       <Button variant="outline" size="icon">
         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
         <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
         <span className="sr-only">Toggle theme</span>
       </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end">
       <DropdownMenuItem onClick={() => setTheme("light")}>
         Light
       </DropdownMenuItem>
       <DropdownMenuItem onClick={() => setTheme("dark")}>
         Dark
       </DropdownMenuItem>
       <DropdownMenuItem onClick={() => setTheme("system")}>
         System
       </DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 )
}

// TYPHOGRAPHY
export function Typography() {
 return (
  <div>

   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    🙂h1 👉🏻 Taxing Laughter: The Joke Tax Chronicles
   </h1>
  

   <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    🙂h2 👉🏻 The People of the Kingdom
   </h2>

   <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    🙂h3 👉🏻 The Joke Tax
   </h3>

   <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
    🙂h4 👉🏻 People stopped telling jokes
   </h4>

   <p className="leading-7 [&:not(:first-child)]:mt-6">
    🙂p 👉🏻 The king, seeing how much happier his subjects were, realized the error of
    his ways and repealed the joke tax.
   </p>

   <blockquote className="mt-6 border-l-2 pl-6 italic">
    blockquote 👉🏻 "After all," he said, "everyone enjoys a good joke, so it's only fair that
    they should pay for the privilege."
   </blockquote>

   tabel
   <div className="my-6 w-full overflow-y-auto">
     <table className="w-full">
       <thead>
         <tr className="m-0 border-t p-0 even:bg-muted">
           <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
             King's Treasury
           </th>
           <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
             People's happiness
           </th>
         </tr>
       </thead>
       <tbody>
         <tr className="m-0 border-t p-0 even:bg-muted">
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Empty
           </td>
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Overflowing
           </td>
         </tr>
         <tr className="m-0 border-t p-0 even:bg-muted">
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Modest
           </td>
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Satisfied
           </td>
         </tr>
         <tr className="m-0 border-t p-0 even:bg-muted">
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Full
           </td>
           <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
             Ecstatic
           </td>
         </tr>
       </tbody>
     </table>
   </div>

   <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
    <li>1st level of puns: 5 gold coins</li>
    <li>2nd level of jokes: 10 gold coins</li>
    <li>3rd level of one-liners : 20 gold coins</li>
   </ul>

   <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
     @radix-ui/react-alert-dialog
   </code>

   <p className="text-xl text-muted-foreground">
     A modal dialog that interrupts the user with important content and expects
     a response.
   </p>

   <div className="text-lg font-semibold">Are you absolutely sure?</div>

   <small className="text-sm font-medium leading-none">Email address</small>

   <p className="text-sm text-muted-foreground">Enter your email address.</p>


  </div>
 )
}