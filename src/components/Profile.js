import React from 'react'


function Profile(props) {
    console.log(props)
    return(
        <div className='profile-info'>
            <h1 className='name'>{props.currentProfile.name.first} {props.currentProfile.name.last}</h1>
            <h2 className='info-tag'>From: {props.currentProfile.city}, {props.currentProfile.country}</h2>
            <h2 className='info-tag'>Job Title: {props.currentProfile.title}</h2>
            <h2 className='info-tag'>Employer: {props.currentProfile.employer}</h2>
            <h2 className='info-tag'>Favorite Movies: 
                <ol className='list'>
                    <li className='list-item'>1. {props.currentProfile.favoriteMovies[0]}</li>
                    <li  className='list-item'>2. {props.currentProfile.favoriteMovies[1]}</li>
                    <li  className='list-item'>3. {props.currentProfile.favoriteMovies[2]}</li>
                </ol>
            </h2>
            
        </div>
    )
}

export default Profile
