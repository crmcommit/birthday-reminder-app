import React from 'react'

const List = ({people}) => {
    return (
        <>
        {/* iterate through */}
        {people.map((person) => {
            // destrcuture the object
            const {id,name,age,image} = person
            return (
            <div>
                <span>
                <article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>                                  
                    </div>               
                </article>
                </span>
                <span>
                   <button type='button' className="wishbutton" onClick={() =>console.log('send email')}>Send Wish</button>
                </span>
                
            </div>
            
            );
        })}
        </>
    )
}

export default List
