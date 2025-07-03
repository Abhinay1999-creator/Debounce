import React, { useState, useEffect } from 'react'

const Debounce = () => {

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const[debounced,setDebounced]=useState('');


    const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`)
        const pokemon = await response.json();
        const newData = pokemon.results.map((item) => item.name)
        setData(newData)
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebounced(input)
        }, 1500);

        return ()=> clearTimeout(timer)
    },[input])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const newData = data.filter((data)=>data.toLowerCase().includes(debounced.toLowerCase()))

    return (
        <div>
            <div>
                <input type='text' onChange={handleChange}></input>
                {
                    newData.map((item) => (
                        <>
                            <div>
                                <ol>{item}</ol>
                            </div>
                        </>

                    ))
                }
            </div>
        </div>
    )
}

export default Debounce