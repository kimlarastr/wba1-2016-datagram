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
  console.error("Programmlogik: Bitte jQuery in den <head> Bereich des Dokumentes einbinden.");
  console.error('Programmlogik: <script src="jquery-3.1.1.min.js" type="text/javascript"></script>');
} else {

	/* 
		Warten, bis die Seite fertig geladen hat.
		So stellen wir sicher, dass alle Elemente da sind.
	*/
	$(document).ready(function() {
		try {
				/*
					 -> test.json

					 var testJSON = [
					 { 'myKey': 'A', 'status': 0 },
					 { 'myKey': 'B', 'status': 3 },
					 { 'myKey': 'C', 'status': 3 },
					 { 'myKey': 'D', 'status': 2 },
					 { 'myKey': 'E', 'status': 7 }
					 ];
			 	*/
				$.getJSON("test.json", function (json) {
					//console.log(json);

					console.log(sortJSON(filterHighscoreJSONByTime(json, 'time', 3, 10), 'name', 'ASC'));
				})
					.fail(function () {
						console.error("Programmlogik: Fehler - JSON Datei test.json konnte nicht geladen werden.");
					}
				);

		}
		catch(error) {
			console.error("Programmlogik: "+error);
		}

	});

	/*
		sortJSON(data, key, way)

		Sortierungsfunktion fuer JSON / Arrays / Objects
		Die Standard Sortiermethode .sort wird um die Funktionalität erweitert, auch Nummern richtig zu sortieren.

		@param data - JSON Objekt
		@param key - Nach welchem Element soll sortiert werden?
		@param way - aufsteigend ASC oder absteigend DESC
	 */
	function sortJSON(data, key, way) {
		return data.sort(function(a, b) {
			var x = a[key];
			var y = b[key];

			if (way === 'ASC' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
			if (way === 'DESC') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
		});
	}


	/*
	 	filterHighscoreJSONByTime(data, key, time1, time2)

		Filtert JSON Daten nach einem angegeben Zeitraum.

		@param data - JSON Objekt
		@param key - Nach welchem Element soll sortiert werden?
		@param time1 - Startzeitpunkt
		@param time2 - Endzeitpunkt
	 */
	function filterHighscoreJSONByTime(data, key, time1, time2) {
		for(var i = 0, len = data.length; i < len; i++){
			if (data[i][key] < time1) { delete data[i]; } else if (data[i][key] > time2) { delete data[i]; }
		}

		return data;
	}
}

