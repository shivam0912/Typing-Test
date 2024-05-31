
const TypingTest = () => {

    const paragraph =  ` A 50-word story is a piece of fiction written in exactly 50 words, with no more, no less. It’s a concise and challenging format that requires the writer to be precise and creative. The goal is to convey a complete narrative or idea within the 50-word limit.`;

  return (

    

    <div>

        <div className="test"></div>
        <div className="result">
            <p>Time Left: </p>
            <p>Mistakes: </p>
            <p>WPM: </p>
            <p>CPM: </p>
            <button>Try Again</button>

        </div>
    </div>
  )
}

export default TypingTest