import React from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Skills({ children }: Props) {
  return (
    <div className="flex flex-col items-center border border-purple-500 rounded-lg p-4 w-full h-auto text-purple-500/70">
      {children}
    </div>
  )
}

export default Skills
