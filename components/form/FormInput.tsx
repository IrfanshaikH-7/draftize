"use client"
import React, { forwardRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { Label } from '../ui/label';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import FromError from './FromError';



interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>
    className?: string;
    defaultValue?: string;
    onBlur?: () => void
}
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    label,
    type,
    placeholder,
    required,
    disabled,
    errors,
    className,
    defaultValue = '',
    onBlur,
}, ref) => {
    const  {pending} = useFormStatus();

    return(
        <div className='space-y-2'>
            <div className='space-y-1'>
                {
                    label ? (
                        <Label 
                        htmlFor={id}
                        className='text-xs font-semibold text-neutral-700'
                        >
                            {label}
                        </Label>
                    ) : null
                }
                <Input 
                onBlur={onBlur}
                defaultValue={defaultValue}
                ref={ref}
                required={required}
                name={id}
                id={id}
                placeholder={placeholder}
                type={type}
                disabled={pending || disabled}
                className={cn(
                    'text-xs px-2 py-1 h-7',
                    className
                )}
                // aria-describeby={`${id} - error`}
                />
            </div>
            <FromError 
            id={id}
            errors={errors}
            />
        </div>
    )
}) ;

FormInput.displayName = "FormInput"