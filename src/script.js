


document.getElementById("acess").addEventListener("click", () => {
    goToSite();
});


const goToSite = () => {
    const url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) {
        alert("Digite um link válido começando com http ou https.");
        return;
    };
    localStorage.setItem("userLink", url);
    window.location.href = "./transform/site.html";
};

const showFavicon = () => {
    const url = document.getElementById("urlInput").value;
    if (url.startsWith("http")) {
        const domain = new URL(url).origin;
        const faviconUrl = domain + "/favicon.ico";
        const img = document.getElementById("faviconPreview");
        img.src = faviconUrl;
        img.style.display = "inline-block";
    };
};