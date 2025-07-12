import { LandingPage } from './components/LandingPage'
import { content } from './content'

function App() {
  return (
    <div className="min-h-screen">
      <LandingPage content={content} />
    </div>
  )
}

export default App
