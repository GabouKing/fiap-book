export default function Button({nameButton}){
    return(
        <>
            <button 
                className="mt-10 mb-1 text-[#fff] bg-pink-900 rounded-[18px] w-[282px] h-[59px]"
            >
                {nameButton}
            </button>
        </>
    )
}