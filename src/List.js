import React from "react";

const List = ({people}) => {
    return (
        <div className="people-list">
        {people.map((person)=>{
            const { id, name, birth_date, image } = person;
            const today = new Date();
            const birthDate = new Date(birth_date);
            const month = today.getMonth() - birthDate.getMonth();
            let age = today.getFullYear() - birthDate.getFullYear();

            // Skip if today is not the birthday
            if( ( today.getMonth() != birthDate.getMonth() ) && ( today.getDate() != birthDate.getDate() ) ) {
                return false;
            }

            // if (month == 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            //     age--;
            // }

            return (
                <article key={id} className='person'>
                    <img src={image} alt={name}/>
                    <div className="person-details">
                        <h3>{name}</h3>
                        <p>Birth Date: {birthDate.toLocaleDateString("en-US")}</p>
                    </div>
                </article>
            );
        })}
        </div>
    );
};

export default List;