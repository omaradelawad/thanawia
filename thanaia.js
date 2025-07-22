let form = document.querySelector("form") ; 
let input = document.querySelector("form input") ; 
let button = document.querySelector("form button") ;   





form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/getNumber/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: input.value.trim()
        })
    })
    .then(res => res.json()) 
    .then(data => {
        console.log("Response:", data);
    })
    .catch(err => {
        console.error("Error:", err);
    });
});