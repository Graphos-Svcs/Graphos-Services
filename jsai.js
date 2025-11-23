async function sendAI() {
    let input = document.getElementById("ai-input").value;
    if(input.trim()==="") return;
    let dialog = document.getElementById("ai-dialog");

    dialog.innerHTML += `<p class="user">أنت: ${input}</p>`;

    // مثال رد ذكي مع إرسال البريد
    fetch(`https://formsubmit.co/ajax/Graphos.svcs@gmail.com`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({message: input})
    });

    dialog.innerHTML += `<p class="ai">Graphos AI: تم إرسال رسالتك بنجاح! ✅</p>`;
    document.getElementById("ai-input").value="";
    dialog.scrollTop = dialog.scrollHeight;
}
