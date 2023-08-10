document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuBar = document.querySelector('.menu-bar');
    const closeButton = document.querySelector('.close-button');

    let isOpen = false;
    let SignContainerOpen=false;
    let LogContainerOpen=false;

    const signInContainer=document.querySelector('.sign-in-container');
    const signIn=document.querySelector('.sign-inner');
    const closeSign=document.querySelector('.close-sign-in');

    const LogInContainer=document.querySelector('.log-in-container');
    const LogIn=document.querySelector('.log-inner');
    const closeLog=document.querySelector('.close-log-in');


    LogIn.addEventListener('click',()=>{
        LogInContainer.classList.add('logsign-activator');
        LogContainerOpen=true;
        if(SignContainerOpen){
            SignContainerOpen=false;
            signInContainer.classList.remove('logsign-activator');
        }
    });

    closeLog.addEventListener('click',()=>{
        LogInContainer.classList.remove('logsign-activator');
        LogContainerOpen=false;
    });

    signIn.addEventListener('click',()=>{
        signInContainer.classList.add('logsign-activator');
        SignContainerOpen=true;
        if(LogContainerOpen){
            LogInContainer.classList.remove('logsign-activator');
            LogContainerOpen=false;
        }
    });
    closeSign.addEventListener('click',()=>{
        signInContainer.classList.remove('logsign-activator');
        SignContainerOpen=false;
    });

    function openMenuBar() {
        isOpen = true;
        document.body.classList.add('menu-open'); 
    }

    function closeMenuBar() {
        isOpen = false;
        document.body.classList.remove('menu-open'); 
    }

    function closeLogSignIn(){
        SignContainerOpen=false;
        signInContainer.classList.remove('logsign-activator');
        LogContainerOpen=false;
        LogInContainer.classList.remove('logsign-activator');
    }
    burgerMenu.addEventListener('click', function () {
        if (!isOpen) {
            menuBar.classList.add('active');
            openMenuBar();
        }
    });

    closeButton.addEventListener('click', function () {
        if (isOpen) {
            closeMenuBar();
            menuBar.classList.remove('active');
        }
    });

    document.addEventListener('click', function (event) {
        if (isOpen && !menuBar.contains(event.target) && !burgerMenu.contains(event.target) && !signInContainer.contains(event.target) && !LogInContainer.contains(event.target)) {
                closeLogSignIn();
                closeMenuBar();
                menuBar.classList.remove('active');
            }
        });
    });

function updateTotalHeightVariable() {
    const totalHeight = document.body.scrollHeight+20;
    document.documentElement.style.setProperty("--total-height", totalHeight + "px");
}
window.addEventListener("load", updateTotalHeightVariable);
window.addEventListener("resize", updateTotalHeightVariable);
window.addEventListener("click", updateTotalHeightVariable);
window.addEventListener("change", updateTotalHeightVariable);




