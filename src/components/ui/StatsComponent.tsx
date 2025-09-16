type StatsComponentType = {
    stats: string,
    achievements:string
}

export const StatsComponent = ({stats, achievements} : StatsComponentType) => {
    return (
        <div className="flex flex-col justify-center items-center leading-normal">
            <h2 className="text-3xl font-bold">{stats}</h2>
            <p className="text-gray-500 text-sm">{achievements}</p>
        </div>
    )
}