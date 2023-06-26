"use client"

import ServicesBox from "@components/ServicesBox"
import Shadow from "@components/Shadow"

const page = () => {
  return (
    <div>
      <Shadow />
      <h1 className="about-title">Services.</h1>
      <ServicesBox />
    </div>
  )
}

export default page