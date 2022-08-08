import './Loading.css';

function Loading() {
    const msg = 'Loading...';
    const loading = msg.split('').map((char) => <span>{char}</span>)
    
  return (
    <div className='loading-screen'>{loading}</div>
  )
}

export default Loading