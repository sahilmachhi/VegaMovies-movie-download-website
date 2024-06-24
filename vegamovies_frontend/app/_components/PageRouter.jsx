"use client"
import { useRouter } from 'next/navigation'
function PageRouter({page,url}) {
    const router = useRouter()
    console.log("this is url",url)

    const previewPage = () => {
        if(page === "1"){

        }
        else {
            router.push(`${url ? `${url}` : ''}/?page=${Number(page) - 1}`);
        }
    }

    const nextPage= () => {

        router.push(`${url ? `${url}` : ''}/?page=${Number(page) + 1}`);
    }
    return (
       <>
        <button onClick={previewPage} className='border-white border-2 rounded-lg px-4 py-2 cursor-pointer'>preview</button>
        <button onClick={nextPage} className='border-white border-2 rounded-lg px-4 py-2 cursor-pointer'>next</button>
       </>
    )
}

export default PageRouter