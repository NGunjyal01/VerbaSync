import { Button } from "@/components/ui/button"
import UploadForm from "./components/uploadForm"

const App = () => {
  return (
    <div>
      <Button className={'bg-red-300'}>Click Me</Button>
      <UploadForm/>
    </div>
  )
}

export default App
