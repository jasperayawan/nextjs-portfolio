import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <section>
      <div
        className="flex flex-col gap-10 min-h-screen justify-center"
        id="project"
      >
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="uppercase">My work</span>
          <h1 className="__title">Projects</h1>
          <p className="__prgrp">
            Following projects showcases my skills and experience through
            real-world examples of my work Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://jasperayawan.github.io/eLTECH/">
              <Image
                src="/assets/images/eltech.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">E-Learning Tech</h2>
              <p className="text-zinc-400">
                Create an eLearning website for society to maintain their
                education through online teaching, which contains a variety of
                courses.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-red-500 px-2 text-slate-200">HTML</span>
                <span className="bg-blue-500 px-2">CSS</span>
                <span className="bg-yellow-500 px-2 text-slate-800">
                  Javascript
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://instagram-clone-byjasper.netlify.app/">
              <Image
                src="/assets/images/insta.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">
                Instagram UI clone
              </h2>
              <p className="text-zinc-400">
                I clone instagram To further enhance frontend Skills using
                Reactjs
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500 px-2 text-slate-200">Reactjs</span>
                <span className="bg-blue-700 px-2">Tailwindcss</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://jasperayawan.github.io/miniP2/">
              <Image
                src="/assets/images/harvesthub.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">Harvest Hub</h2>
              <p className="text-zinc-400">
                To provide an online platform for farmers to sell their products
                directly to consumers
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-yellow-500 px-2 text-slate-800">
                  Javascript
                </span>
                <span className="bg-violet-700 px-2">Bootstrap</span>
                <span className="bg-blue-700 px-2">Messanger API</span>
                <span className="bg-yellow-600 px-2 text-slate-800">
                  Firebase
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://itstodolistreact.netlify.app/">
              <Image
                src="/assets/images/Todo.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">Todo list</h2>
              <p className="text-zinc-400">
                Todo list - create now a list to manage your time and works.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500 px-2 text-slate-200">Reactjs</span>
                <span className="bg-blue-700 px-2">Tailwindcss</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://justkeep-yournotes.netlify.app/">
              <Image
                src="/assets/images/ap.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">App keeper</h2>
              <p className="text-zinc-400">
                Simple App keeper for client - use for creating or keeping notes
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500 px-2 text-slate-200">Reactjs</span>
                <span className="bg-blue-700 px-2">Tailwindcss</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://bayangan.fun/">
              <Image
                src="/assets/images/bayngan.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">Hotel Booking System</h2>
              <p className="text-zinc-400">
                This is our capstone project at kodego and we've got a best in capstone in this project.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-red-600 px-2 text-slate-200">Laravel API</span>
                <span className="bg-violet-700 px-2">Bootstrap</span>
                <span className="bg-green-500 px-2 text-slate-800">Takt to API</span>
                <span className="bg-blue-600 px-2 text-slate-100">Stripe</span>
                <span className="bg-blue-500 px-2 text-slate-950">Paypal</span>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://justkeep-yournotes.netlify.app/">
              <Image
                src="/assets/images/ecommercejs.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">Ecommerce app UI</h2>
              <p className="text-zinc-400">
               Juice & fuits ecommerce app this is just a UI 
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-500 px-2 text-slate-200">Reactjs</span>
                <span className="bg-blue-700 px-2">Tailwindcss</span>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col gap-2 relative bg-slate-950 text-zinc-300 shadow-lg rounded-md overflow-hidden">
            <Link href="https://mngementsystem.000webhostapp.com/">
              <Image
                src="/assets/images/mngmentsystem.png"
                alt="E-Learning website"
                width={400}
                height={200}
              />
            </Link>
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-semibold text-slate-300">Employee management system CRUD</h2>
              <p className="text-zinc-400">
                This is an employee management system where we can manage our employees.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-red-600 px-2 text-slate-200">Laravel API</span>
                <span className="bg-violet-700 px-2">Bootstrap</span>
                <span className="bg-green-500 px-2 text-slate-800">AJAX</span>
                <span className="bg-blue-600 px-2 text-slate-100">JQUERY</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
