"use client"
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { Check, Loader, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { defaultImages } from "@/constants/images";
import Link from "next/link";
import FromError from "./FromError";

interface FormPickerProps {
    id: string;
    error?: Record<string, string[] | undefined>
}
const FormPicker = ({
    id,
    error
}: FormPickerProps
) => {
    const  {pending} = useFormStatus();

    const [images, setImages] = useState<Array<Record<string, any>>>(defaultImages)
    const [loading, setLoading] = useState(true)
    const [selectImageID, setSelectImageID] = useState(null)

    useEffect(() => {
        const fetchImages = async() =>{
            try {
                const results = await unsplash.photos.getRandom({
                    collectionIds: ["317099"],
                    count: 9,
                });
                if( results && results.response){
                    const resultImages = (results.response as Array<Record<string, any>>);
                    setImages(resultImages);
                }else{
                    console.error("Failed to get images from unsplash.");
                    
                }
            } catch (error) {
                console.log(error);

                setImages(defaultImages)
            } finally {
                setLoading(false)
            }
        }

        fetchImages()

    },[])
    if(loading){
        return(
            <div className="p-6 flex item-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin text-sky-700 "/>
            </div>
        )
    }
    return (
        
        <div className="relative">
            <div className="grid grid-cols-3 gap-2 mb-2">
                {
                    images.map((image) => (
                        <div 
                        key={image.id}
                        className={cn('cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted',
                        pending && 'opacity-50 hover:opacity-50 cursor-auto'
                        )}
                        onClick={() => {
                            if(pending) return;
                            setSelectImageID(image.id);
                        }}
                        >
                            <input type="radio"
                            id={id}
                            name={id}
                            checked={selectImageID === image.id}
                            disabled={pending}
                            className="hidden"
                            value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
                            />
                            <Image 
                            src={image.urls.thumb}
                            fill
                            alt="unsplash-img"
                            className="object-cover rounded-sm"
                            />
                            {selectImageID === image.id && (
                                <div className="absolute inset-y-0 h-full w-full bg-black/20 flex items-center justify-center">
                                    <Check className="h-4 w-4 text-white"/>
                                </div>
                            )}
                            <Link
                            href={image.links.html}
                            target="_blank"
                            className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate hover:underline text-white p-1 bg-black/50"
                            >
                                {image.user.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <FromError id="image" errors={error} />

        </div>
    )
}

export default FormPicker
