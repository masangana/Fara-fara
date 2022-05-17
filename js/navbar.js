const pageHome = document.getElementById("home");

const pageAbout = document.getElementById("about");

var pageActive = "";
var link = "";

if (pageHome != null && pageAbout == null) {
    pageActive = "About";
    link = "./about.html";
} else if (pageHome == null && pageAbout != null) {
    pageActive = "Home";
    link = "./index.html";   
}

document.querySelector("#header").innerHTML = `
<div class="social-container">
    <ul class="socials">
        <li class="social-item">
            <a href="#" class="social-link"><img src="/Images/social/facebook.svg" alt="facebook" class="icon"></a>
        </li>
        <li class="social-item">
            <a href="#" class="social-link"><img src="/Images/social/twitter.svg" alt="twitter" class="icon"></a>
        </li>
        <li class="social-item">
            <a href="#" class="social-link">English</a>
        </li>
        <li class="social-item">
            <a href="#" class="social-link">My Page</a>
        </li>
        <li class="social-item">
            <a href="#" class="social-link">Logout</a>
        </li>
    </ul>
</div>
<nav class="navbar">
    <ul class="nav-menu">
        <li class="nav-logo">
            <a href="/index.html" class="navbar-logo"><img src="./ressources/icons/logo.png" alt="logo" id="logo"></a>
        </li>
        <li class="nav-item">
            <a href="${link}" class="nav-link">${pageActive}</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Program</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Join</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Sponsor</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">News</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link ff-campaign">Fara-Fara Gaming</a>
        </li>
    </ul>
    <div class="collapsed-menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
</nav>`;