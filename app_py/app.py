from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

answer_dict={
    "1": [
      "gorila",
      "negro",
      "bailando",
      "Madagascar",
      "bien",
      "tigres",
      "blancos",
      "moverme",
    ],
    "2": [
      "domingo",
      "tía",
      "perro",
      "hamburguesas",
      "refrescos",
      "buen",
      "cartas",
    ],
    "3": [
      "gato",
      "apestoso",
      "California",
      "gato",
      "azul",
      "3",
      "peces",
      "bailar",
      "canciones",
      "triste",
      "como niño",
      "feliz",
    ],
    "4": ["tortuga", "liebre"],
}

stories = [
  {
    "story_id": 1,
    "inputs": 8,
    "title": "¡Vamos al Zoológico!",
    "story": '¡Hoy fuimos al zoológico! Lo primero que vimos fue un <span class="rep_input">_____</span> <span class="rep_input">_____</span> <span class="rep_input">_____</span>. El cuidador nos dijo que eso era normal, excepto en <span class="rep_input">_____</span>. ¡Me la pasé <span class="rep_input">_____</span>! La próxima vez recordaré que si alguna vez veo <span class="rep_input">_____</span> <span class="rep_input">_____</span>, debo <span class="rep_input">_____</span> en la otra dirección.',
    "words": ["gorila", "negro", "bailando", "Madagascar", "bien", "tigres", "blancos", "moverme"],
  },
  {
    "story_id": 2,
    "inputs": 7,
    "title": "¡Hora del Picnic!",
    "story": 'El <span class="rep_input">_____</span> vamos a hacer un picnic. Iré con mi <span class="rep_input">_____</span> y mi mascota favorita, un <span class="rep_input">_____</span>. Para el almuerzo comeremos <span class="rep_input">_____</span> y beberemos <span class="rep_input">_____</span>. Terminaremos el día con un <span class="rep_input">_____</span> juego de <span class="rep_input">_____</span>.',
    "words": ["domingo", "tía", "perro", "hamburguesas", "refrescos", "buen", "cartas"],
  },
  {
    "story_id": 3,
    "inputs": 12,
    "title": "Cuento simplón de Animales",
    "story": 'Había una vez un <span class="rep_input">_____</span> <span class="rep_input">_____</span> de <span class="rep_input">_____</span>. Nadie sabía que era un <span class="rep_input">_____</span> porque tenía un pelaje <span class="rep_input">_____</span> y comía <span class="rep_input">_____</span> <span class="rep_input">_____</span> todos los días. Le gustaba <span class="rep_input">_____</span> y cantar <span class="rep_input">_____</span>. Siempre que estaba <span class="rep_input">_____</span>, comenzaba a hablar <span class="rep_input">_____</span>. Entonces se sentía <span class="rep_input">_____</span>.',
    "words": ["gato", "apestoso", "gato", "azul", "3", "peces", "bailar", "canciones", "triste", "como niño", "feliz"],
  },
  {
    "story_id": 4,
    "inputs": 2,
    "title": "La historia de la tortuga y la liebre",
    "story": 'Había una vez una <span class="rep_input">_____</span> y una <span class="rep_input">______</span> que decidieron hacer una carrera. La liebre, confiada en su velocidad, se burló de la tortuga y se quedó dormida durante la carrera. Mientras tanto, la tortuga siguió avanzando lentamente pero sin parar. Cuando la liebre despertó, se dio cuenta de que la tortuga había llegado a la meta antes que ella. La moraleja de la historia es que la perseverancia y el esfuerzo son más importantes que la velocidad.',
    "words": ["tortuga", "liebre"],
  },
]






@app.route("/")
def index():
    return render_template("index.html")
    

@app.route("/get-story", methods=["GET"])
def get_story():
    return jsonify({
        "status": "success",
        "story": random.choice(stories)
    }), 200


    


@app.route("/post-answers", methods=["POST"])
def post_answers():
    story_id = request.json.get("story_id")
    values = request.json.get("values")
    answers = answer_dict.get(story_id)
    index, score = 0, 0
    while index < len(values):
        if values[index].lower() == answers[index].lower():
            score += 1
        index += 1
    return jsonify({
        "status": "success",
        "result": f"{score} / {len(values)}"
    })

if __name__ == "__main__":
    app.run(debug=True)