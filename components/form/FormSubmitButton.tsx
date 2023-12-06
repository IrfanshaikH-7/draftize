"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitButtonProps {
  children: React.ReactNode;
  disabled?:boolean;
  className?: string;
  variant?: "default" | 'destructive' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary'
}
const FormSubmitButton = ({
  children,
  disabled,
  className,
  variant = "primary"
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending || disabled}
      variant={variant}
      size='sm'
      className={className}
      type="submit"
    >
      {children}
    </Button>
  )
}

export default FormSubmitButton
