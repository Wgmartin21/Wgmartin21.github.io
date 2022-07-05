function openMenuNav() {
    document.getElementById("menuNav").style.display = "block";
    document.getElementById("nav-mobile-black").style.display = "block";
}
function closeMenuNav() {
    document.getElementById("menuNav").style.display = "none";
    document.getElementById("nav-mobile-black").style.display = "none";
}
function openFeatures() {
    document.getElementById("features").style.display = "block";
    document.getElementById("dropdown-close").style.display = "inline";
    document.getElementById("dropdown-open").style.display = "none";
}
function closeFeatures() {
    document.getElementById("features").style.display = "none";
    document.getElementById("dropdown-close").style.display = "none";
    document.getElementById("dropdown-open").style.display = "inline";
}
function openCompany() {
    document.getElementById("company").style.display = "block";
    document.getElementById("dropdown-close-company").style.display = "inline";
    document.getElementById("dropdown-open-company").style.display = "none";
}
function closeCompany() {
    document.getElementById("company").style.display = "none";
    document.getElementById("dropdown-close-company").style.display = "none";
    document.getElementById("dropdown-open-company").style.display = "inline";
}