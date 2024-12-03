import React from "react";
import { Button, Alert, AlertTitle, AlertDescription } from "./";
import { AlertTriangle } from "lucide-react";

interface ErrorDisplayProps {
  title: string;
  description: string;
  onAction?: () => void;
  actionLabel?: string;
  variant?: "destructive" | "default"; // Alert variant
  icon?: React.ReactNode; // Custom icon
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  title,
  description,
  onAction,
  actionLabel = "Retry",
  variant = "default",
  icon,
}) => {
  return (
    <Alert variant={variant}>
      {icon || <AlertTriangle className="h-4 w-4" />}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        <p>{description}</p>
        {onAction && (
          <Button variant="outline" onClick={onAction} className="w-fit">
            {icon &&
              React.cloneElement(icon as React.ReactElement, {
                className: "mr-2 h-4 w-4",
              })}
            {actionLabel}
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorDisplay;
