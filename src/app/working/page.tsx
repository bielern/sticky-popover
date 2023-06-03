'use client'
import { Popover } from '@headlessui/react'
import _ from 'lodash'

const numbers = _.range(1, 21)

function NumberExplanation({number}: {number: number}) {
  return (
    <Popover className='relative group'>
      <Popover.Button className="text-left">
        {number}
      </Popover.Button>
      <Popover.Panel static className="hidden group-hover:block absolute -top-5 left-0">
        <div className="p-5 border border-gray-600 bg-white shadow-lg rounded-md w-[24ch] text-left">
          <h2 className='text-5xl font-bold mb-6'>The Number {number}</h2>
          <p className='font-normal text-gray-700 text-2xl'>
            The number {number} is an important number. Without it, the number {number + 1} would feel a bit lost.
          </p>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default function Home() {
  return (
    <main className="pt-8">
      <h1 className='text-3xl pl-10 mb-6 text-gray-600'>Multiplication Table</h1>
      <table className='text-right tabular-nums border-spacing-0 border-collapse'>
        <thead>
          <tr className="text-5xl font-bold">
            <th className="p-5 sticky top-0 left-0 z-10 bg-white"></th>
            {numbers.map((number) =>
              <th key={number} className="sticky top-0 bg-white hover:z-10">
                <div className='border-b-2 border-gray-400 p-5'>
                  <NumberExplanation number={number} />
                </div>
              </th>)}
          </tr>
        </thead>
        <tbody>
          {numbers.map((number) => (
            <tr key={number} className="text-5xl">
              <td className="sticky left-0 hover:z-20 bg-white font-bold">
                <div className='border-r-2 border-gray-400 p-5'>
                  <NumberExplanation number={number} />
                </div>
              </td>
              {numbers.map((number2) => (
                <td key={number2} className="p-5">{number * number2}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
