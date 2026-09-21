import { Link } from "react-router-dom";

export function Imprint() {
  return <article className="note-list"><h1>Impressum</h1>
    <p>BankBI Kompass ist ein unabhängiges Wissensprojekt von Cedric Aichele.</p>
    <h2>Angaben des Betreibers</h2>
    <p>Betreiber: Cedric Aichele. <strong>Noch zu vervollständigen:</strong> eine geeignete ladungsfähige Anschrift und eine E-Mail-Adresse für die Kontaktaufnahme.</p>
    <p>Die erforderlichen Kontakt- und Adressangaben werden durch den Betreiber ergänzt. Bis dahin sind die Betreiberangaben unvollständig.</p>
    <h2>Anwendbare Pflichten klären</h2>
    <p>Welche weiteren Angaben erforderlich sind, hängt vom tatsächlichen Angebot und Betreiberstatus ab. Der Betreiber muss insbesondere die Anwendbarkeit von § 5 DDG und gegebenenfalls weiterer Informationspflichten prüfen. Diese Vorlage ersetzt keine rechtliche Prüfung.</p>
    <p><a href="https://www.gesetze-im-internet.de/ddg/__5.html" target="_blank" rel="noreferrer">§ 5 Digitale-Dienste-Gesetz – amtlicher Gesetzestext</a></p>
    <p><Link to="/datenschutz">Datenschutz</Link> · <Link to="/ueber">Über das Projekt</Link></p>
  </article>;
}

export function Privacy() {
  return <article className="note-list"><h1>Datenschutz</h1>
    <p>Stand: 18. September 2026. Diese Beschreibung erläutert die technische Funktionsweise der veröffentlichten Anwendung.</p>
    <h2>Verantwortlicher und Kontakt</h2>
    <p>Betreiber: Cedric Aichele. <strong>TODO: Kontaktadresse und erforderliche Betreiberangaben im <Link to="/impressum">Impressum</Link> vervollständigen.</strong></p>
    <h2>Abruf über GitHub Pages</h2>
    <p>Die statischen Dateien werden über GitHub Pages ausgeliefert. Beim Seitenabruf erhält GitHub technisch notwendige Verbindungsdaten, insbesondere die IP-Adresse. Umfang, Speicherdauer und Verarbeitung durch GitHub beschreibt dessen Datenschutzerklärung. Der Betreiber hat keine eigene Serverdatenbank für diese Anwendung.</p>
    <p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub – Datenschutzerklärung</a> · <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages" target="_blank" rel="noreferrer">GitHub Pages – Hosting und Datenprotokollierung</a></p>
    <h2>Suche, Favoriten und Zwischenablage</h2>
    <p>Die Suche läuft im Browser. Suchbegriffe stehen im Hash-Teil der Adresse und werden von der Anwendung nicht an einen Suchdienst gesendet. Favoriten werden ausschließlich im localStorage dieses Browsers unter „bankbi:favoriten:v1“ gespeichert. Du kannst sie durch erneutes Anklicken von „Gemerkt“ oder durch Löschen der Websitedaten entfernen. Die Kopierfunktion schreibt Beispielcode erst nach einem Klick in die Zwischenablage.</p>
    <h2>Keine Konten oder Analysedienste</h2>
    <p>Die Anwendung hat keine eigenen Nutzerkonten, Uploads oder Datenbank, verwendet keine externe KI und kein eigenes Analytics oder Tracking. Sie setzt selbst keine Cookies. Schriftarten, Bilder und Anwendungsdateien werden zusammen mit der Website ausgeliefert. Alle Beispieldaten sind synthetisch.</p>
    <h2>Externe Quellen</h2>
    <p>Externe Seiten werden erst beim Anklicken eines Quellenlinks geöffnet. Für deren Verarbeitung gelten die Informationen des jeweiligen Anbieters.</p>
    <h2>Offene Angaben des Betreibers</h2>
    <p><strong>TODO:</strong> Die konkrete datenschutzrechtliche Einordnung einschließlich Rechtsgrundlagen, etwaiger internationaler Übermittlungen, Betroffenenrechte und zuständiger Aufsichtsbehörde prüfen und ergänzen. Diese technische Beschreibung beansprucht keine vollständige rechtliche Konformitätsprüfung.</p>
  </article>;
}
