// alert("DOM no cargado");
console.log("Script externo cargado");

// const $ = (selector || function) => {}

/*
    $(() => {
        alert("DOM cargado");
        })
*/

let stories = [
  {
    story_id: 1,
    inputs: 8,
    title: "¡Vamos al Zoológico!",
    story: `¡Hoy fuimos al zoológico! Lo primero que vimos fue un <span class="rep_input">_____</span> <span class="rep_input">_____</span> <span class="rep_input">_____</span>. El cuidador nos dijo que eso era normal, excepto en <span class="rep_input">_____</span>. ¡Me la pasé <span class="rep_input">_____</span>! La próxima vez recordaré que si alguna vez veo <span class="rep_input">_____</span> <span class="rep_input">_____</span>, debo <span class="rep_input">_____</span> en la otra dirección.`,
    words: [
      "gorila",
      "negro",
      "bailando",
      "Madagascar",
      "bien",
      "tigres",
      "blancos",
      "moverme",
    ],
  },
  {
    story_id: 2,
    inputs: 7,
    title: "¡Hora del Picnic!",
    story: `El <span class="rep_input">_____</span> vamos a hacer un picnic. Iré con mi <span class="rep_input">_____</span> y mi mascota favorita, un <span class="rep_input">_____</span>. Para el almuerzo comeremos <span class="rep_input">_____</span> y beberemos <span class="rep_input">_____</span>. Terminaremos el día con un <span class="rep_input">_____</span> juego de <span class="rep_input">_____</span>.`,
    words: [
      "domingo",
      "tía",
      "perro",
      "hamburguesas",
      "refrescos",
      "buen",
      "cartas",
    ],
  },
  {
    story_id: 3,
    inputs: 12,
    title: "Cuento simplón de Animales",
    story: `Había una vez un <span class="rep_input">_____</span> <span class="rep_input">_____</span> de <span class="rep_input">_____</span>. Nadie sabía que era un <span class="rep_input">_____</span> porque tenía un pelaje <span class="rep_input">_____</span> y comía <span class="rep_input">_____</span> <span class="rep_input">_____</span> todos los días. Le gustaba <span class="rep_input">_____</span> y cantar <span class="rep_input">_____</span>. Siempre que estaba <span class="rep_input">_____</span>, comenzaba a hablar <span class="rep_input">_____</span>. Entonces se sentía <span class="rep_input">_____</span>.`,
    words: [
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
  },
  {
    story_id: 4,
    inputs: 2,
    title: "La historia de la tortuga y la liebre",
    story: `Había una vez una <span class="rep_input">_____</span> y una <span class="rep_input">______</span> que decidieron hacer una carrera. La liebre, confiada en su velocidad, se burló de la tortuga y se quedó dormida durante la carrera. Mientras tanto, la tortuga siguió avanzando lentamente pero sin parar. Cuando la liebre despertó, se dio cuenta de que la tortuga había llegado a la meta antes que ella. La moraleja de la historia es que la perseverancia y el esfuerzo son más importantes que la velocidad.`,
    words: ["tortuga", "liebre"],
  },
];

$(document).ready(function () {
    getStory();
  //displayStory();
});
function getStory() {
$.ajax({
    url: "/get-story",
    type: "GET",
    dataType: "json",
    contentType: "application/json",
    success: function (response) {
        console.log(response.story)
        displayStory(response.story);
    },
    error: function (error) {
        console.error("Error al obtener la historia:", error);
        alert("Error al obtener la historia");
    },
});
};

$(function () {
  //    $(".input_field").keyup(function () {
  $("#next_story").click(function () {
    $("#result_container").addClass("hidden");
    getStory();
  });

  $("#submit_story").click(function () {
    let values = [];

    for (let i = 0; i < $(".input_field").length; i++) {
      values.push($(".input_field").eq(i).val());
    }

    let data = {
      story_id: $("#story_id").val(),
      values: values,
    };
    console.log(data);

    $.ajax({
      url: "/post-answers",
      type: "POST",
      data: JSON.stringify(data), // data:El dato;siguienteDato: Otro dato mas; --> {"data":"El dato","siguienteDato": "Otro dato mas",}
      dataType: "json",
      contentType: "application/json",
      success: function (response) {
        console.log("Respuesta del servidor:", response);
        $("#result").html(response.result);
        $("#result_container").removeClass("hidden");
      },
      error: function (error) {
        console.error("Error al enviar la historia:", error.responseText);
        alert("Error al enviar la historia");
      },
    });
  });
});

function displayStory(story) {
//  const story = stories[Math.floor(Math.random() * stories.length)];
  $("#story_title").html(story.title);

  $("#bank_words").empty();
  for (let i = 0; i < story.words.length; i++) {
    let html = `<button class="word_bank_button">${story.words[i]}</button>`;
    $("#bank_words").append(html);
  }

  $("#input_fields").empty();
  for (let i = 0; i < story.inputs; i++) {
    let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${
      i + 1
    }"/>`;
    $("#input_fields").append(input_html);
  }

  $("#story_text").html(story.story);
  $("#story_id").val(story.story_id);


  $(document).on("keyup", ".input_field", function () {
    let id = $(this).attr("id");
    let input_number = id.split("_")[1];
    $(".rep_input").eq(input_number).html($(this).val());
  });

}
