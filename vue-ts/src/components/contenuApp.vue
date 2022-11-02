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
</style>