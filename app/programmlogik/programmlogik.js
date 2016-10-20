/*

	name		programmlogik.js
	created 	13.10.2016
	
	required 	jquery-3.1.1.min.js
	
*/

/*
	Wurde jQuery in die Seite eingebunden?
	Wenn nicht, Fehler anzeigen.
*/
if (!window.jQuery) {
  alert("Programmlogik: Bitte jQuery in den <head> Bereich des Dokumentes einbinden. Siehe console.log!");
  console.log("Programmlogik: Bitte jQuery in den <head> Bereich des Dokumentes einbinden.");
  console.log('Programmlogik: <script src="jquery-3.1.1.min.js" type="text/javascript"></script>');
} else {

	/* 
		Warten, bis die Seite fertig geladen hat.
		So stellen wir sicher, dass alle Elemente da sind.
	*/
	$(document).ready(function() {

		$.getJSON("test.json", function(json) {
			console.log( "success" );
			console.log(json);
		})
			.fail(function() {
				console.log("Programmlogik: Fehler - JSON Datei "+file+" konnte nicht geladen werden.");
				err = 1;
			});
		
	});

}