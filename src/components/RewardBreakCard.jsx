import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardSmall({ breakpoint, onDelete }) {
  const { thresh, mult } = breakpoint
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Threshold: {thresh}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Multiplier: {mult}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => onDelete()}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
