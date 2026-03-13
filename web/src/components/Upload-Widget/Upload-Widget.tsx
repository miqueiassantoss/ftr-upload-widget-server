import { Header } from "./Header";
import { Dropzone } from "./Dropzone";
import { UploadList } from "./Upload-List";

export function UploadWidget(){
  return(
    <div className="bg-zinc-900 w-full overflow-hidden max-w-90 rounded-xl shadow-shape">
      <Header/>

      <div className="flex flex-col gap-4 py-3">
        <Dropzone/>

      <div className="h-0.5 bg-zinc-800 border-t border-black/50"></div>

        <UploadList/>
      </div>
    </div>
  )
}


