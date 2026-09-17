---
{
  "id": "xverweis",
  "slug": "xverweis",
  "titel": "XVERWEIS",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS sucht einen Schlüssel und liefert den passenden Wert aus einem anderen Bereich. Standard ist exakte Übereinstimmung.",
  "ort": "Excel → Formelzelle; Microsoft 365 / Excel 2021 oder neuer",
  "tags": [
    "XVERWEIS",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "werte holen",
    "werte aus anderer tabelle"
  ],
  "verwandteThemen": [
    "index-vergleich",
    "zusammenfuehren",
    "beziehungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/excel/excel-xverweis.webp",
      "alt": "XVERWEIS liefert für das synthetische Konto K003 den Bestand 2.000.",
      "caption": "XVERWEIS liefert für das synthetische Konto K003 den Bestand 2.000.",
      "schritt": 1,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ]
}
---

## Wann brauche ich das?

Du willst zu einer Kontonummer den passenden Bestand aus einer zweiten Tabelle holen.

## Schritte

1. Suchwert, Suchbereich und Rückgabebereich festlegen.
2. Ersatztext für fehlende Treffer angeben.
3. Eindeutigkeit der Suchschlüssel prüfen.

## Beispiel

```excel
=XVERWEIS("K003";Konten!A2:A7;Konten!D2:D7;"Fehlt";0)
```

Ergebnis: 2.000. Im Blatt Konten steht die Kontonummer in A und der Bestand in D.

## Typischer Fehler

Bei mehreren passenden Schlüsseln kommt standardmäßig der erste Treffer. Das löst keinen Zuordnungskonflikt.
