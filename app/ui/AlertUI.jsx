import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertUI(title, description) {
  return (
    <Alert variant="default | destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
