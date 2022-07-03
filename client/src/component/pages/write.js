function Write() {
  function handleWrite(event) {
    event.preventDefault();
    const input = event.target.parentElement;
    const title = input[0].value;
    const description = input[1].value;
    fetch("https://rings-of-jupiter.herokuapp.com/write", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "https://rings-of-jupiter.herokuapp.com",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
  }
  return (
    <div>
      <form>
        <p>
          <input type="text" placeholder="title" name="title" />
        </p>
        <p>
          <textarea placeholder="description" name="description" />
        </p>
        <button onClick={handleWrite}>Write</button>
      </form>
    </div>
  );
}

export default Write;
