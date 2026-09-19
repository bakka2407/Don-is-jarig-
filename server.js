function vierFeest() {
    const message = document.getElementById("message");

    message.innerHTML =
        "🎉 JAAAA! 🎉 Don is officieel 15! <br><br>" +
        "Taart: ✅<br>" +
        "Cadeaus: 🎁<br>" +
        "Volwassen gedrag: ❌😂<br><br>" +
        "Fijne verjaardag Don! 🥳🎂";

    // Een beetje extra feest 🎊
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "9999";
        confetti.style.transition = "transform 3s linear, top 3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = "100vh";
            confetti.style.transform =
                "rotate(" + Math.random() * 720 + "deg)";
        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}