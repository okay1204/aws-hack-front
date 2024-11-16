"use client"
// import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import React from 'react'

const Settings = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
  return (
    <div>
        <h1 className='font-bold text-2xl'>Settings</h1>
        <form onSubmit={handleSubmit}>
            <Label>
                
            </Label>
        </form>
    </div>
  )
}

export default Settings;