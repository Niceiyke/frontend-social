import { useQuery } from "@tanstack/react-query";


export const useGetQuery =(key,func,param)=>{

    return useQuery({ queryKey: key, queryFn:func,param});
}

export const useGetQueryWithId = (key, func,funcid, param) => {
  return useQuery({ queryKey:key, queryFn: () => func(funcid), param });
};