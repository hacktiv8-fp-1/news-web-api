import CardItem from "./CardItem";

export default function Cards({ className, newsFeed }) {
  return (
    <div className={className}>
      <CardItem newsData={newsFeed} />
    </div>
  );
}
