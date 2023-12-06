"use client"

import { CreateBoard } from "@/actions/create-board/schema";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { FormInput } from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { toast } from "sonner";
import FormPicker from "./FormPicker";
import { ElementRef, useRef } from "react";
import { useRouter } from "next/navigation";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number
}
const FormPopover = ({
    children,
    side = 'right',
    align,
    sideOffset = 0
}: FormPopoverProps) => {
    const closeRef = useRef<ElementRef<'button'>>(null);
    const router = useRouter()
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            toast.success('Board created')
            closeRef.current?.click();
            router.push(`/board/${data.id}`)
        },
        onError: (err) => {
            toast.error(err)
        }
    });
    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;
        const image = formData.get('image') as string;
        console.log(image)

        execute({title, image})
    }
  return (
    <Popover>
        <PopoverTrigger>
            {children}
        </PopoverTrigger>
        <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
        >
            <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                Create board
            </div>
            <PopoverClose asChild ref={closeRef} >
                <Button
                className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600 "
                variant='ghost'
                >
                    <X  className="h-4 w-4 "/>
                </Button>
            </PopoverClose>
            <form action={onSubmit} className="space-y-4">
                <div className="space-y-4">
                    <FormPicker 
                    id="image"
                    error={fieldErrors}
                    />
                    <FormInput 
                    id="title"
                    label="title"
                    type="text"
                    errors={fieldErrors}
                    />
                </div>
                <FormSubmitButton 
                className="w-full"
                >
                    Create
                </FormSubmitButton>
            </form>
        </PopoverContent>
      
    </Popover>
  )
}

export default FormPopover
