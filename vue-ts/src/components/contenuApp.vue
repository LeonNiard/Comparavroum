<template>
    <nav>
    <div>
      <img id="logo" alt="Vue logo" src="../assets/logo.png">
      <h1>Comparavroum</h1>
    </div>
    <div id="presentation">
      <p>Nous sommes le meilleur comparateur de bagnoles sur l'internet du monde tout entier</p>   
    </div>
    <div id="boutons">
      <button id="bComparateur" v-on:click="afficherVehicules = false, afficherComparateur = true, changeColor('bComparateur')" >Comparateur</button>
      <button id="bVehicules" v-on:click="afficherVehicules = true, afficherComparateur = false, changeColor('bVehicules')" @click="methodTest()">Tous les véhicules</button>
    </div>
  </nav>
  <!-- Contenu de la page. Par défaut : comparateur-->
  <div id="comparateur" v-if="afficherComparateur">
        <div id="choix1">
            <img src="../assets/ajout_vehicule.png" v-on:click="afficherChoix = true"/>
        </div>
        <div id="choix2">
            <img src="../assets/ajout_vehicule.png" v-on:click="afficherChoix = true"/>
        </div>
  </div>
  <div id="choixVehicule" v-if="afficherChoix">
      <div>
          <h2 class="exit" v-on:click="afficherChoix = false">X</h2>
      </div>
      <h1>Sélectionnez un véhicule</h1>
      <li class="car-list-element">
          <div class="car-list-image">
              <img class="car-image" alt="car image" src="https://cars.chargetrip.io/5f5a122233bb07506eca8459-e68527b29989da7d52612f2e4ee3ca08b2293f30.png">
          </div>
          <div class="car-list-data">
              <p><strong>e-tron 55 quattro (2019 - 2020)</strong></p>
              <p>Audi</p>
          </div>
      </li>
      <li class="car-list-element">
          <div class="car-list-image">
              <img class="car-image" alt="car image" src="https://cars.chargetrip.io/625036e07d209b7fe2a5b792-0c1482b09160e397298ea4e157f923c979130270.png">
          </div>
          <div class="car-list-data">
              <p><strong>i3s 94 Ah (2017 - 2018)</strong></p>
              <p>BMW</p>
          </div>
      </li>
      <li class="car-list-element">
          <div class="car-list-image">
              <img class="car-image" alt="car image" src="https://cars.chargetrip.io/608ff534dda1ce6b97b57260-31ba5cb033af2d92e9fed33be04070d3c94b3f31.png">
          </div>
          <div class="car-list-data">
              <p><strong>iX xDrive50</strong></p>
              <p>BMW</p>
          </div>
      </li>
      <li class="car-list-element">
          <div class="car-list-image">
              <img class="car-image" alt="car image" src="https://cars.chargetrip.io/6012a1bcf9c50f4aca28b283-7bd09b08ff87c4f68c733857e739ed033d8a4c83.png">
          </div>
          <div class="car-list-data">
              <p><strong>e-SpaceTourer XL 75 kWh (early 2021)</strong></p>
              <p>Citroen</p>
          </div>
      </li>
  </div>

  <!-- Afficher les véhicules -->
  <div id="listeVehicules" v-if="afficherVehicules">
      <div class="card">
          <header>
              <h1>Voitures</h1>
              <p>Sélectionnez un véhicule pour avoir des détails</p>
          </header>
          <main>
              <ul id="car-list" class="car-list">
                  <!-- Car list is being rendered through cars.js here -->
              </ul>
          </main>

          <!-- Second page that renders all the car details -->
          <div id="car-details" class="car-details">
              <div class="top-bar">
                  <div id="car-details-back" class="back">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
                                  fill="white"
                          />
                      </svg>
                  </div>
                  <p><strong>Détails voiture</strong></p>
              </div>
              <div class="car-details-image-wrapper">
                  <img id="car-details-image" class="car-details-image" src="" />
                  <div class="car-details-brand-wrapper">
                      <img id="car-details-brand" class="car-details-brand" src="" />
                  </div>
              </div>
              <section class="car-details-naming">
                  <h1 id="car-details-name">-</h1>
                  <p id="car-details-version">-</p>
              </section>
              <section>
                  <h3>Général</h3>
                  <ul id="car-details-general">
                      <!-- Car details rendered through car.js here -->
                  </ul>
              </section>
              <section>
                  <h3>Distance</h3>
                  <!-- Car details rendered through car.js here -->
                  <table>
                      <tbody id="car-details-range"></tbody>
                  </table>
              </section>
              <section>
                  <h3>Performances</h3>
                  <ul id="car-details-performance">
                      <!-- Car details rendered through car.js here -->
                  </ul>
              </section>
          </div>
      </div>
  </div>


