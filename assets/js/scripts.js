const nameAdv = document.getElementById("nome_adv")
const vinculo = document.getElementById("vinculo")
const tipoContato = document.getElementById("tipo")
const texto = document.getElementById("texto")
const form = document.querySelector("form")
const formAction = "https://formsubmit.co/76f2aeb1771be27fca573c6c56ae5cee"
const imgUrl = "https://github.com/heraclitothiago/oab-form/blob/main/assets/imgs/demonstration.png?raw=true"
const img = document.getElementById("img")
img.setAttribute("src", imgUrl)

form.action = formAction
const cleanBtn = document.querySelector("#apagar")
cleanBtn.addEventListener("click", e => {
    e.preventDefault()
    nameAdv.value = ""
    texto.value = ""
    vinculo.value = null
    tipoContato.value = null
})

JQUERY
$(function() {
    var adv = $("#nome_adv")
    var text = $("#texto")
    var vinculo = $("#vinculo")
    var tipoContato = $("#tipo")

    var enviar = $("#enviar")
    enviar.on("click", e => {
        e.preventDefault()

        $.ajax({
            url: "https://formsubmit.co/76f2aeb1771be27fca573c6c56ae5cee",
            method: "POST",
            data: {
                "nome": adv.val(),
                "texto": text.val(),
                "vinculo": vinculo.val(),
                "tipoContato": tipoContato.val()
            },
            dataType: "json"
        });

        Swal.fire({
            icon: 'success',
            title: 'Obrigado...',
            text: 'Sua mensagem foi enviada com sucesso!',
        })
    })
})