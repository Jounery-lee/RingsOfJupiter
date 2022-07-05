function Write() {
  function handleWrite(event) {
    event.preventDefault();
    const input = event.target.parentElement;
    const title = input[0].value;
    const description = input[1].value;
    const author = input[2].value;
    //https://rings-of-jupiter.herokuapp.com/write
    //http://localhost:3001/crud/write
    fetch("https://rings-of-jupiter.herokuapp.com/crud/write", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "https://rings-of-jupiter.herokuapp.com",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        author: author
      }),
    });
  }
  return (
    <div>
      <form>
        <p>
          <input type="text" placeholder="title" />
        </p>
        <p>
          <textarea placeholder="description" />
        </p>
        <p>
          <input typr='text' placeholder="author" />
        </p>
        <button onClick={handleWrite}>Write</button>
      </form>
    </div>
  );
}

export default Write;
