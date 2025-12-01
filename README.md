# O'Coffee – Catalogue de cafés haut de gamme

## Contexte
Ce projet a été réalisé dans le cadre de ma formation en développement backend.  
Il répond à une commande (fictive) des **frères Pepper**, fondateurs de la boutique **oCoffee** située à Hauts-de-Cloques.  
Leur objectif : disposer d’un **site vitrine** présentant leur boutique et leur catalogue de cafés, avec une architecture prête à évoluer vers un site e‑commerce.

---

## Objectifs du projet
- Concevoir une **base de données relationnelle** modélisant les cafés, leurs origines et leurs caractéristiques.  
- Développer une **BDD** et une architecture **MVC** avec Express et EJS.  
- Créer des vues dynamiques pour :
  - La page d’accueil avec les nouveautés.  
  - Le catalogue complet des cafés.  
  - La page de détail d’un café.  
  - Une carte interactive (Leaflet) pour localiser la boutique.  
- Respecter les principes d’**accessibilité**, de **durabilité** et de **responsive design**.

---

## Stack technique
- **Node.js / Express** : serveur backend et architecture MVC.  
- **EJS** : moteur de rendu côté serveur.  
- **PostgreSQL** : base de données relationnelle.  
- **pg** : client PostgreSQL pour Node.js.  
- **Leaflet** : carte interactive pour la localisation.  
- **CSS modulaires** : reset, base, layout, common, pages spécifiques.

---

## Structure du projet
├── index.js # Point d'entrée serveur ├── router.js # Définition des routes ├── controllers/ # Logique métier (main, catalog) ├── dataMapper/ # Accès aux données (SQL) ├── data/client.js # Connexion PostgreSQL ├── views/pages/ # Vues EJS (home, catalog, details, map) ├── views/partials/ # Partials réutilisables (head, header, footer) ├── public/css/ # Styles modulaires ├── public/images/ # Images (logo, cafés, etc.) └── create_database.sql # Script SQL (tables + dataset)

Code

---

## Objectifs pédagogiques

### Hard Skills
- Conception **MCD / MLD / MPD**.  
- Mise en place et connexion à une **base de données PostgreSQL**.  
- Développement de composants d’accès aux données.  
- Développement d’une **architecture MVC** avec moteur de rendu côté serveur.  

---

## Fonctionnalités
- **Accueil** : présentation de la boutique et affichage des 3 derniers cafés ajoutés.  
- **Catalogue** : liste complète des cafés avec origine, prix et lien vers la fiche détail.  
- **Détail produit** : description, caractéristiques, disponibilité.  
- **Carte interactive** : localisation de la boutique avec Leaflet.  
- **Accessibilité & responsive** : site lisible sur mobile et desktop.  
