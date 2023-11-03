export const MyButton = ({ count, onClick }) => {
  return (
    <>
      <div>
        <img className='avatar' src='./logo192.png' alt='' />
      </div>
      <button onClick={onClick}>Clicked {count} times</button>
    </>
  )
}
