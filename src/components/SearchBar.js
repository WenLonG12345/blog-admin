import React from 'react'

export default function SearchBar() {
  return (
    <form>
      <input className='border border-gray-500 outline-none focus:ring-1 ring-blue-500 w-56 rounded mx-2 p-1' placeholder='Search...' />
    </form>
  )
}
