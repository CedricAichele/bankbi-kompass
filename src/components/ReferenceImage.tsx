import { useRef, useState } from "react";
import { Expand, X, ImageIcon } from "lucide-react";
import type { ReferencePicture } from "../content/schema";

export function ReferenceImage({ image }: { image: ReferencePicture }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(false);
  if (image.status === "todo" || image.bildAnzeigen === false || !image.src) return null;
  const src = image.src
    ? import.meta.env.BASE_URL + image.src.replace(/^\//, "")
    : undefined;
  const label = (
    <div className="image-labels">
      {image.schritt && <span>Schritt {image.schritt}</span>}
      {image.schema && <strong>Schematische Darstellung</strong>}
    </div>
  );
  return (
    <figure className="reference-image">
      {label}
      {failed ? (
        <div className="image-placeholder" role="note">
          <ImageIcon size={24} />
          <div>
            <strong>Abbildung derzeit nicht verfügbar.</strong>
            <p>Die Arbeitsschritte und das Beispiel bleiben verfügbar.</p>
          </div>
        </div>
      ) : (
        <button
          ref={trigger}
          className="image-trigger"
          aria-label={"Abbildung vergrößern: " + image.caption}
          onClick={() => dialog.current?.showModal()}
        >
          <img
            src={src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
          <span>
            <Expand size={16} /> Vergrößern
          </span>
        </button>
      )}
      <figcaption>
        {image.caption}
        {image.hinweis && !failed && <span className="image-note">{image.hinweis}</span>}
      </figcaption>
      {!failed && (
        <dialog
          ref={dialog}
          aria-label={image.caption}
          onCancel={(event) => {
            event.preventDefault();
            dialog.current?.close();
          }}
          onClose={() => {
            setZoom(false);
            trigger.current?.focus();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close();
          }}
        >
          <div className="image-dialog-header">
            {label}
            <button
              className="image-close"
              aria-pressed={zoom}
              onClick={() => setZoom(!zoom)}
            >
              {zoom ? "An Fenster anpassen" : "Zoom 200 %"}
            </button>
            <button
              autoFocus
              className="image-close"
              aria-label="Abbildung schließen"
              onClick={() => dialog.current?.close()}
            >
              <X /> Schließen
            </button>
          </div>
          <div
            className={"image-viewport" + (zoom ? " is-zoomed" : "")}
            tabIndex={0}
            aria-label="Bildbereich, mit Pfeiltasten verschiebbar"
          >
            <img src={src} alt={image.alt} />
          </div>
          <p>{image.caption}</p>
          {image.hinweis && <p>{image.hinweis}</p>}
        </dialog>
      )}
    </figure>
  );
}
