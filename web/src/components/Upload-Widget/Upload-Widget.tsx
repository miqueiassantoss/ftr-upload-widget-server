import * as Collapsible from "@radix-ui/react-collapsible"
import { Header } from "./Header"
import { Dropzone } from "./Dropzone"
import { UploadList } from "./Upload-List"
import { useState } from "react"
import { UploadWidgetMinimizedButton } from "../Upload-Widget-Minimized-Button"

export function UploadWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)


  return (
    <Collapsible.Root onOpenChange={setIsWidgetOpen}>
      <div className="bg-zinc-900  overflow-hidden w-90 rounded-xl shadow-shape">

      {!isWidgetOpen && <UploadWidgetMinimizedButton/>}

        <Collapsible.Content>
          <Header />

          <div className="flex flex-col gap-4 py-3">
            <Dropzone />

            <div className="h-0.5 bg-zinc-800 border-t border-black/50"></div>

            <UploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  )
}
