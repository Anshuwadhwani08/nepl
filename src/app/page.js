import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <>
   
   <div className="bg-white">
  <div class="grid grid-cols-2 gap-4 px-2 py-12" >
  <img
  src="images\20945385.jpg" alt='dashboard' class="max-w-lg p-10  dark:bg-neutral-1000"
   />
  
    <div grid>    <h1 class="mt-20 text-3xl font-bold tracking-tight text-blue-500 sm:text-5xl">WEBSITE </h1>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-grey-900 sm:text-5xl">UNDER MAINTAINANCE </h1>
    <p class="mt-6 text-base leading-7 text-gray-600"> We are working on it. We'll be back soon</p>
  </div>
  </div>
    </div>

  

   </>
  )
}
