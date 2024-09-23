import Card from "./Card";
import jsonData from '../assets/data.json';

export default function CardListAll() {
    return (
        <div>
        {jsonData.map((data) => (
            <Card
                key={data.name} 
                thumbnail={data.thumbnail} // Ok.
                name={data.name}
                language={data.language}
                description={data.description}
            />
        ))}
        </div>
    )
}