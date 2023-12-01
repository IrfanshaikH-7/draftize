"use client"
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { Loader, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { defaultImages } from "@/constants/images";

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
                            <Image 
                            src={image.urls.thumb}
                            fill
                            alt="unsplash-img"
                            className="object-cover rounded-sm"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FormPicker
