
import React from 'react'

const page = async ({params}) => {
  let data = await params
  console.log(data);
  return (
    <div>
      <h1> isme dyanmic id aayegi </h1>
    </div>
  )
}

export default page
