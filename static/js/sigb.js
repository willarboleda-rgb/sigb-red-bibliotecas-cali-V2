/* =========================
   LUMA
========================= */

function toggleChatbot() {

    document
        .getElementById('chatbotBox')
        .classList.toggle('active');
}

function quickQuestion(topic) {

    const messages =
        document.getElementById('chatbotMessages');

    let response = '';

    switch(topic){

        case 'catalogo':
            response =
            'Puedes consultar el Catálogo Maestro para buscar libros, revistas y recursos bibliográficos disponibles en la Red.';
            break;

        case 'bibliotecas':
            response =
            'La Red de Bibliotecas Públicas de Cali cuenta con bibliotecas, espacios de lectura y servicios culturales distribuidos en diferentes comunas.';
            break;

        case 'agenda':
            response =
            'Consulta la programación cultural para conocer talleres, clubes de lectura, exposiciones y actividades disponibles.';
            break;

        case 'digital':
            response =
            'Accede a biblioteca digital, audiolibros, podcast y recursos virtuales de la Red.';
            break;

        case 'servicios':
            response =
            'Ofrecemos préstamo bibliotecario, consulta en sala, acceso digital, formación y actividades culturales.';
            break;

        default:
            response =
            '¿Cómo puedo ayudarte?';
    }

    messages.innerHTML += `
        <div class="bot-message">
            ${response}
        </div>
    `;

    messages.scrollTop = messages.scrollHeight;
}

function sendChatbotMessage() {

    const input =
        document.getElementById('chatbotInput');

    const text =
        input.value.trim().toLowerCase();

    if(!text) return;

    const messages =
        document.getElementById('chatbotMessages');

    let response =
        'Lo siento, aún estoy aprendiendo.';

    if(text.includes('biblioteca')){

        response =
        'Puedes consultar el directorio de bibliotecas desde el menú principal.';
    }

    if(text.includes('libro')){

        response =
        'Puedes buscar libros utilizando el Catálogo OPAC.';
    }

    if(text.includes('evento')){

        response =
        'La programación cultural está disponible en la sección Agenda.';
    }

    messages.innerHTML += `
        <div class="bot-message">
            <strong>Tú:</strong> ${text}
        </div>

        <div class="bot-message">
            <strong>Luma:</strong> ${response}
        </div>
    `;

    input.value = '';

    messages.scrollTop = messages.scrollHeight;
}

function showVoiceSoon() {

    alert(
        'La consulta por voz estará disponible próximamente.'
    );
}


/* =========================
   ACCESIBILIDAD
========================= */

let currentFontSize = 100;

function toggleAccessibility() {

    document
        .querySelector('.accessibility-panel')
        .classList.toggle('active');
}

function increaseFont() {

    currentFontSize += 10;

    document.body.style.fontSize =
        currentFontSize + '%';
}

function decreaseFont() {

    currentFontSize -= 10;

    document.body.style.fontSize =
        currentFontSize + '%';
}

function toggleContrast() {

    document.body.classList.toggle(
        'high-contrast'
    );
}

function toggleDyslexiaMode() {

    document.body.classList.toggle(
        'dyslexia-mode'
    );
}

function resetAccessibility() {

    currentFontSize = 100;

    document.body.style.fontSize = '100%';

    document.body.classList.remove(
        'high-contrast'
    );

    document.body.classList.remove(
        'dyslexia-mode'
    );
}
function readPage(){

    const text =
        document.body.innerText;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = 'es-CO';

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}
function readPage(){

    const text = document.body.innerText;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = 'es-CO';

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}

