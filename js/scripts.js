$(document).ready(function() {



  $("button#hello").click(function() {
    $("ul#user").before("<li>Hello!</li>");
    $("ul#webpage").after("<li>Why hello there.</li>");
    $("ul#user").children("li").first().click(function() {
      // $(this).remove();
      // console.log($(this));
      // console.log(this);
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").before("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user</li>");
    $("ul#user").children("li").first().click(function() {
      alert("GET OUT.");
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copping me!</li>");
    $("ul#webpage").prepend("<li>I meant no offence</li>");
    $("ul#user").children("li").first().click(function() {
      alert("I'll cop what i wanna cop.");
    });
  });
});
