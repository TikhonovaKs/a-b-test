import '../index.css';

export default function More({handleClick}) {
  return (
    <div className='more'>
      <p className="more_text">We offer various services for organizing your tour to any part of the world</p>
      <button className="more_button" onClick={handleClick}>
        Learn more
      </button>
    </div>
  );
}
