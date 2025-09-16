type ChipsComponentProps = {
    type :string
}

export const ChipsComponent = ({type}: ChipsComponentProps) => {
    return (
        <div className="bg-white rounded-3xl text-black w-fit px-4 py-1">
            {type}
        </div>
    )
}