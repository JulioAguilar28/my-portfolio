import React from 'react'
import Card from './Card.tsx'
import { FaVuejs } from 'react-icons/fa'
import {
  SiNuxtdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si/'

function Skills() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-white/80 text-2xl self-start">My Skills</h2>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <div className="flex flex-col items-center gap-y-2">
            <FaVuejs size={80} />
            <p className="text-xl">Vuejs</p>
          </div>
        </Card>
        <Card>
          <SiNuxtdotjs size={80} />
          <p className="text-xl">Nuxtjs</p>
        </Card>
        <Card>
          <SiTypescript size={80} />
          <p className="text-xl">Typescript</p>
        </Card>
        <Card>
          <SiJavascript size={80} />
          <p className="text-xl">Javascript</p>
        </Card>
        <Card>
          <SiHtml5 size={80} />
          <p className="text-xl">HTML</p>
        </Card>
        <Card>
          <SiCss3 size={80} />
          <p className="text-xl">CSS</p>
        </Card>
      </div>
    </section>
  )
}

export default Skills
