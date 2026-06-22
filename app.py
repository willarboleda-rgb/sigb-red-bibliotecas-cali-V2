from flask import Flask, render_template, request, redirect, url_for, abort

app = Flask(__name__)


@app.route("/")
def inicio():
    return render_template("public/index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        role = request.form.get("role", "ciudadano")

        if role == "bibliotecario":
            return redirect(url_for("admin"))

        return redirect(url_for("mi_perfil"))

    return render_template("auth/login.html")


@app.route("/registro")
def registro():
    return render_template("auth/registro.html")


@app.route("/mi-perfil")
def mi_perfil():
    return render_template("public/mi_perfil.html")


@app.route("/biblioteca")
def biblioteca():
    return render_template("public/biblioteca.html")

@app.route("/colecciones")
def colecciones():
    return render_template("public/colecciones.html")


@app.route("/comunidad")
def comunidad():
    return render_template("public/comunidad.html")


@app.route("/agenda")
def agenda():
    return render_template("public/agenda.html")

@app.route("/admin")
def admin():
    return render_template("admin/admin.html")

@app.route('/la-red')
def la_red():
    return render_template("components/la_red.html")

@app.route('/directorio')
def directorio():
    return render_template('components/directorio.html')

@app.route('/bibliotecas')
def bibliotecas():
    return render_template('components/bibliotecas.html')

@app.route('/servicios')
def servicios():
    return render_template('components/servicios.html')

@app.route('/estrategias')
def estrategias():
    return render_template('components/estrategias.html')

@app.route('/opac')
def opac():
    tipo = request.args.get('tipo', 'todos')
    return render_template('components/opac.html', tipo=tipo)

@app.route('/biblioteca-digital')
def biblioteca_digital():
    return render_template('components/biblioteca_digital.html')

@app.route('/exposiciones')
def exposiciones():
    return render_template('components/exposiciones.html')


@app.route('/fondo-editorial')
def fondo_editorial():
    return render_template('components/fondo_editorial.html')

@app.route('/podcast')
def podcast():
    return render_template('components/podcast.html')


@app.route('/archivo-fotografico')
def archivo_fotografico():
    return render_template('components/archivo_fotografico.html')


@app.route('/novedades')
def novedades():
    return render_template('components/novedades.html')

@app.route('/red-social')
def red_social():
    return render_template('components/red_social.html')

@app.route('/programacion-cultural')
def programacion_cultural():
    return render_template('components/agenda_nueva.html')


@app.route('/programacion-permanente')
def programacion_permanente():
    return render_template('components/programacion_permanente.html')


@app.route('/pqrsdf')
def pqrsdf():
    return render_template('components/pqrsdf.html')

@app.route('/equipo-directorio')
def equipo_directorio():
    return render_template('components/equipo_directorio.html')

@app.route('/lecturas')
def lecturas():
    return render_template('components/lecturas.html')

@app.route('/observatorio')
def observatorio():
    return render_template('components/observatorio.html')

@app.route('/mapa-bibliotecas')
def mapa_bibliotecas():
    return render_template('components/mapa-bibliotecas.html')

@app.route("/agora-literaria")
def agora_literaria():
    return render_template("components/agora_literaria.html")

EVENTOS_DESTACADOS = {
    "festival-poesia": {
        "nombre": "Festival de Poesía",
        "siglas": "Festival de Poesía",
        "icono": "fa-feather",
        "color": "poesia",
        "descripcion": "Encuentro literario dedicado a la palabra poética, la oralidad y la creación contemporánea.",
        "fechas": "Marzo 2026",
        "modalidad": "Presencial y virtual",
        "publico": "Ciudadanía general",
        "informacion_general": "El Festival de Poesía reúne poetas, mediadores, lectores y ciudadanía alrededor de recitales, talleres, conversatorios y espacios de creación literaria.",
        "objetivo": "Fortalecer la circulación de la poesía y promover la lectura, escritura y oralidad en la ciudad.",
        "tipo_invitados": "Poetas invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "9:00 a.m.", "actividad": "Apertura y recital inaugural", "descripcion": "Lectura poética con invitados locales y nacionales.", "lugar": "Biblioteca Departamental"},
            {"dia": "Día 2", "hora": "3:00 p.m.", "actividad": "Taller de creación poética", "descripcion": "Espacio práctico para jóvenes escritores.", "lugar": "Biblioteca San Antonio"},
            {"dia": "Día 3", "hora": "6:00 p.m.", "actividad": "Noche de poesía caleña", "descripcion": "Recital abierto a la ciudadanía.", "lugar": "Centro Cultural de Cali"}
        ],
        "invitados": ["Poetas locales", "Autores nacionales", "Mediadores LEO"],
        "lugares": ["Biblioteca Departamental", "Biblioteca San Antonio", "Centro Cultural de Cali"],
        "destacado": "Una celebración de la palabra, la memoria y las voces poéticas de Cali.",
        "destacados": ["Recitales públicos", "Talleres de creación", "Encuentros con poetas", "Participación ciudadana"],
        "convocatorias": [
            {"titulo": "Convocatoria de poetas locales", "descripcion": "Participación de autores caleños en recitales y lecturas públicas.", "fecha_cierre": "15 de febrero de 2026", "url": "/pqrsdf"}
        ],
        "inscripcion": "La participación es gratuita con inscripción previa según disponibilidad de cupos.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "programacion@bibliotecasdecali.gov.co"
    },

    "feria-libro": {
        "nombre": "Feria del Libro",
        "siglas": "Feria del Libro",
        "icono": "fa-book-open",
        "color": "feria",
        "descripcion": "Evento de ciudad que reúne editoriales, librerías, autores, lectores y programación cultural alrededor del libro.",
        "fechas": "Octubre 2026",
        "modalidad": "Presencial",
        "publico": "Familias, lectores, estudiantes y sector editorial",
        "informacion_general": "La Feria del Libro fortalece la circulación editorial, la lectura pública y el encuentro entre autores, librerías, editoriales y ciudadanía.",
        "objetivo": "Promover el acceso al libro, la lectura y la circulación de contenidos editoriales en Santiago de Cali.",
        "tipo_invitados": "Invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "10:00 a.m.", "actividad": "Apertura oficial", "descripcion": "Inicio de la feria con invitados institucionales y culturales.", "lugar": "Bulevar del Río"},
            {"dia": "Día 2", "hora": "4:00 p.m.", "actividad": "Conversatorio con autores", "descripcion": "Diálogo entre escritores, lectores y mediadores.", "lugar": "Carpa principal"},
            {"dia": "Día 3", "hora": "11:00 a.m.", "actividad": "Franja infantil y juvenil", "descripcion": "Actividades de lectura, ilustración y creación.", "lugar": "Zona infantil"}
        ],
        "invitados": ["Autores nacionales", "Editoriales independientes", "Librerías participantes", "Ilustradores"],
        "lugares": ["Bulevar del Río", "Carpa principal", "Zona infantil", "Bibliotecas aliadas"],
        "destacado": "La feria articula el ecosistema del libro y ofrece programación cultural para todos los públicos.",
        "destacados": ["Agenda editorial", "Invitados especiales", "Lanzamientos", "Actividades familiares"],
        "convocatorias": [
            {"titulo": "Convocatoria de editoriales y librerías", "descripcion": "Participación de actores del ecosistema editorial en la feria.", "fecha_cierre": "30 de agosto de 2026", "url": "/pqrsdf"}
        ],
        "librerias_participantes": ["Librería Nacional", "La Crisálida", "Página 13 Libros", "Librería del Río"],
        "inscripcion": "Algunas actividades requieren inscripción previa. El ingreso general está sujeto a la programación oficial.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "ferialibro@bibliotecasdecali.gov.co"
    },

    "encuentro-narracion-oral": {
        "nombre": "Encuentro de Narración Oral",
        "siglas": "Narración Oral",
        "icono": "fa-comments",
        "color": "oral",
        "descripcion": "Espacio para celebrar la tradición oral, la palabra viva, los relatos comunitarios y la memoria del territorio.",
        "fechas": "Julio 2026",
        "modalidad": "Presencial",
        "publico": "Niños, jóvenes, familias y mediadores",
        "informacion_general": "El encuentro reúne narradores, cuenteros, mediadores y comunidades para fortalecer la oralidad como práctica cultural.",
        "objetivo": "Promover la narración oral como herramienta de memoria, identidad y encuentro comunitario.",
        "tipo_invitados": "Narradores invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "2:00 p.m.", "actividad": "Apertura de narración oral", "descripcion": "Relatos para públicos familiares.", "lugar": "Biblioteca El Limonar"},
            {"dia": "Día 2", "hora": "5:00 p.m.", "actividad": "Círculo de cuentería", "descripcion": "Narradores locales comparten historias del territorio.", "lugar": "Biblioteca San Nicolás"},
            {"dia": "Día 3", "hora": "10:00 a.m.", "actividad": "Taller de oralidad", "descripcion": "Herramientas para narrar historias en comunidad.", "lugar": "Biblioteca Departamental"}
        ],
        "invitados": ["Narradores orales", "Cuenteros locales", "Mediadores de lectura"],
        "lugares": ["Biblioteca El Limonar", "Biblioteca San Nicolás", "Biblioteca Departamental"],
        "destacado": "La palabra oral como puente entre generaciones, territorios y memorias.",
        "destacados": ["Cuentería", "Relatos comunitarios", "Talleres de oralidad", "Actividades familiares"],
        "convocatorias": [],
        "inscripcion": "Entrada libre con registro previo en algunas actividades.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "oralidad@bibliotecasdecali.gov.co"
    },

    "cali-emprende-cultura": {
        "nombre": "Cali, Emprende Cultura",
        "siglas": "Cali Emprende Cultura",
        "icono": "fa-lightbulb",
        "color": "emprende",
        "descripcion": "Encuentro para fortalecer emprendimientos culturales, creatividad, innovación y economía cultural en la ciudad.",
        "fechas": "Mayo 2026",
        "modalidad": "Presencial",
        "publico": "Emprendedores culturales y ciudadanía",
        "informacion_general": "Cali, Emprende Cultura articula formación, muestras, ruedas de conexión y programación para emprendedores culturales.",
        "objetivo": "Impulsar capacidades, circulación y visibilidad de emprendimientos culturales de Santiago de Cali.",
        "tipo_invitados": "Invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "9:00 a.m.", "actividad": "Laboratorio de emprendimiento cultural", "descripcion": "Formación para fortalecer ideas y proyectos culturales.", "lugar": "Centro Cultural de Cali"},
            {"dia": "Día 2", "hora": "3:00 p.m.", "actividad": "Muestra de emprendimientos", "descripcion": "Exhibición de productos y servicios culturales.", "lugar": "Biblioteca Departamental"},
            {"dia": "Día 3", "hora": "5:00 p.m.", "actividad": "Rueda de conexiones", "descripcion": "Encuentro entre emprendedores, aliados e instituciones.", "lugar": "Auditorio principal"}
        ],
        "invitados": ["Emprendedores culturales", "Mentores", "Aliados institucionales"],
        "lugares": ["Centro Cultural de Cali", "Biblioteca Departamental", "Auditorio principal"],
        "destacado": "Un espacio para conectar cultura, innovación, creatividad y sostenibilidad.",
        "destacados": ["Talleres", "Muestras culturales", "Ruedas de conexión", "Networking"],
        "convocatorias": [
            {"titulo": "Convocatoria de emprendimientos culturales", "descripcion": "Registro de proyectos para muestra y acompañamiento.", "fecha_cierre": "10 de abril de 2026", "url": "/pqrsdf"}
        ],
        "inscripcion": "Participación con inscripción previa y selección según cupos disponibles.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "emprendecultura@bibliotecasdecali.gov.co"
    },

    "simposio-patrimonio": {
        "nombre": "Simposio Internacional de Patrimonio",
        "siglas": "Simposio de Patrimonio",
        "icono": "fa-landmark",
        "color": "patrimonio",
        "descripcion": "Espacio académico y cultural sobre patrimonio, memoria, archivo, ciudad y gestión cultural.",
        "fechas": "Noviembre 2026",
        "modalidad": "Presencial y virtual",
        "publico": "Investigadores, gestores culturales y ciudadanía",
        "informacion_general": "El simposio convoca expertos, instituciones y comunidades para reflexionar sobre patrimonio cultural y memoria urbana.",
        "objetivo": "Fortalecer el diálogo sobre conservación, apropiación y gestión del patrimonio cultural.",
        "tipo_invitados": "Expertos invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "8:30 a.m.", "actividad": "Conferencia inaugural", "descripcion": "Patrimonio, ciudad y memoria en América Latina.", "lugar": "Auditorio principal"},
            {"dia": "Día 2", "hora": "2:00 p.m.", "actividad": "Mesa de archivo y memoria", "descripcion": "Experiencias de archivos comunitarios y patrimonio documental.", "lugar": "Biblioteca Departamental"},
            {"dia": "Día 3", "hora": "10:00 a.m.", "actividad": "Recorrido patrimonial", "descripcion": "Visita guiada por lugares de memoria en Cali.", "lugar": "Centro histórico"}
        ],
        "invitados": ["Investigadores", "Gestores patrimoniales", "Archivistas", "Académicos"],
        "lugares": ["Auditorio principal", "Biblioteca Departamental", "Centro histórico"],
        "destacado": "Un encuentro para pensar el patrimonio como memoria viva de la ciudad.",
        "destacados": ["Conferencias", "Mesas académicas", "Recorridos patrimoniales", "Exposiciones"],
        "convocatorias": [],
        "inscripcion": "Inscripción gratuita para asistentes presenciales y virtuales.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "patrimonio@bibliotecasdecali.gov.co"
    },

    "sonando-el-tambor": {
        "nombre": "Sonando El Tambor",
        "siglas": "Sonando El Tambor",
        "icono": "fa-drum",
        "color": "tambor",
        "descripcion": "Evento cultural dedicado a la música, la oralidad, la tradición afrodescendiente y las expresiones del Pacífico.",
        "fechas": "Agosto 2026",
        "modalidad": "Presencial",
        "publico": "Familias, comunidades y ciudadanía general",
        "informacion_general": "Sonando El Tambor celebra saberes, sonidos, relatos y prácticas culturales asociadas al Pacífico y a la memoria afrodescendiente.",
        "objetivo": "Visibilizar expresiones sonoras, orales y culturales del Pacífico colombiano en la Red de Bibliotecas.",
        "tipo_invitados": "Artistas invitados",
        "agenda": [
            {"dia": "Día 1", "hora": "4:00 p.m.", "actividad": "Apertura musical", "descripcion": "Presentación de agrupaciones tradicionales.", "lugar": "Biblioteca de Siloé"},
            {"dia": "Día 2", "hora": "10:00 a.m.", "actividad": "Taller de percusión", "descripcion": "Introducción a ritmos del Pacífico.", "lugar": "Biblioteca El Vallado"},
            {"dia": "Día 3", "hora": "6:00 p.m.", "actividad": "Noche de oralidad y tambor", "descripcion": "Relatos, cantos y sonidos tradicionales.", "lugar": "Centro Cultural de Cali"}
        ],
        "invitados": ["Músicos tradicionales", "Narradores orales", "Portadores de tradición"],
        "lugares": ["Biblioteca de Siloé", "Biblioteca El Vallado", "Centro Cultural de Cali"],
        "destacado": "Una experiencia sonora y cultural para reconocer la fuerza del tambor, la oralidad y la memoria.",
        "destacados": ["Música en vivo", "Talleres de percusión", "Oralidad del Pacífico", "Encuentro comunitario"],
        "convocatorias": [],
        "inscripcion": "Ingreso libre hasta completar aforo.",
        "url_inscripcion": "/pqrsdf",
        "contacto": "tambor@bibliotecasdecali.gov.co"
    }
}

@app.context_processor
def inject_eventos_destacados():
    return dict(eventos_destacados=EVENTOS_DESTACADOS)


@app.route('/programacion-cultural/<slug>')
def evento_destacado(slug):
    evento = EVENTOS_DESTACADOS.get(slug)

    if not evento:
        abort(404)

    return render_template(
        'components/evento_destacado.html',
        evento=evento
    )

@app.route('/biblioteca/biblioteca_nuevo_latir')
def biblioteca_nuevo_latir():
    return render_template('components/biblioteca_nuevo_latir.html')


@app.route('/biblioteca/comuna1')
def biblioteca_comuna1():
    return render_template('components/biblioteca_comuna1.html')


@app.route('/biblioteca/centenario')
def biblioteca_centenario():
    return render_template('components/biblioteca_centenario.html')


@app.route('/biblioteca/buitrera')
def biblioteca_buitrera():
    return render_template('components/biblioteca_buitrera.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

