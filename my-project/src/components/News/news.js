import { dataDummies } from "@/data-dummies"
import Cards from "../Card/cards"

export default function News() {
  return (
    <div>
      <h2>News</h2>
      <Cards
        className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center'
        newsFeed={dataDummies}
      />
    </div>
  )
}