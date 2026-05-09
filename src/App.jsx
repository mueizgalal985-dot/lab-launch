import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.jsx'
import Experiments from './pages/Experiments.jsx'
import Notebook from './pages/Notebook.jsx'
import Community from './pages/Community.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TempNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

function TempNav() {
  const linkClass = ({ isActive }) =>
    `text-sm transition ${
      isActive ? 'text-ink font-medium' : 'text-mist hover:text-ink'
    }`
  return (
    <nav className="border-b border-rule px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center gap-6 flex-wrap">
        <span className="font-display text-xl text-ink">Lab Launch</span>
        <span className="text-mist text-[10px] uppercase tracking-widest">
          temp nav · replaced in task 5
        </span>
        <div className="ml-auto flex gap-5">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/experiments" className={linkClass}>
            Experiments
          </NavLink>
          <NavLink to="/notebook" className={linkClass}>
            Notebook
          </NavLink>
          <NavLink to="/community" className={linkClass}>
            Community
          </NavLink>
          <NavLink to="/login" className={linkClass}>
            Log in
          </NavLink>
          <NavLink to="/signup" className={linkClass}>
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default App
