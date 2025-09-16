type InputComponentProps = {
    label: string,
    placeholder:string
}

export const InputComponent = ({ label, placeholder } : InputComponentProps) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm italic font-bold">{label}</label>
            <input type="text" placeholder={placeholder} className="border-[1px] outline-none rounded-4xl px-3 py-1 bg-black/5 border-black/10 my-1"/>
        </div>
    )
}