import CardItem from './card-item'

export default function Cards({ className, newsFeed }) {
  return (
    <div className={className}>
      {newsFeed.map((news) => (
        <CardItem key={news.source.id} news={news} />
      ))}
    </div>
  )
}