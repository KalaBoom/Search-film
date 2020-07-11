import React from 'react'
import './Films.css'

function useInputSearch() {
    const [searchValue, setSearch] = React.useState('')
    return {
        value: searchValue,
        onChange: event => setSearch(event.target.value)
    }
}

function Search({onSendData}) {
    const input = useInputSearch()

    return (
        <div className='search'>
            <form onSubmit={event => {
                    event.preventDefault()
                    onSendData(input.value)
                }}>
                <div className="search-body">
                    <input id='inputSearch' {...input} className='search__input' placeholder='Enter the film'/>
                    <button type='submit' className='search__button'></button>
                </div>
            </form>
        </div>
    )
}

export default Search