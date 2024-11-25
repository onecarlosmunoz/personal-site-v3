export function initializeScrollHandlers() {
    const observables = document.querySelectorAll(".observable");

    let bioSection = document.querySelector('#biography');
    let experienceSection  = document.querySelector('#experience');
    let funstuffSection = document.querySelector('#funstuff');

    let scrollToBio = document.querySelector('#scrollToBiography');
    let scrollToExperience  = document.querySelector('#scrollToExperience');
    let scrollToFunStuff = document.querySelector('#scrollToFunStuff');

    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        const scrollHeight = window.innerHeight;
        
        observables.forEach((section) => {
        if ((pageYOffset) + scrollHeight >= section.offsetTop + (section.offsetHeight / 2)) {
            document.querySelectorAll('#anchor-links > div.active').forEach((link) => {
            link.classList.remove('active');
            });

            document.querySelector(`[href="#${section.id}"]`).classList.add('active');
        }
        });
    };

    function scrollToElementBottom(element) {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const offsetToScroll = rect.bottom - window.innerHeight;

        window.scrollBy({
        top: offsetToScroll,
        behavior: "smooth"
        });
    }

    window.addEventListener("scroll", handleScroll);

    scrollToBio.addEventListener('click', () => scrollToElementBottom(bioSection));
    scrollToExperience.addEventListener('click', () => scrollToElementBottom(experienceSection));
    scrollToFunStuff.addEventListener('click', () => scrollToElementBottom(funstuffSection));
}