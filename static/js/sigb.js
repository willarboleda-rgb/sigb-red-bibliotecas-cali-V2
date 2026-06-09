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
