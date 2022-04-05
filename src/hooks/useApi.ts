import { useEffect, useState } from "react";

type statusTypes='idle'|'success'|'err'|'pending';

const useApi=<T>(asyncService:()=>Promise<T>)=>{

     const [data,setData]=useState<T|null>(null);
     const [error,setError]=useState<string|null>(null);
     const [status,setStatus]=useState<statusTypes>('idle');

     useEffect(()=>{
          setStatus('idle');
          setError(null);
          asyncService()
          .then(data=>{
               setData(data);
               setStatus('success')
          })
          .catch(error=>{
               console.log(error);
               setError(error);
          })
     },[])


     return{
          data,
          isLoading:status==='pending',
          isSuccess:status==='success',
          error


     }

}

export default useApi;