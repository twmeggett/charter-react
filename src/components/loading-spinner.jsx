import { Spinner } from "@/components/ui/spinner";

export function LoadingSpinner() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Spinner position="center" />
    </div>
  )
}
