import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ProduitCard from "../components/ProduitCard";
import {
  getProduits,
  getCategories,
  getMarques,
  searchProduits,
} from "../services/produitService";
import "../styles/produit.css";

export default function Produits() {
  const [searchParams, setSearchParams] = useSearchParams();

  // ── États ────────────────────────────────────────────
  const [produits,    setProduits]    = useState([]);
  const [categories,  setCategories]  = useState([]);
  const [marques,     setMarques]     = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [meta,        setMeta]        = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Filtres (lus depuis l'URL) ───────────────────────
  const [filtres, setFiltres] = useState({
    q:            searchParams.get("q")            || "",
    id_categorie: searchParams.get("id_categorie") || "",
    marque:       searchParams.get("marque")       || "",
    prix_min:     searchParams.get("prix_min")     || "",
    prix_max:     searchParams.get("prix_max")     || "",
    en_promo:     searchParams.get("en_promo")     || "",
    tri:          searchParams.get("tri")          || "recent",
    page:         searchParams.get("page")         || 1,
    par_page:     12,
  });

  // ── Chargement initial ───────────────────────────────
  useEffect(() => {
    getCategories().then((r) => setCategories(r.data.data || []));
    getMarques().then((r)    => setMarques(r.data.data    || []));
  }, []);

  // ── Chargement produits ──────────────────────────────
  const chargerProduits = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      Object.entries(filtres).forEach(([k, v]) => {
        if (v !== "" && v !== null) params[k] = v;
      });

      const res = await getProduits(params);
      setProduits(res.data.data  || []);
      setMeta(res.data.meta      || null);
    } catch (err) {
      console.error("Erreur chargement produits", err);
    } finally {
      setLoading(false);
    }
  }, [filtres]);

  useEffect(() => {
    chargerProduits();
    // Synchroniser l'URL
    const params = {};
    Object.entries(filtres).forEach(([k, v]) => {
      if (v !== "" && v !== null && k !== "par_page") params[k] = v;
    });
    setSearchParams(params, { replace: true });
  }, [filtres]);

  // ── Helpers filtres ──────────────────────────────────
  const setFiltre = (key, value) =>
    setFiltres((prev) => ({ ...prev, [key]: value, page: 1 }));

  const resetFiltres = () =>
    setFiltres({ q: "", id_categorie: "", marque: "", prix_min: "",
                 prix_max: "", en_promo: "", tri: "recent", page: 1, par_page: 12 });

  const nbFiltresActifs = [
    filtres.id_categorie, filtres.marque, filtres.prix_min,
    filtres.prix_max, filtres.en_promo,
  ].filter(Boolean).length;

  return (
    <div className="bp-page">

      {/* ══ HERO ══════════════════════════════════════ */}
      <div className="bp-hero">
        <div className="bp-hero-inner">
          <h1>Notre <span>Boutique</span></h1>
          <p>Informatique, drones, imprimantes et plus encore</p>

          {/* Barre de recherche */}
          <div className="bp-search">
            <span className="bp-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un produit, une marque..."
              value={filtres.q}
              onChange={(e) => setFiltre("q", e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && chargerProduits()}
            />
            {filtres.q && (
              <button className="bp-search-clear" onClick={() => setFiltre("q", "")}>✕</button>
            )}
            <button className="bp-search-btn" onClick={chargerProduits}>
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* ══ CORPS PRINCIPAL ═══════════════════════════ */}
      <div className="bp-body">

        {/* ── SIDEBAR ─────────────────────────────── */}
        <aside className={`bp-sidebar ${sidebarOpen ? "bp-sidebar--open" : ""}`}>

          {/* Titre sidebar */}
          <div className="bp-sidebar-header">
            <h2>📁 Parcourir les rayons</h2>
            <button className="bp-sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
          </div>

          {/* Catégories */}
          <div className="bp-filtre-bloc">
            <h3 className="bp-filtre-titre">Catégories</h3>
            <ul className="bp-cat-list">
              <li
                className={`bp-cat-item ${!filtres.id_categorie ? "bp-cat-item--actif" : ""}`}
                onClick={() => setFiltre("id_categorie", "")}
              >
                <span>🏷️</span> Toutes les catégories
              </li>
              {categories.map((cat) => (
                <li
                  key={cat.id_categorie}
                  className={`bp-cat-item ${filtres.id_categorie == cat.id_categorie ? "bp-cat-item--actif" : ""}`}
                  onClick={() => setFiltre("id_categorie", cat.id_categorie)}
                >
                  <span>{cat.icone || "›"}</span> {cat.nom}
                </li>
              ))}
            </ul>
          </div>

          {/* Marques */}
          {marques.length > 0 && (
            <div className="bp-filtre-bloc">
              <h3 className="bp-filtre-titre">Marques</h3>
              <div className="bp-marque-list">
                {marques.map((m) => (
                  <label key={m} className="bp-marque-item">
                    <input
                      type="radio"
                      name="marque"
                      checked={filtres.marque === m}
                      onChange={() => setFiltre("marque", filtres.marque === m ? "" : m)}
                    />
                    <span>{m}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Prix */}
          <div className="bp-filtre-bloc">
            <h3 className="bp-filtre-titre">💰 Prix (FCFA)</h3>
            <div className="bp-prix-range">
              <input
                type="number"
                placeholder="Min"
                value={filtres.prix_min}
                onChange={(e) => setFiltre("prix_min", e.target.value)}
                min="0"
              />
              <span>—</span>
              <input
                type="number"
                placeholder="Max"
                value={filtres.prix_max}
                onChange={(e) => setFiltre("prix_max", e.target.value)}
                min="0"
              />
            </div>
          </div>

          {/* Promotions */}
          <div className="bp-filtre-bloc">
            <label className="bp-promo-check">
              <input
                type="checkbox"
                checked={filtres.en_promo === "1"}
                onChange={(e) => setFiltre("en_promo", e.target.checked ? "1" : "")}
              />
              <span>🏷️ En promotion uniquement</span>
            </label>
          </div>

          {/* Reset */}
          {nbFiltresActifs > 0 && (
            <button className="bp-reset-btn" onClick={resetFiltres}>
              ✕ Effacer les filtres ({nbFiltresActifs})
            </button>
          )}
        </aside>

        {/* Overlay mobile */}
        {sidebarOpen && (
          <div className="bp-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── CONTENU PRINCIPAL ───────────────────── */}
        <main className="bp-main">

          {/* Barre de contrôle */}
          <div className="bp-toolbar">
            <div className="bp-toolbar-left">
              {/* Bouton filtres mobile */}
              <button className="bp-filtres-btn" onClick={() => setSidebarOpen(true)}>
                ⚙️ Filtres {nbFiltresActifs > 0 && <span className="bp-filtres-badge">{nbFiltresActifs}</span>}
              </button>

              {meta && (
                <span className="bp-count">
                  {meta.total} produit{meta.total > 1 ? "s" : ""}
                  {filtres.q && ` pour "${filtres.q}"`}
                </span>
              )}
            </div>

            <div className="bp-toolbar-right">
              <label className="bp-tri-label">Trier par :</label>
              <select
                className="bp-tri-select"
                value={filtres.tri}
                onChange={(e) => setFiltre("tri", e.target.value)}
              >
                <option value="recent">Plus récents</option>
                <option value="prix_asc">Prix croissant</option>
                <option value="prix_desc">Prix décroissant</option>
                <option value="populaire">Popularité</option>
                <option value="note">Meilleures notes</option>
              </select>
            </div>
          </div>

          {/* Filtres actifs (tags) */}
          {nbFiltresActifs > 0 && (
            <div className="bp-tags-actifs">
              {filtres.id_categorie && (
                <span className="bp-tag">
                  {categories.find((c) => c.id_categorie == filtres.id_categorie)?.nom || "Catégorie"}
                  <button onClick={() => setFiltre("id_categorie", "")}>✕</button>
                </span>
              )}
              {filtres.marque && (
                <span className="bp-tag">
                  {filtres.marque}
                  <button onClick={() => setFiltre("marque", "")}>✕</button>
                </span>
              )}
              {(filtres.prix_min || filtres.prix_max) && (
                <span className="bp-tag">
                  {filtres.prix_min || "0"} — {filtres.prix_max || "∞"} FCFA
                  <button onClick={() => { setFiltre("prix_min", ""); setFiltre("prix_max", ""); }}>✕</button>
                </span>
              )}
              {filtres.en_promo && (
                <span className="bp-tag">
                  En promo
                  <button onClick={() => setFiltre("en_promo", "")}>✕</button>
                </span>
              )}
            </div>
          )}

          {/* Grille produits */}
          {loading ? (
            <div className="bp-loading">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bp-skeleton" />
              ))}
            </div>
          ) : produits.length === 0 ? (
            <div className="bp-empty">
              <div className="bp-empty-icon">📦</div>
              <h3>Aucun produit trouvé</h3>
              <p>Essayez d'autres filtres ou une recherche différente.</p>
              <button onClick={resetFiltres}>Voir tous les produits</button>
            </div>
          ) : (
            <div className="bp-grid">
              {produits.map((p) => (
                <ProduitCard key={p.id_produit} produit={p} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {meta && meta.derniere_page > 1 && (
            <div className="bp-pagination">
              <button
                className="bp-page-btn"
                disabled={filtres.page <= 1}
                onClick={() => setFiltre("page", Number(filtres.page) - 1)}
              >
                ← Précédent
              </button>

              {[...Array(meta.derniere_page)].map((_, i) => {
                const p = i + 1;
                if (
                  p === 1 || p === meta.derniere_page ||
                  Math.abs(p - Number(filtres.page)) <= 2
                ) {
                  return (
                    <button
                      key={p}
                      className={`bp-page-btn ${Number(filtres.page) === p ? "bp-page-btn--actif" : ""}`}
                      onClick={() => setFiltre("page", p)}
                    >
                      {p}
                    </button>
                  );
                }
                if (Math.abs(p - Number(filtres.page)) === 3) {
                  return <span key={p} className="bp-page-dots">…</span>;
                }
                return null;
              })}

              <button
                className="bp-page-btn"
                disabled={Number(filtres.page) >= meta.derniere_page}
                onClick={() => setFiltre("page", Number(filtres.page) + 1)}
              >
                Suivant →
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}