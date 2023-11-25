import { XCircle } from "lucide-react"
interface FromErrorProps {
    id: string;
    errors?:Record<string, string[] | undefined>
}
const FromError = ({
    id,
    errors
}: FromErrorProps) => {
    if(!errors){
        return null
    }

  return (
    <div
    id={`${id}-Error`}
    aria-live="polite"
    className="mt-2 text-xs text-rose-500"
    >
    {
        errors?.[id]?.map((err: string) => (
            <div key={err}
            className="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm"
            >
                <XCircle className="w-4 h-4 mr-2 " />
                {err}
            </div>
        ))
    }
    </div>
  )
}

export default FromError
