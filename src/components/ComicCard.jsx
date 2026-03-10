export default function ComicCard({ comic }) {

    const { title, thumb } = comic;

    return (
        <div className="comic col">
            <img src={thumb} alt={title} />
            <h5>{title}</h5>
        </div>
    )
}