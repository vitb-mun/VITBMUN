import React from 'react'

const SponsorsCard = () => {
    const spImg = [
        {
            img: '',
        },
        {
            img: '',
        },
        {
            img: '',
        }
    ]
    return (
        <div className="sponsers bg-white border-[3px] border-gray-300 p-4 rounded-xl shadow-sm">
            <h2 className="text-xl text-center font-semibold mb-4">Sponsors</h2>
            <div className="images flex justify-center gap-9">
                {spImg.map((sponsor,index) => (
                    <div
                        key={index}
                        className="h-20 w-20 rounded-xl shadow-sm border-2 overflow-hidden flex items-center justify-center"
                    >
                        <img src={sponsor.img} alt='' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SponsorsCard