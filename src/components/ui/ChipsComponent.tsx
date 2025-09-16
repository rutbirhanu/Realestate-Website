type ChipsComponentProps = {
    type: string,
    bgColor:string
}

export const ChipsComponent = ({type, bgColor}: ChipsComponentProps) => {
    return (
        <div className={`${bgColor} rounded-3xl text-black w-fit px-4 py-[2px] text-sm border-gray-400 border-[1px]`}>
            {type}
        </div>
    )
}