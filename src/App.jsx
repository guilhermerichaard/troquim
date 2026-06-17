import TroquimAdmin from './TroquimAdmin.jsx'

export default function App() {
  const path = window.location.pathname
  return <TroquimAdmin initialScreen={path.includes('admin') ? 'admin' : 'cliente'} />
}
