function randomNum() {
  let min = 3000;
  let max = 100000;
  let num = Math.floor(Math.random() * (max - min));
  return num;
}
document.getElementById("donations").innerHTML = "€ " + randomNum();

const contantForm = document.getElementsByClassName("contact-form")[0];
ConstantSourceNode;
console.log(contantForm);

$(".submit-message").hide();
$(".submit-btn").click(function(e) {
  e.preventDefault();
  // $(".submit-message").show();
  // alert("Message has been sent");
});
