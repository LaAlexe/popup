$(document).ready(function() {
	$(".popup").magnificPopup();
});

$("#form").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Спасибо!Ваш отзыв отправлен на модерацию");
		setTimeout(function() {
		}, 1000);
	});
	return false;
});