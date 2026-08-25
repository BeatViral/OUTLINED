import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Home, Jobs, SolutionPage, About } from './pages'
function Layout({ children }: { children: React.ReactNode }) { return <><header><Link className="brand" to="/">OUTLINED</Link><nav><Link to="/jobs">Job map</Link><Link to="/about">About</Link></nav></header><main>{children}</main><footer>OUTLINED · Independent public-job research and solution design.</footer></> }
export default function App() { return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/jobs" element={<Jobs />} /><Route path="/solutions/:slug" element={<SolutionPage />} /><Route path="/about" element={<About />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></Layout> }
