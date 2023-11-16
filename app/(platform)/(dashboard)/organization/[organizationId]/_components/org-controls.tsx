'use client'

import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { useEffect } from "react"

const Orgcontrol = () => {
    const params = useParams()
    const {setActive } = useOrganizationList();

    useEffect(()=> {
        if(!setActive) return;

        setActive({
            organization: params.organizationId as string
        });
    }, [ setActive, params.organizationId])
  return null
}

export default Orgcontrol
