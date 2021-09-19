import sparkle from '../assets/sparkle.png';

export const End = () => {
  return(
      <section className='finish'>
        <div>
          <img src={sparkle} className='sparkle-1 glitter' alt='sparkles'></img>
          <h1 className='thanks-msg'>მადლობა</h1>
          <img src={sparkle}className='sparkle-2 glitter' alt='sparkles'></img>
        </div>
      </section>
  )
}
