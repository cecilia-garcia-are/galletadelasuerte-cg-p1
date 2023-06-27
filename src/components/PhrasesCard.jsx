const PhrasesCard = ({ data, textColor}) => {

    return(
        
        <article className="cardRandom" style={{color: textColor}}>


            
            <h1>{data.phrase}</h1>
            <h2>{data.author}</h2>
            
            

        
        </article>
    )
}

export default PhrasesCard
