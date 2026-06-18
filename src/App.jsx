import TroquimAdmin from './TroquimAdmin.jsx'

export default function App() {
  const path = window.location.pathname
  const initialScreen = path.includes('admin') ? 'admin' : path.includes('agendar') ? 'agendar' : 'cliente'
  return <TroquimAdmin initialScreen={initialScreen} />
}
