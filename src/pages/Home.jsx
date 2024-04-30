import { useState } from "react"



function Home() {

  const [fromInp, setFRomInp] = useState("")
  const [toInp, setToInp] = useState("")


  return (
    <div className='flex p-6 gap-6 bg-slate-600'>

      <input className="p-3 rounded-xl" type="text" placeholder="From ?" />
      <input className="p-3 rounded-xl" type="text" placeholder="To ?" />
      <input type="date" />
      <input type="date" />
      <button className="bg-blue-500 p-4 rounded-2xl">book</button>

    </div>
  )
}

export default Home