</template>

<script>
    import {getCarList} from "../api/api.client.js";

    export default {
    data() {
        return {
        afficherChoix: false,  /*Afficher ou non le choix de gauche*/
        afficherChoix2: false, /*Afficher ou non le choix de droite*/
        afficherComparateur: true, /*Afficher la section "Comparateur"*/
        afficherVehicules: false, /*Afficher la section "Tous les véhicules"*/

        changeColor: function(id) {
          /*Cette fonction permet de changer l'apparence des boutons en fonction de s'ils sont actifs ou non 
          Ici on donne une valeur par défaut*/
          document.getElementById("bComparateur").style.backgroundColor = "#C1022C";
          document.getElementById("bVehicules").style.backgroundColor = "#C1022C";
          document.getElementById("bComparateur").style.color = "white";
          document.getElementById("bVehicules").style.color = "white";
          /*Définition d'un affichage pour un bouton lorsqu'il est cliqué. Il devient donc actif*/
          document.getElementById(id).style.backgroundColor = "white";
          document.getElementById(id).style.color = "#C1022C";
      }  
        }
    },

    methods: {
        methodTest(){
            getCarList()
        },
    }
    };
</script>


<style>
    #comparateur{
        display : flex;
        justify-content : center;
        align-items: center;
        justify-content: center;
    }
    #comparateur div{
        margin : 20px;
    }
    #choixVehicule{
        border-radius : 20px;
        position : absolute;
        margin : auto;
        left: 10%;
        right: 10%;
        top : 10%;
        bottom : 10%;
        text-align: center;
        margin: 0;
        background-color: rgba(0, 0, 0, .5);
    }

    #listeVehicules{

      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    #choixVehicule h1{
        color: white;
        border : solid 1px black;
        border-radius : 0  0 20px 20px;
        margin: 0px;
        padding : 5px;
        background-color : #C1022C;
        margin : 0 100px 0;
    }

    #choixVehicule h2{
        color: white;
        border: solid 1px black;
        border-radius : 0 20px 0 20px;
        position: absolute;
        margin: 0px;
        right : 0;
        background-color: #C1022C;
        padding : 10px 20px 10px;
        cursor: pointer;
    }

  #boutons{
    display: flex;
    justify-content: center;
  }
  #boutons button {    
    border: solid 1px #C1022C;
    margin : 15px;
    font-size: 30px;
    padding : 10px;
    border-radius : 30px;
    cursor: pointer; 
  }
  #bComparateur{
    background-color : white;
    color : #C1022C;
  }

  #bVehicules{
    background-color : #C1022C;
    color : white;
  }

  img:hover{
    cursor: pointer;
  }

  #logo{
    width: 100px;
    height: 100px;
  }

    :root {
        --base: 16px;

        --font-size-h1: 2rem;
        --font-size-h2: 1.5rem;
        --font-size-h3: 1.25rem;
        --font-size-base: 0.875rem;
        --font-size-small: 0.75rem;
        --font-size-micro: 0.5rem;

        --background-body: #ffffff;
        --background-subdued: #e5f0f5;
        --background-base: #f4f8fb;
        --background-alt: #e5f0f5;
        --background-alt2: #c9dee9;
        --background-alt3: #8dadbf;
        --background-alt4: #608192;

        --accent-base: #0078ff;
        --accent-alt: #005ee5;
        --accent-alt2: #0041c8;

        --status-approved: #2bc7b4;

        --font-base: #1b2023;
        --font-alt: #2c353a;
        --font-alt2: #45535b;
        --font-alt3: #566a75;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        color: var(--font-base);
        font-family: 'Inter', 'Roboto', sans-serif;
        font-size: var(--base);
        font-weight: normal;
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-weight: bold;
        font-size: var(--font-size-h1);
        line-height: 2.5rem;
    }

    h3 {
        font-weight: 600;
        font-size: var(--font-size-h3);
        line-height: 1.75rem;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: var(--font-size-base);
        line-height: 1.75rem;
    }

    a {
        text-decoration: none;
        color: var(--font-base);
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding: 0.5rem 0;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        text-align: left;
        margin-top: 0.5rem;
    }

    th {
        color: var(--font-alt2);
    }

    th,
    td {
        padding: 0.25rem 0;
        font-size: var(--font-size-base);
    }

    button {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--background-body);
        border-radius: 4px;
        background-color: var(--accent-base);
        border: none;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        font-weight: bold;
    }

    button:disabled {
        background-color: var(--background-alt2);
        color: var(--font-alt3);
        opacity: 0.5;
        cursor: not-allowed;
    }

    section {
        padding: 1rem;
        border-top: 1px solid var(--background-alt);
    }

    main section:first-child {
        border-top: none;
    }

    .card {
        position: relative;
        overflow: hidden;
        display: grid;
        top: 1rem;
        left: 1rem;
        width: 360px;
        height: calc(100vh - 2rem);
        border-radius: 8px;
        background-color: var(--background-body);
        box-shadow: 0px 8px 62px rgba(0, 0, 0, 0.07), 0px 9.63424px 10.0459px rgba(0, 0, 0, 0.08),
        0px 5.80506px 6.13245px rgba(0, 0, 0, 0.0310277), 0px -4px 3.46624px rgba(0, 0, 0, 0.024633),
        0px 24px 64px rgba(0, 0, 0, 0.08);
        z-index: 10;

        grid-template-areas:
                'header'
                'main'
                'footer';

        grid-template-rows: min-content 1fr min-content;
    }

    .card > * {
        transition: transform 300ms ease;
    }

    .card > *.hide {
        transform: translateX(-24%);
    }

    .card header {
        z-index: 10;
        grid-area: header;
        border-radius: 8px 8px 0 0;
        width: inherit;
        padding: 1rem;
        background: var(--background-body);
        box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.02), 0px 2px 6px -1px rgba(0, 0, 0, 0.1);
    }

    header h1 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    header p {
        color: var(--font-alt3);
    }

    .card main {
        grid-area: main;
        overflow-y: auto;
    }

    .car-list-data p {
        line-height: 1.25rem;
    }

    .card footer {
        grid-area: footer;
        border-radius: 0 0 0.5rem 0.5rem;
        width: 360px;
        background: var(--background-body);
        border-top: 1px solid var(--background-alt);
    }

    /* Car details screen */
    .car-details {
        background: var(--background-body);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        transform: translateX(100%);
        overflow-y: scroll;
        transition: transform 250ms ease-in-out;
    }

    .car-details.show {
        transform: translateX(0);
    }

    .top-bar {
        position: absolute;
        width: 100%;
        padding: 1rem;
        z-index: 10;
        display: flex;
        justify-content: space-between;
    }

    .back {
        height: 24px;
        z-index: 15;
        cursor: pointer;
    }

    .top-bar p {
        flex: 1;
        text-align: center;
        margin-left: -24px;
        font-size: 1rem;
        color: var(--background-body);
    }

    .car-details-image-wrapper {
        height: 280px;
        width: 100%;
        border-radius: 0.5rem 0.5rem 0 0;
        background: radial-gradient(61.98% 65.37% at 41.69% 0%, #8dadbf 0%, #608192 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 32px;
        padding-top: 40px;
    }

    .car-details-image {
        width: 100%;
    }

    .car-details-brand-wrapper {
        position: absolute;
        bottom: -32px;
        left: 1rem;
        width: 64px;
        height: 64px;
        border-radius: 32px;
        border: 4px solid var(--background-body);
        background: var(--background-subdued);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .car-details-brand {
        width: 100%;
    }

    .car-details-naming {
        border-top: none;
    }

    .car-details li {
        padding: 0.25rem 0;
        display: flex;
        justify-content: space-between;
    }

    .car-details li p:last-child {
        font-weight: 600;
    }

    /* View project on the github link */
    .github-link {
        position: fixed;
        top: 16px;
        right: 16px;
        display: flex;
        align-items: center;

        padding: 0 12px;
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);

        background-color: #fff;
        border-radius: 20px;

        color: #0c0c10;
        font-size: 15px;
        font-weight: 500;
        line-height: 40px;
        z-index: 2;
    }
</style>