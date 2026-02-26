import { Minimize2 } from "lucide-react"

export function UploadWidgetHeader() {
  return (
    <div>
      <div className="w-full p-4 py-2 bg-white/2 border-bs-zinc-800 flex items-center justify-between">
      <span>Upload files</span>
      <button>
        <Minimize2 strokeWidth={1.5} className="sizee-4"/>
      </button>
      </div>
    </div>
  )
}