function stopReading(){

    window.speechSynthesis.cancel();
}
 function filterStrategies(category, element) {
    const cards = document.querySelectorAll(
        ".strategy-card, .project-card, .quality-section"
    );

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    element.classList.add("active");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "";
        } else if (card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function filterOpac(type, element) {

    const cards = document.querySelectorAll(".opac-card");
    const tabs = document.querySelectorAll(".opac-tab");

    tabs.forEach(tab => tab.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (type === "todos") {
            card.style.display = "";
        } else if (card.classList.contains(type)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}

function searchOpac() {

    const searchInput = document.getElementById("opacSearch");

    if (!searchInput) return;

    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".opac-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
document.addEventListener("DOMContentLoaded", function () {

    if (window.OPAC_INITIAL_TYPE) {

        const type = window.OPAC_INITIAL_TYPE;

        const tab = document.querySelector(`.opac-tab[data-type="${type}"]`);

        filterOpac(type, tab);

    }

});
function filterDigital(category, element) {

    const cards = document.querySelectorAll(".digital-book-card");
    const buttons = document.querySelectorAll(".digital-tab");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "";
        } else if (card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}

function searchDigital() {

    const input = document.getElementById("digitalSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".digital-book-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function filterExpo(category, element) {

    const cards = document.querySelectorAll(".expo-card");
    const buttons = document.querySelectorAll(".expo-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "";
        } else if (card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


function startExpoTour() {
    const section = document.querySelector(".expo-content");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function filterEditorial(category, element) {

    const cards = document.querySelectorAll(".editorial-card");
    const buttons = document.querySelectorAll(".editorial-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "";
        } else if (card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function filterPodcast(category, element) {

    const cards = document.querySelectorAll(".podcast-item");
    const buttons = document.querySelectorAll(".podcast-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


function filterArchivo(category, element) {

    const cards = document.querySelectorAll(".archivo-card");
    const buttons = document.querySelectorAll(".archivo-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


function scrollArchivoGallery() {

    const section = document.getElementById("archivoGaleria");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function filterNews(category, element) {

    const cards = document.querySelectorAll(".news-card");
    const buttons = document.querySelectorAll(".news-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


function searchNews() {

    const input = document.getElementById("newsSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function filterReaderStories(category, element) {

    const cards = document.querySelectorAll(".reader-card");
    const buttons = document.querySelectorAll(".reader-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
let currentPqrsdStep = 1;

function showPqrsdStep(step) {

    currentPqrsdStep = step;

    document.querySelectorAll(".pqrsd-step-content").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".step").forEach(button => {
        button.classList.remove("active");
    });

    const currentSection = document.getElementById(`pqrsdStep${step}`);
    const currentButton = document.querySelector(`.step[data-step="${step}"]`);

    if (currentSection) {
        currentSection.classList.add("active");
    }

    if (currentButton) {
        currentButton.classList.add("active");
    }

    const backButton = document.querySelector(".pqrsd-back");
    const nextButton = document.querySelector(".pqrsd-next");

    if (backButton) {
        backButton.style.visibility = step === 1 ? "hidden" : "visible";
    }

    if (nextButton) {
        nextButton.innerHTML = step === 3
            ? 'Radicar solicitud <i class="fa-solid fa-check"></i>'
            : 'Siguiente <i class="fa-solid fa-chevron-right"></i>';
    }
}

function nextPqrsdStep() {

    if (currentPqrsdStep < 3) {
        showPqrsdStep(currentPqrsdStep + 1);
    } else {
        alert("Solicitud PQRSD radicada correctamente en modo prototipo.");
    }
}

function prevPqrsdStep() {

    if (currentPqrsdStep > 1) {
        showPqrsdStep(currentPqrsdStep - 1);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".pqrsd-page")) {
        showPqrsdStep(1);
    }
});
function filterAgenda(category, element) {

    const cards = document.querySelectorAll(".agenda-card");
    const buttons = document.querySelectorAll(".agenda-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function filterPermanent(category, element) {

    const cards = document.querySelectorAll(".permanent-card");
    const buttons = document.querySelectorAll(".permanent-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


function searchPermanent() {

    const input = document.getElementById("permanentSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".permanent-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function showNetworkSection(sectionName, element) {

    const sections = document.querySelectorAll(".network-content");
    const buttons = document.querySelectorAll(".network-tab");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    const selectedSection = document.getElementById(`network-${sectionName}`);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    if (element) {
        element.classList.add("active");
    }
}
function searchDirectory() {

    const input = document.getElementById("directorySearch");

    if (!input) return;

    const query = input.value.toLowerCase();

    const cards = document.querySelectorAll(".library-card, .directory-territory");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else if (card.classList.contains("directory-territory")) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function filterLibraries(category, element) {

    const cards = document.querySelectorAll(".library-feature-card");
    const buttons = document.querySelectorAll(".libraries-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


function searchLibraries() {

    const input = document.getElementById("librariesSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".library-feature-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function toggleServiceCategory(button) {

    const card = button.closest(".service-category-card");

    if (!card) return;

    card.classList.toggle("active");
}


function filterServiceCategories(category, element) {

    const cards = document.querySelectorAll(".service-category-card");
    const buttons = document.querySelectorAll(".services-pdf-chips button");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


function searchServiceCategories() {

    const input = document.getElementById("servicesSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".service-category-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
function selectRole(role, element) {

    const selectedRole = document.getElementById("selectedRole");

    if (selectedRole) {
        selectedRole.value = role;
    }

    document.querySelectorAll(".auth-role").forEach(button => {
        button.classList.remove("active");
    });

    if (element) {
        element.classList.add("active");
    }
}
let currentPqrsdV2Step = 1;

function showPqrsdStepV2(step) {

    currentPqrsdV2Step = step;

    document.querySelectorAll(".pqrsd-v2-step").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".pqrsd-v2-steps button").forEach(button => {
        button.classList.remove("active");
    });

    const section = document.getElementById(`pqrsdV2Step${step}`);
    const button = document.querySelectorAll(".pqrsd-v2-steps button")[step - 1];

    if (section) section.classList.add("active");
    if (button) button.classList.add("active");
}

function nextPqrsdStepV2() {
    if (currentPqrsdV2Step < 4) {
        showPqrsdStepV2(currentPqrsdV2Step + 1);
    } else {
        alert("Solicitud PQRSD radicada correctamente en modo prototipo.");
    }
}

function prevPqrsdStepV2() {
    if (currentPqrsdV2Step > 1) {
        showPqrsdStepV2(currentPqrsdV2Step - 1);
    }
}
function filterTeamDirectory(category, element) {

    const cards = document.querySelectorAll(".team-card");
    const buttons = document.querySelectorAll(".team-directory-tools button");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function toggleLumaV2() {

    const chat = document.getElementById("lumaChatV2");

    if (chat) {
        chat.classList.toggle("active");
    }
}


function toggleAccessibilityV2() {

    const panel = document.getElementById("accessibilityPanelV2");

    if (panel) {
        panel.classList.toggle("active");
    }
}
function askLuma(type) {

    const response = document.getElementById("lumaResponse");

    if (!response) return;

    const answers = {
        prestamos: "Para realizar un préstamo, acércate a tu biblioteca más cercana con tu documento de identidad. También puedes consultar el Catálogo OPAC para revisar disponibilidad de materiales.",
        bibliotecas: "Puedes encontrar las bibliotecas de la Red en la sección 'Bibliotecas' o consultar el Directorio para ver espacios por territorio, comuna o corregimiento.",
        digital: "Para acceder a la Biblioteca Digital, entra a la opción 'Biblioteca Digital' del menú Colecciones. Allí encontrarás libros digitales, podcast, exposiciones y otros recursos.",
        eventos: "La programación cultural está disponible en la sección 'Programación Cultural', donde puedes consultar talleres, clubes de lectura, exposiciones y actividades permanentes.",
        registro: "Para registrarte, ingresa a 'Crear cuenta ciudadana' desde el login. Allí podrás completar tus datos personales, ubicación, accesibilidad y autorización de datos."
    };

    response.innerHTML = `
        <div class="luma-message luma-bot">
            ${answers[type]}
        </div>
    `;
}


function sendLumaQuestion() {

    const input = document.getElementById("lumaInput");
    const response = document.getElementById("lumaResponse");

    if (!input || !response) return;

    const question = input.value.trim();

    if (question === "") {
        response.innerHTML = `
            <div class="luma-message luma-bot">
                Escribe una pregunta o selecciona una de las opciones rápidas.
            </div>
        `;
        return;
    }

    let answer = "Gracias por tu consulta. Por ahora soy un asistente en modo prototipo, pero puedo orientarte sobre bibliotecas, préstamos, eventos, registro y biblioteca digital.";

    const q = question.toLowerCase();

    if (q.includes("prestamo") || q.includes("préstamo") || q.includes("libro")) {
        answer = "Para préstamos o consulta de libros, puedes revisar el Catálogo OPAC o acercarte a una biblioteca de la Red con tu documento de identidad.";
    } else if (q.includes("biblioteca") || q.includes("sede")) {
        answer = "Puedes consultar las bibliotecas disponibles en la sección 'Bibliotecas' o en el Directorio de la Red.";
    } else if (q.includes("evento") || q.includes("agenda") || q.includes("programacion")) {
        answer = "Los eventos y actividades están disponibles en la sección 'Programación Cultural'.";
    } else if (q.includes("digital") || q.includes("ebook") || q.includes("audiolibro")) {
        answer = "La Biblioteca Digital reúne libros digitales, audiolibros, podcast, exposiciones y recursos en línea.";
    } else if (q.includes("registro") || q.includes("cuenta")) {
        answer = "Puedes crear tu cuenta ciudadana desde la opción 'Crear cuenta' en la pantalla de inicio de sesión.";
    }

    response.innerHTML = `
        <div class="luma-message luma-user">
            ${question}
        </div>

        <div class="luma-message luma-bot">
            ${answer}
        </div>
    `;

    input.value = "";
}


function handleLumaEnter(event) {

    if (event.key === "Enter") {
        sendLumaQuestion();
    }
}


function lumaVoiceSoon() {

    const response = document.getElementById("lumaResponse");

    if (!response) return;

    response.innerHTML = `
        <div class="luma-message luma-bot">
            La consulta por voz estará disponible próximamente. 🎙️
        </div>
    `;
}
function filterStrategies(category, element) {

    const cards = document.querySelectorAll(".strategy-card, .project-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function filterNews(category, element) {

    const cards = document.querySelectorAll(".news-card");
    const buttons = document.querySelectorAll(".news-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}


function searchNews() {

    const input = document.getElementById("newsSearch");

    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function filterReaderStories(category, element) {

    const cards = document.querySelectorAll(".reader-card");
    const buttons = document.querySelectorAll(".reader-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
function showNetworkSection(section, element) {

    document.querySelectorAll(".network-content").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".network-tab").forEach(button => {
        button.classList.remove("active");
    });

    const activeSection = document.getElementById(`network-${section}`);

    if (activeSection) {
        activeSection.classList.add("active");
    }

    if (element) {
        element.classList.add("active");
    }
}
function toggleAccessibilityV2() {
    const panel = document.getElementById("accessibilityPanelV2");
    if (panel) panel.classList.toggle("active");
}

let textScale = 1;
let pageZoom = 1;

function increaseText() {
    textScale += 0.05;
    if (textScale > 1.25) textScale = 1;
    document.documentElement.style.fontSize = `${textScale * 100}%`;
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast-mode");
}

function toggleFocusMode() {
    document.body.classList.toggle("focus-mode");
}

function zoomPage() {
    pageZoom += 0.05;
    if (pageZoom > 1.15) pageZoom = 1;
    document.body.style.zoom = pageZoom;
}

function enableReadMode() {
    alert("Lector de pantalla activado en modo prototipo. Próximamente se integrará lectura automática.");
}

function enableKeyboardMode() {
    alert("Navegación por teclado activada. Puedes usar Tab para recorrer enlaces y botones.");
}

function signLanguageSoon() {
    alert("La opción de lengua de señas estará disponible próximamente.");
}
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".home-hero-v2, .hero-modern");

    if (!hero) return;

    hero.addEventListener("mousemove", function (event) {
        const rect = hero.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty("--x", `${x}%`);
        hero.style.setProperty("--y", `${y}%`);
    });

    hero.addEventListener("mouseleave", function () {
        hero.style.setProperty("--x", "20%");
        hero.style.setProperty("--y", "30%");
    });
});
function toggleLumaCategory(id) {

    const panel = document.getElementById(id);

    if (!panel) return;

    panel.classList.toggle("active");
}
function toggleLumaCategory(id) {

    const panel = document.getElementById(id);

    if (!panel) return;

    panel.classList.toggle("active");

    const button = panel.previousElementSibling;

    if(button){
        button.classList.toggle("active");
    }
}
function switchLumaMode(mode) {

    const chatMode = document.getElementById("lumaModeChat");
    const fasesMode = document.getElementById("lumaModeFases");
    const tabs = document.querySelectorAll(".luma-mode-tabs button");

    if (!chatMode || !fasesMode) return;

    chatMode.classList.remove("active");
    fasesMode.classList.remove("active");

    tabs.forEach(tab => tab.classList.remove("active"));

    if (mode === "chat") {
        chatMode.classList.add("active");
        tabs[0].classList.add("active");
    }

    if (mode === "fases") {
        fasesMode.classList.add("active");
        tabs[1].classList.add("active");
    }
}
function transcriptionSoon() {
    alert("La transcripción de audio a texto estará disponible próximamente.");
}
let currentRegisterStep = 1;

function showRegisterStep(step) {

    currentRegisterStep = step;

    document.querySelectorAll(".register-step-content").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".register-step-tabs button").forEach(button => {
        button.classList.remove("active");
    });

    const currentSection = document.getElementById(`registerStep${step}`);
    const currentButton = document.querySelectorAll(".register-step-tabs button")[step - 1];
    const nextButton = document.getElementById("registerNextButton");

    if (currentSection) {
        currentSection.classList.add("active");
    }

    if (currentButton) {
        currentButton.classList.add("active");
    }

    if (nextButton) {
        nextButton.innerHTML = step === 6
            ? 'Crear cuenta <i class="fa-solid fa-check"></i>'
            : 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
    }
}

function nextRegisterStep() {

    if (currentRegisterStep < 6) {
        showRegisterStep(currentRegisterStep + 1);
    } else {
        alert("Cuenta ciudadana creada correctamente en modo prototipo.");
    }
}

function prevRegisterStep() {

    if (currentRegisterStep > 1) {
        showRegisterStep(currentRegisterStep - 1);
    }
}
const treeAssistantData = {
    lci: {
        title: "1.1 Lectura Contextual Inteligente",
        phase: "📖 Lectores",
        description: "Analiza referencias culturales, históricas y literarias dentro de un texto.",
        demo: "Referencia detectada: Macondo. Nivel básico: pueblo ficticio creado por Gabriel García Márquez. Nivel intermedio: metáfora de América Latina. Nivel experto: símbolo del realismo mágico."
    },
    animo: {
        title: "1.2 Navegación por Estados de Ánimo",
        phase: "📖 Lectores",
        description: "Sugiere lecturas según el estado emocional o interés del usuario.",
        demo: "Si el usuario busca calma, puede recomendar poesía, cuentos breves o literatura contemplativa."
    },
    club: {
        title: "1.3 Club de Lectura Aumentado",
        phase: "📖 Lectores",
        description: "Acompaña clubes de lectura con preguntas, análisis y rutas de conversación.",
        demo: "Genera preguntas para conversar sobre personajes, símbolos, conflictos y aprendizajes del libro."
    },
    coherencia: {
        title: "2.1 Arquitecta de Coherencia",
        phase: "✍️ Escritores",
        description: "Revisa si una historia mantiene coherencia narrativa, personajes y continuidad.",
        demo: "Detecta contradicciones entre capítulos, cambios bruscos de tono o personajes inconsistentes."
    },
    ritmo: {
        title: "2.2 Analista de Ritmo y Tensión",
        phase: "✍️ Escritores",
        description: "Analiza el ritmo del texto y los momentos de tensión narrativa.",
        demo: "Identifica si una escena es lenta, intensa, repetitiva o necesita mayor desarrollo."
    },
    variantes: {
        title: "2.3 Generadora de Variantes No Literales",
        phase: "✍️ Escritores",
        description: "Propone alternativas creativas sin cambiar la intención principal del texto.",
        demo: "Sugiere versiones más poéticas, directas, juveniles o descriptivas de un fragmento."
    },
    tropos: {
        title: "3.1 Mapping de Tropos y Temas",
        phase: "🤝 Comunidad y edición",
        description: "Identifica temas, símbolos y patrones narrativos presentes en una obra.",
        demo: "Detecta temas como memoria, territorio, identidad, duelo, migración o comunidad."
    },
    curador: {
        title: "3.2 Curador Lector",
        phase: "🤝 Comunidad y edición",
        description: "Apoya la valoración editorial y cultural de contenidos.",
        demo: "Ayuda a clasificar una obra según pertinencia, público, calidad narrativa y valor cultural."
    },
    traduccion: {
        title: "3.3 Traducción Estilística",
        phase: "🤝 Comunidad y edición",
        description: "Adapta el estilo de un texto para diferentes públicos o formatos.",
        demo: "Convierte un texto técnico en lenguaje ciudadano o una reseña en formato juvenil."
    },
    indexacion: {
        title: "4.1 Indexación Semántica",
        phase: "🖥️ Plataforma",
        description: "Organiza contenidos mediante temas, conceptos y relaciones semánticas.",
        demo: "Relaciona libros, autores, géneros, emociones, territorios y públicos lectores."
    },
    plagio: {
        title: "4.2 Detección de Plagio Estructural",
        phase: "🖥️ Plataforma",
        description: "Identifica similitudes narrativas, temáticas o estructurales entre textos.",
        demo: "Detecta estructuras repetidas o coincidencias significativas entre obras."
    },
    metadatos: {
        title: "4.3 Metadatos Dinámicos Evolutivos",
        phase: "🖥️ Plataforma",
        description: "Genera metadatos inteligentes para mejorar búsqueda, recomendación y clasificación.",
        demo: "Agrega etiquetas como género, emoción, nivel de lectura, público y temas principales."
    }
};

function askLuma(type) {
    const response = document.getElementById("lumaResponse");
    const item = treeAssistantData[type];

    if (!response || !item) return;

    response.innerHTML = `
        <div class="tree-function-card">
            <span>${item.phase}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>

            <div class="tree-demo-box">
                <strong>Demo sugerida:</strong>
                <p>${item.demo}</p>
            </div>

            <button type="button"
                    onclick="openTreeAssistant('${type}')">
                Abrir asistente
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;
}

function openTreeAssistant(type) {
    const modal = document.getElementById("treeAssistantModal");
    const title = document.getElementById("treeAssistantTitle");
    const subtitle = document.getElementById("treeAssistantSubtitle");
    const body = document.getElementById("treeAssistantBody");
    const item = treeAssistantData[type];

    if (!modal || !item) return;

    title.textContent = item.title;
    subtitle.textContent = item.phase;

    body.innerHTML = `
        <p><strong>Función activada:</strong> ${item.title}</p>
        <p>${item.description}</p>

        <div class="tree-assistant-demo">
            <strong>Estoy analizando un ejemplo...</strong>
            <p>${item.demo}</p>
        </div>

        <div class="tree-assistant-actions">
            <button type="button">🧪 Ver demo</button>
            <button type="button">💡 Dame un ejemplo</button>
            <button type="button">📖 Explicar función</button>
            <button type="button">⚙️ Configuración</button>
        </div>
    `;

    document.body.classList.add("tree-modal-open");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function closeTreeAssistant() {
    const modal = document.getElementById("treeAssistantModal");

    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("tree-modal-open");
}

function initTreeAssistantCloseEvents() {
    const modal = document.getElementById("treeAssistantModal");
    const closeBtn = document.getElementById("treeAssistantClose");
    const box = modal ? modal.querySelector(".tree-assistant-box") : null;

    if (closeBtn) {
        closeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            closeTreeAssistant();
        });
    }

    if (box) {
        box.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }

    if (modal) {
        modal.addEventListener("click", function () {
            closeTreeAssistant();
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTreeAssistantCloseEvents);
} else {
    initTreeAssistantCloseEvents();
}
const opacData = {
    junco: {
        type: "Libro",
        title: "El infinito en un junco",
        author: "Irene Vallejo",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
        meta: "Siruela · 2019 · Español · ISBN 9788417860790",
        rating: "⭐ 4.8 · 4.6K vistas · Disponible",
        locations: ["Biblioteca Centro Cultural de Cali", "Biblioteca Departamental", "Biblioteca León de Greiff"],
        normal: "Título completo: El infinito en un junco. Autora: Irene Vallejo. Ensayo sobre la historia de los libros, la lectura y las bibliotecas.",
        marc: "100 1# $a Vallejo, Irene\n245 10 $a El infinito en un junco\n260 ## $b Siruela $c 2019\n650 #0 $a Historia del libro",
        isbd: "Vallejo, Irene. El infinito en un junco. — Madrid: Siruela, 2019."
    },
    cien: {
        type: "Libro",
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
        meta: "Editorial Sudamericana · 1967 · Español",
        rating: "⭐ 4.9 · 125K vistas · Disponible",
        locations: ["Biblioteca Centro Cultural de Cali", "Biblioteca Gabo", "Biblioteca San Marino"],
        normal: "Título completo: Cien años de soledad. Autor: Gabriel García Márquez. Obra fundamental del realismo mágico latinoamericano.",
        marc: "100 1# $a García Márquez, Gabriel\n245 10 $a Cien años de soledad\n260 ## $b Editorial Sudamericana $c 1967\n650 #0 $a Novela colombiana",
        isbd: "García Márquez, Gabriel. Cien años de soledad. — Buenos Aires: Sudamericana, 1967."
    },
    historias: {
        type: "Audiolibro",
        title: "Historias para imaginar",
        author: "Red de Bibliotecas",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800",
        meta: "Producción RBPC · 2026 · Audio digital",
        rating: "⭐ 4.6 · 8.5K escuchas · Disponible",
        locations: ["Biblioteca Digital RBPC"],
        normal: "Colección sonora de relatos infantiles y juveniles producidos para promover la lectura en voz alta.",
        marc: "245 10 $a Historias para imaginar\n300 ## $a Recurso sonoro digital\n710 2# $a Red de Bibliotecas Públicas de Cali",
        isbd: "Historias para imaginar [recurso sonoro]. — Cali: RBPC, 2026."
    },
    pacifico: {
        type: "Podcast",
        title: "Voces del Pacífico",
        author: "Podcast cultural",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
        meta: "Serie sonora · 2026 · Podcast",
        rating: "⭐ 4.7 · 12.3K escuchas · Disponible",
        locations: ["Biblioteca Digital RBPC"],
        normal: "Podcast cultural sobre memoria oral, territorio, música y saberes del Pacífico colombiano.",
        marc: "245 10 $a Voces del Pacífico\n300 ## $a Podcast\n650 #0 $a Memoria oral",
        isbd: "Voces del Pacífico [podcast]. — Cali: Biblioteca Digital RBPC, 2026."
    },
    arte: {
        type: "Exposición",
        title: "Arte, memoria y territorio",
        author: "Museo Arqueológico",
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800",
        meta: "Exposición digital · 2026",
        rating: "⭐ 4.8 · 15K visitas · Disponible",
        locations: ["Exposiciones Digitales RBPC"],
        normal: "Recorrido digital por piezas, relatos visuales y memorias territoriales de Cali.",
        marc: "245 10 $a Arte, memoria y territorio\n300 ## $a Exposición digital\n650 #0 $a Patrimonio cultural",
        isbd: "Arte, memoria y territorio [exposición digital]. — Cali: RBPC, 2026."
    },
    sombra: {
        type: "E-book",
        title: "La sombra del viento",
        author: "Carlos Ruiz Zafón",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
        meta: "Planeta · 2001 · Español",
        rating: "⭐ 4.7 · 88K vistas · Disponible",
        locations: ["Biblioteca Digital", "MakeMake"],
        normal: "Novela contemporánea ambientada en Barcelona, centrada en la memoria literaria y el misterio.",
        marc: "100 1# $a Ruiz Zafón, Carlos\n245 13 $a La sombra del viento\n260 ## $b Planeta $c 2001",
        isbd: "Ruiz Zafón, Carlos. La sombra del viento. — Barcelona: Planeta, 2001."
    },
    tecnologia: {
        type: "Digital",
        title: "Recursos para aprender tecnología",
        author: "Biblioteca Digital",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        meta: "Recurso abierto · 2026 · Digital",
        rating: "⭐ 4.5 · Recurso abierto",
        locations: ["Biblioteca Digital RBPC"],
        normal: "Recurso de aprendizaje digital sobre habilidades tecnológicas, alfabetización digital y ciudadanía digital.",
        marc: "245 10 $a Recursos para aprender tecnología\n300 ## $a Recurso digital\n650 #0 $a Alfabetización digital",
        isbd: "Recursos para aprender tecnología [recurso digital]. — Cali: RBPC, 2026."
    },
    memoria: {
        type: "Archivo",
        title: "Memoria fotográfica de Cali",
        author: "Archivo Fotográfico",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
        meta: "Archivo fotográfico · Patrimonio visual",
        rating: "⭐ 4.6 · Patrimonio visual",
        locations: ["Archivo Fotográfico de Cali"],
        normal: "Colección visual sobre memoria urbana, patrimonio, territorio y transformación de Cali.",
        marc: "245 10 $a Memoria fotográfica de Cali\n300 ## $a Archivo fotográfico digital\n650 #0 $a Patrimonio visual",
        isbd: "Memoria fotográfica de Cali [archivo fotográfico]. — Cali: AFC, 2026."
    }
};

function openOpacDetail(id) {
    const item = opacData[id];
    const modal = document.getElementById("opacDetailModal");

    if (!item || !modal) return;

    document.getElementById("opacDetailImage").src =
    window.OPAC_BOOK_IMAGES?.[id] || item.image;
    document.getElementById("opacDetailType").textContent = item.type;
    document.getElementById("opacDetailTitle").textContent = item.title;
    document.getElementById("opacDetailAuthor").textContent = item.author;
    document.getElementById("opacDetailMeta").textContent = item.meta;
    document.getElementById("opacDetailRating").textContent = item.rating;
    document.getElementById("opacNormalText").textContent = item.normal;
    document.getElementById("opacMarcText").textContent = item.marc;
    document.getElementById("opacIsbdText").textContent = item.isbd;

    document.getElementById("opacDetailLocations").innerHTML =
        item.locations.map(location => `<li>${location}</li>`).join("");

    showOpacView("normal", document.querySelector(".opac-detail-tabs button"));

    modal.classList.add("active");
}

function closeOpacDetail() {
    const modal = document.getElementById("opacDetailModal");

    if (modal) {
        modal.classList.remove("active");
    }
}

function showOpacView(view, button) {
    document.querySelectorAll(".opac-detail-view").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".opac-detail-tabs button").forEach(btn => {
        btn.classList.remove("active");
    });

    const selected = document.getElementById(`opacView${view.charAt(0).toUpperCase() + view.slice(1)}`);

    if (selected) {
        selected.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }
}
/* =========================
   BIBLIOTECA DIGITAL - MODAL Y PODCAST
========================= */

function openDigitalLibraries() {
    const modal = document.getElementById("digitalLibrariesModal");
    if (modal) modal.classList.add("active");
}

function closeDigitalLibraries() {
    const modal = document.getElementById("digitalLibrariesModal");
    if (modal) modal.classList.remove("active");
}

function openDigitalPlatform(url) {
    if (url && url !== "#") {
        window.open(url, "_blank");
    }
}

function uploadPodcastPrototype() {
    alert("En la versión productiva, los usuarios podrán subir sus podcast relacionados con lectura, escritura, oralidad y cultura.");
}

document.addEventListener("click", function (event) {
    const modal = document.getElementById("digitalLibrariesModal");

    if (modal && event.target === modal) {
        modal.classList.remove("active");
    }
});
/* =========================
   BIBLIOTECA DIGITAL V3
========================= */

function openDigitalAccessModal() {
    const modal = document.getElementById("digitalAccessModal");
    if (modal) modal.classList.add("active");
}

function closeDigitalAccessModal() {
    const modal = document.getElementById("digitalAccessModal");
    if (modal) modal.classList.remove("active");
}

function filterDigitalAdvanced(category, element) {
    const cards = document.querySelectorAll(".digital-book-card");
    const filters = document.querySelectorAll(".digital-filter");

    filters.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    let visibleCount = 0;

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    updateDigitalCount(visibleCount);
}

function resetDigitalFilters() {
    const cards = document.querySelectorAll(".digital-book-card");
    const filters = document.querySelectorAll(".digital-filter");
    const search = document.getElementById("digitalSearch");

    cards.forEach(card => {
        card.style.display = "";
    });

    filters.forEach(btn => btn.classList.remove("active"));

    const allButton = document.querySelector(".digital-filter");
    if (allButton) allButton.classList.add("active");

    if (search) search.value = "";

    updateDigitalCount(cards.length);
}

function updateDigitalCount(count) {
    const digitalCount = document.getElementById("digitalCount");

    if (digitalCount) {
        digitalCount.textContent = count + " recursos encontrados";
    }
}

function showPodcastUploadMessage() {
    alert("En la versión productiva, los usuarios podrán subir o proponer podcast relacionados con lectura, escritura, oralidad, memoria local y cultura.");
}

document.addEventListener("click", function(event) {
    const modal = document.getElementById("digitalAccessModal");

    if (modal && event.target === modal) {
        closeDigitalAccessModal();
    }
});
function openExpoRoom(roomName) {
    alert("Abriendo sala: " + roomName + ". En la versión productiva se mostraría el recorrido interactivo de esta sala.");
}

function playExpoAudioPrototype() {
    alert("Reproduciendo audio guía en modo prototipo.");
}
function searchEditorial() {
    const input = document.getElementById("editorialSearch");
    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".editorial-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

function openEditorialDetail(title) {
    alert("Abriendo detalle de la publicación: " + title + ". En la versión productiva se mostrará ficha editorial, formatos disponibles, autores, colección y opciones de descarga o préstamo digital.");
}
function searchArchivo() {
    const input = document.getElementById("archivoSearch");
    if (!input) return;

    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".archivo-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? "" : "none";
    });
}

function openArchivoPhoto(title) {
    alert("Abriendo ficha fotográfica: " + title);
}
function filterAgoraActors(category, element) {
    const cards = document.querySelectorAll(".agora-actor-card");
    const buttons = document.querySelectorAll(".agora-filter");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (element) {
        element.classList.add("active");
    }

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

function openAgoraActor(name) {
    alert("Abriendo perfil de: " + name + ". En la versión productiva se mostrará información completa del actor, catálogo, programación y enlaces de contacto.");
}
function showLibrariesDirectoryTab(tab, element) {
    const buttons = document.querySelectorAll(".libraries-dir-tab");
    const panels = document.querySelectorAll(".libraries-dir-panel");

    buttons.forEach(btn => btn.classList.remove("active"));
    panels.forEach(panel => {
        panel.classList.remove("active");
        panel.hidden = true;
    });

    if (element) {
        element.classList.add("active");
    }

    const selectedPanel = document.getElementById("libraries-panel-" + tab);

    if (selectedPanel) {
        selectedPanel.hidden = false;
        selectedPanel.classList.add("active");
    }
}
function toggleLumaV2() {
    const chat = document.getElementById("lumaChatV2");
    if (!chat) return;

    chat.classList.toggle("active");
}

function closeLumaV2() {
    const chat = document.getElementById("lumaChatV2");
    if (!chat) return;

    chat.classList.remove("active");
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLumaV2();
        closeTreeAssistant();
    }
});

document.addEventListener("click", function (event) {
    const widget = document.querySelector(".luma-widget-v2");
    const modal = document.getElementById("treeAssistantModal");

    if (widget && !widget.contains(event.target)) {
        const chat = document.getElementById("lumaChatV2");
        if (chat && chat.classList.contains("active")) {
            chat.classList.remove("active");
        }
    }

    if (modal && event.target === modal) {
        closeTreeAssistant();
    }
});

/* =====================================================
   HOME NOVEDADES - CARRUSEL
===================================================== */

let homeNewsCarouselIndex = 0;

function moveHomeNewsCarousel(direction) {
    const carousel = document.getElementById('homeNewsCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.home-news-slide');
    if (!slides.length) return;

    homeNewsCarouselIndex = (homeNewsCarouselIndex + direction + slides.length) % slides.length;
    carousel.scrollTo({
        left: carousel.clientWidth * homeNewsCarouselIndex,
        behavior: 'smooth'
    });

    updateHomeNewsDots(homeNewsCarouselIndex);
}

function updateHomeNewsDots(activeIndex) {
    const dots = document.querySelectorAll('.home-news-carousel-dots span');
    dots.forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
}

function syncHomeNewsCarousel() {
    const carousel = document.getElementById('homeNewsCarousel');
    if (!carousel) return;

    const index = Math.round(carousel.scrollLeft / Math.max(carousel.clientWidth, 1));
    homeNewsCarouselIndex = index;
    updateHomeNewsDots(index);
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('homeNewsCarousel');
    if (!carousel) return;

    carousel.addEventListener('scroll', function () {
        window.clearTimeout(carousel.dataset.scrollTimer);
        carousel.dataset.scrollTimer = window.setTimeout(syncHomeNewsCarousel, 120);
    });

    window.setInterval(function () {
        if (document.hidden) return;
        moveHomeNewsCarousel(1);
    }, 6500);
});
