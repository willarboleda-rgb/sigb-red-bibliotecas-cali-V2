from flask import Flask, render_template, request, redirect, url_for

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


@app.route('/pqrsd')
def pqrsd():
    return render_template('components/pqrsd.html')

@app.route('/equipo-directorio')
def equipo_directorio():
    return render_template('components/equipo_directorio.html')

@app.errorhandler(404)
def pagina_no_encontrada(error):
    return render_template("404.html"), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

