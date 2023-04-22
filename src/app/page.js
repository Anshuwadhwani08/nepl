import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="bg-white">
  <div class="grid grid-cols-2 gap-4" >
  <img
  src="\images\Screenshot (28).png" alt='dashboard' class="max-w-lg bg-white p-10  dark:bg-neutral-1000"
   />
  
    <div grid grid-flow-col auto-cols-max>    <h1 class="mt-20 text-3xl font-bold tracking-tight text-yellow-500 sm:text-5xl">WEBSITE </h1>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-grey-900 sm:text-5xl">UNDER MAINTAINANCE </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we are working on it.</p>
  </div>
  </div>
    </div>

  

   </>
  )
}
