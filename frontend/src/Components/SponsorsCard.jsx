import React from 'react'

const SponsorsCard = (props) => {
    const spImg = [
        {
            img: props.sponsor1 ? props.sponsor1 : '',
        },
        {
            img: props.sponsor2 ? props.sponsor2 : '',
        },
        {
            img: props.sponsor3 ? props.sponsor3 : '',
        }
    ]
    return (
        <div className="sponsers bg-white border border-gray-300 rounded-lg h-max border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl text-center font-semibold mb-4">Sponsors</h2>
            <div className="images flex justify-center gap-3">
                {spImg.filter(sponsor => sponsor.img !== '').map((sponsor, index) => (
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