document.getElementById("hello-btn").addEventListener("click", async () => {
  const output = document.getElementById("hello-output");
  output.textContent = "Loading...";
  try {
    const res = await fetch("/api/hello");
    const data = await res.json();
    output.textContent = data.message;
  } catch (err) {
    output.textContent = "Something went wrong calling the API.";
  }
});
