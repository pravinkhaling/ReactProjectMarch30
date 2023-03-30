import React from 'react'

const Card = (item) => {
    return (
        <>
            <div className='card' style={{
                //height: "200px",
                width: "150px",
                padding: '10px',
                border: '3px solid gray',
                borderRadius: '10px',
            }}>
                <div className='card-image' style={{ height: "150px" }}>
                    <img src={item.image} alt={item.name} style={{ height: '100%' }} />

                </div>
                <div className='card-details'>
                    <h4>{item.name}</h4>
                    <h4>{item.price}</h4>
                </div>
            </div>


        </>
    )
}

export default Card
