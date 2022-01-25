const mensagem = 'Envie reclamações, sugestões ou comentários!'

window.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: 'OAB/MA - Subseção Caxias!',
        text: mensagem,
        footer: `<hr><span class="fst-italic">Developed by: <a href="mailto:heraclitothiago@hotmail.com">Heráclito</a></span>`
    })
})