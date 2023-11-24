"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";

const Form = () => {
    const initialState = { errors: {}, message: '' };
    const [state, dispatch] = useFormState(create, initialState)
    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <input
                    type="text"
                    id="title"
                    name='title'
                    required
                    placeholder="enter board name"
                    className="border p-1"
                />
                {
                    state?.error?.title ? (
                        <div>
                            {state?.error?.title.map((err: string) => (
                                <p className="">
                                        {err}
                                </p>
                            ))
                            }
                        </div>
                    ) : ('')
                }
            </div>

            <Button type="submit" variant='default'>
                submit
            </Button>
        </form>
    )
}

export default Form
