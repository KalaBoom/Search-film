import React from 'react'
import './Films.css'

function Pages({count, title, onSendData, number}) {

    const minPages = 5

    let numPages = []
    let countPages = Math.ceil(count/10)
    let addPages = countPages - number > minPages ? minPages : countPages
    
    let nextPage = number + 1
    
    let i = countPages - number > minPages ? number : countPages - minPages

    for(; (i < number + addPages) && i <= countPages; i++) numPages.push(i)
    
    if(number !== 1) {
        numPages.unshift(NaN)
        numPages.unshift(1)
    }

    if(number < countPages - minPages) {
        numPages.push(NaN)
        numPages.push(countPages)
    }

    return (
        <ul className="pages">
            {number <= 1 ? <li className="pages__unactive-arrow">&lt;</li>  : <li className="pages__active-arrow" onClick={onSendData.bind(null,title, numPages[2]-1)}>&lt;</li>}
    
            {
                numPages.map((num,index) => {
                    if(isNaN(num)) return <li key={index} className="dots">...</li>
                    if(num === number) return <li key={index} className="pages__active-page">{num}</li>
                    return <li key={index} onClick={onSendData.bind(null, title, num)} className="pages__element">{num}</li>
                })
            }
            
            {number !== countPages ? <li className="pages__active-arrow" onClick={onSendData.bind(null,title, nextPage)}>&gt;</li>: 
            <li className="pages__unactive-arrow">&gt;</li>} 
        </ul>
    )
}

export default Pages