import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center '>

                {/* <button >
                    Add recipes
                </button> */}

                <Link to = "/createrecipe" className='mx-auto bg-orange-600 p-3  '>
                    Add Recipes 
                </Link>
            </div>
        </div>
    )
}

export default Home
