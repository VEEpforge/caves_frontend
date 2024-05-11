import React, { useState } from 'react'
import StrainForm from './StrainForm'
import { Button } from '@/components/ui/button'
import { ArrowLeftCircle, PlusIcon } from 'lucide-react'
import BodyLayout from '@/components/BodyLayout'
import { NavLink } from 'react-router-dom'

const AddStrain = () => {

  return (
    <>
			<div className='flex mt-10 mx-5 justify-end'>
        <h1 className='lg:text-3xl text-lg font-bold flex-1'>Strain Collection</h1>
        <NavLink
          key={'strain-collection-add'}
          to={'/strain-collection'}
        >
          <Button className='pl-2'><ArrowLeftCircle className='h-4' />Cancel</Button>
        </NavLink>
      </div>

			<BodyLayout title={'Add Strain'} content={<StrainForm />} description={'Provide the strain information below.'} />
		</>
  )
}

export default AddStrain