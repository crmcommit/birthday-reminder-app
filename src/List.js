import React from 'react'

const List = ({people}) => {
    return (
        <>
        {/* iterate through */}
        {people.map((person) => {
            // destrcuture the object
            const {id,name,age,image,email} = person
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
                   {/* <button type='button' className="wishbutton" onClick={() =>console.log('send email')}>Send Wish</button> */}
                   <a href={"mailto:"+email +"?subject=Happy Birthday!&body=Hi%20" + name + "%2C%0D%0A%0D%0AWishing%20you%20a%20very%20happy%20birthday%20!!!%0D%0A%0D%0ARegards%2C%0D%0AABC" } className="wishbutton" target="_blank" rel="noopener noreferrer"> Send Wish</a>
                </span>
                
            </div>
            
            );
        })}
        </>
    )
}

export default List
