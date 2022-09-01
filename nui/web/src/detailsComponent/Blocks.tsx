interface Props{
  svg: string;
  text: string;
}

const Blocks = ({svg, text} : Props) => {
  return (
    <div className='block'> 
      <svg > {svg} </svg>



<p className="blockTxt"> {text} </p>


    </div>
  )
}

export default Blocks

