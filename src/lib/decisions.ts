export const decisions = [
  {
    id: "measure",
    titel: "Measure oder Spalte?",
    frage: "Was soll das Ergebnis leisten?",
    options: [
      {
        label: "Auf Filter und Slicer reagieren",
        answer:
          "Ein Measure berechnet die Kennzahl im aktuellen Filterkontext.",
        link: "measure",
      },
      {
        label: "Einen Wert je Zeile bereitstellen",
        answer:
          "Prüfe Power Query für die Vorbereitung. Eine berechnete Spalte eignet sich, wenn du dafür das geladene Datenmodell brauchst.",
        link: "measure-spalte",
      },
    ],
  },
  {
    id: "verbinden",
    titel: "Zusammenführen oder Anhängen?",
    frage: "Wie sollen die Tabellen zusammenkommen?",
    options: [
      {
        label: "Spalten über einen Schlüssel ergänzen",
        answer:
          "Zusammenführen verbindet passende Zeilen. Prüfe vorher die Eindeutigkeit des Schlüssels.",
        link: "zusammenfuehren",
      },
      {
        label: "Gleichartige Zeilen untereinander setzen",
        answer:
          "Anhängen stapelt Zeilen anhand der Spaltennamen. Prüfe Datentypen und fehlende Spalten.",
        link: "anhaengen",
      },
    ],
  },
  {
    id: "query",
    titel: "Power Query oder DAX?",
    frage: "Wann soll die Berechnung stattfinden?",
    options: [
      {
        label: "Vor dem Laden bereinigen",
        answer: "Power Query transformiert Daten bei der Aktualisierung.",
        link: "power-query",
      },
      {
        label: "Bei der Berichtsauswertung berechnen",
        answer: "Ein DAX-Measure wertet die Auswahl im Bericht aus.",
        link: "measure",
      },
    ],
  },
  {
    id: "zaehlen",
    titel: "Zeilen oder Personen zählen?",
    frage: "Was soll gezählt werden?",
    options: [
      {
        label: "Jede vorhandene Zeile",
        answer:
          "COUNTROWS zählt Tabellenzeilen. COUNT zählt nichtleere Werte einer unterstützten Spalte; das ist eine andere Frage.",
        link: "countrows",
      },
      {
        label: "Jede Person nur einmal",
        answer:
          "DISTINCTCOUNT zählt unterschiedliche Schlüssel. Beachte, dass BLANK als eigener Wert mitzählt.",
        link: "distinctcount",
      },
    ],
  },
  {
    id: "beziehung",
    titel: "Beziehung oder XVERWEIS?",
    frage: "Wo brauchst du das Ergebnis?",
    options: [
      {
        label: "Als Zellenwert in Excel",
        answer:
          "XVERWEIS liefert einen passenden Rückgabewert. Mehrfachtreffer müssen fachlich geklärt werden.",
        link: "xverweis",
      },
      {
        label: "Als Filter zwischen Modelltabellen",
        answer:
          "Eine Beziehung überträgt Filter, ohne alle Attribute in die Faktentabelle zu kopieren.",
        link: "beziehungen",
      },
    ],
  },
  {
    id: "gruppen",
    titel: "Gruppieren oder Zeilen behalten?",
    frage: "Brauchst du die Einzelzeilen noch?",
    options: [
      {
        label: "Ja, für spätere Detailanalysen",
        answer:
          "Behalte die Detaildaten und aggregiere mit Measures oder einer PivotTable.",
        link: "granularitaet",
      },
      {
        label: "Nein, nur die festgelegte Summe",
        answer:
          "Gruppieren in Power Query reduziert Daten auf die gewählte Ebene. Details gehen in diesem Ergebnis verloren.",
        link: "gruppieren",
      },
    ],
  },
  {
    id: "modell-merge",
    titel: "Beziehung oder Zusammenführen?",
    frage:
      "Brauchst du getrennte Modelltabellen oder eine aufbereitete Tabelle?",
    options: [
      {
        label: "Getrennte Tabellen gemeinsam filtern",
        answer:
          "Eine Beziehung überträgt Filter im Modell. Dimensionen bleiben zentral nutzbar.",
        link: "beziehungen",
      },
      {
        label: "Spalten vor dem Laden ergänzen",
        answer:
          "Zusammenführen ergänzt Werte in Power Query. Mehrere Treffer können Zeilen vervielfachen.",
        link: "zusammenfuehren",
      },
    ],
  },
  {
    id: "excel-lookup",
    titel: "XVERWEIS oder Power Query?",
    frage: "Ein Zellenergebnis oder eine wiederholbare Aufbereitung?",
    options: [
      {
        label: "Formel direkt im Arbeitsblatt",
        answer:
          "XVERWEIS passt zu einzelnen Rückgabewerten und reagiert auf geänderte Zellen.",
        link: "xverweis",
      },
      {
        label: "Listen regelmäßig zusammenführen",
        answer:
          "Power Query speichert die Transformationsschritte. Neue Quelldaten erscheinen nach Aktualisierung.",
        link: "xverweis-oder-query",
      },
    ],
  },
  {
    id: "excel-pivot",
    titel: "Pivot oder Power Query?",
    frage: "Willst du flexibel auswerten oder Daten vorbereiten?",
    options: [
      {
        label: "Summen interaktiv umstellen",
        answer:
          "Eine PivotTable erlaubt flexible Zeilen, Spalten, Filter und Kennzahlen.",
        link: "pivottable",
      },
      {
        label: "Bereinigte Ergebnistabelle erzeugen",
        answer:
          "Power Query bereinigt und gruppiert bei jeder Aktualisierung nach denselben Regeln.",
        link: "pivot-oder-query",
      },
    ],
  },
  {
    id: "darstellung",
    titel: "Liste oder Matrix?",
    frage: "Einzelne Datensätze prüfen oder Gruppen vergleichen?",
    options: [
      {
        label: "Details prüfen oder exportieren",
        answer:
          "Eine flache Liste hält die festgelegte Zeilenebene sichtbar und lässt sich gut weiterverarbeiten.",
        link: "liste-oder-matrix",
      },
      {
        label: "Gruppen auf zwei Achsen vergleichen",
        answer:
          "Eine Matrix stellt aggregierte Werte nach Zeilen- und Spaltengruppen gegenüber.",
        link: "matrix",
      },
    ],
  },
];
