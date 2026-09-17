   import Hero3D from '../components/Hero3D'

   export default function Home() {
     return (
       <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
         <div>
           <p className="font-mono text-coral text-sm mb-4">
             pune, india — open to freelance work
           </p>
           <h1 className="font-mono text-3xl sm:text-4xl font-medium text-fg leading-tight mb-6">
             I build the frontend, wire up the backend, and keep the database honest.
           </h1>
           <p className="text-muted max-w-md leading-relaxed">
             Two years into shipping a unified business platform at Datadynamx.
             This site is where I'm teaching myself the rest — Three.js, Redis,
             and applied AI — one shipped feature at a time.
           </p>
         </div>
         <Hero3D />
       </section> 
     )
   }