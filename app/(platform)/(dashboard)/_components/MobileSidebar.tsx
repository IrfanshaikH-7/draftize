"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
    const pathname = usePathname();
    const  [isMounted, setIsMounted ] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true)
    },[])

    useEffect(() => {
        onClose()
    },[pathname, onClose])

    if(!isMounted){
        return null;
    }
  return (
    <>
    <Button className='block md:hidden mr-2' onClick={onOpen} variant='ghost' size='sm'>
        <Menu className='h-4 w-4'
        />
    </Button>
    <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side='left' className='p-2 pt-10'>
            <Sidebar storageKey='t-sidebar-mobile-state'/>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default MobileSidebar
