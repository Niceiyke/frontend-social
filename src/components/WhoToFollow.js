import React from 'react'
import { Avatar,Button } from '@mui/material'

const WhoToFollow = () => {
  return (
    <div className='rounded-2xl bg-sidebar mt-5'>
    <h2 className='text-xl font-extrabold ml-4'>Who To Follow </h2>
    <div >
        <div className='flex mt-5 items-center'>
        <Avatar className='mb-2 ml-4' sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        
            <div className='pl-2.5 mb-2'>
                <h2 className='font-bold '>David</h2>
                 <p className='text-gray-600'>@diyke</p>
            </div>
            
            <Button className='bg-[#0f1419] text-white border-none font-bold rounded-2xl w-20 h-10 mt-5 ml-auto mb-2 mr-2'>Follow</Button>
        </div>
        
    </div>
    <div >
        <div className='flex mt-5 items-center'>
        <Avatar className='mb-2 ml-4' sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        
            <div className='pl-2.5 mb-2'>
                <h2 className=' font-bold '>David iyke</h2>
                 <p className='text-gray-600'>@diyke</p>
            </div>
            
            <Button className='bg-[#0f1419] text-white border-none font-bold rounded-2xl w-20 h-10 mt-5 ml-auto mb-2 mr-2'>Follow</Button>
        </div>
        
    </div>
    <div >
        <div className='flex mt-5 items-center'>
        <Avatar className='mb-2 ml-4' sx={{ width: 70, height: 70 }} src='https://img.freepik.com/free-photo/indoor-shot-glad-young-bearded-man-mustache-wears-denim-shirt-smiles-happily_273609-8698.jpg?size=626&ext=jpg&ga=GA1.2.497941786.1679395633&semt=sph'/>
        
            <div className='pl-2.5 mb-2'>
                <h2 className='font-bold '>David</h2>
                 <p className='text-gray-600'>@diyke</p>
            </div>
            
            <Button className='bg-[#0f1419] text-white border-none font-bold rounded-2xl w-20 h-10 mt-5 ml-auto mb-2 mr-2'>Follow</Button>
        </div>
        
    </div>

</div>
  )
}

export default WhoToFollow