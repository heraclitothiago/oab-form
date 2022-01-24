document.querySelector("a")
    .addEventListener("click", e => {
        e.preventDefault()
        document.querySelector("#nome_adv").value = ""
        document.querySelector("#texto").value = ""
    })