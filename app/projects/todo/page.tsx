"use client"

import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion"

function TodoPage(){
 return (
  <div> 
   <Header />
   <h1>todo app</h1>
   <p>simple todo app with nextjs shadcnui and firebase </p>

   <ProjectDetails />
  </div>
 )
}

function Header(){
 return (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="logo text-xl font-bold">Logo</div>
      {/* <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav> */}
    </div>
  </header>
 )
}

function ProjectDetails() {
 return (
   <Accordion type="single" collapsible className="w-full">
     <AccordionItem value="item-1">
       <AccordionTrigger>ShadcnUI Components</AccordionTrigger>
       <AccordionContent>
         Checkbox, Card, Form
       </AccordionContent>
     </AccordionItem>
     <AccordionItem value="item-2">
       <AccordionTrigger>Firebase Action</AccordionTrigger>
       <AccordionContent>
         create task todo, delete task todo
       </AccordionContent>
     </AccordionItem>
   </Accordion>
 )
}

export default TodoPage;