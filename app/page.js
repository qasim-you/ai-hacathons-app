import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen  from-blue-100 via-white to-indigo-100">
      <Hero />
      <Dashboard />
    </main>
  )
}

