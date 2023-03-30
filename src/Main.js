import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import DataDisplay from './DataDisplay'

const Main = () => {
    let [post, setPosts] = useState([])
    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/posts`)
        //     .then(response => response.json())
        //     .then(data => setPosts(data))
        //     .catch(error => console.log(error))

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setPosts(response.data))
        .catch(error=> console.log(error))
    }, [])


    const data = [{
        name: "Vivo",
        price: "Rs. 34245",
        image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
    },
    {
        name: "Samsung Galaxy s23",
        price: "Rs. 43345",
        image: "https://static-01.daraz.com.np/p/6af99d4718d2ba6cd224d21fde0ae01d.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    },
    {
        name: "Iphone 12 pro",
        price: "Rs. 244345",
        image: "https://static-01.daraz.com.np/p/87d9253bc4d17b4ef924b7a63d254880.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    },
    {
        name: "Samsung Galaxy A13",
        price: "Rs. 2445",
        image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
    }

    ]
    return (
        <>
            {/* <DataDisplay name="Kishor"
                address="Kathmandu" />

            <DataDisplay name="Pravin Rai"
                address="Budanilkantha" />

            <DataDisplay name="Reeya Chongbang"
                address="Dhankuta" />
            <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-evenly' }}>


                {
                    data.map(product => {
                        return <Card item={product} />

                    })
                }

                
            </div> */}

            {
                post.map(post => {
                    return <>
                    <h1>{post.id}:
                    <Link to={`/${post.id}`}>{post.title}
                    </Link></h1>
                    {/* <p>
                        {post.body}
                        <br/>
                    </p> */}

                    </>
                })
            }

        </>
    )


}

export default Main
