"use client"

import { useRouter } from 'next/navigation'
function PageRouter({page}) {
    const router = useRouter()
    const previewPage = () => {
        if(page === "1"){

        }
        else {
            router.push(`/?page=${Number(page)-1}`)
        }
    }
    return (
       <>
        <button onClick={previewPage} className='border-white border-2 rounded-lg px-4 py-2 cursor-pointer'>preview</button>
        <button onClick={()=>(router.push(`/?page=${Number(page)+1}`))} className='border-white border-2 rounded-lg px-4 py-2 cursor-pointer'>next</button>
       </>
    )
}

export default PageRouter