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
      <h1>VROUUUUM... 🚗</h1>

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
          document.getElementById("bComparateur").style.backgroundColor = "#C1022C"
          document.getElementById("bVehicules").style.backgroundColor = "#C1022C"
          document.getElementById("bComparateur").style.color = "white"
          document.getElementById("bVehicules").style.color = "white"
          /*Définition d'un affichage pour un bouton lorsqu'il est cliqué. Il devient donc actif*/
          document.getElementById(id).style.backgroundColor = "white"
          document.getElementById(id).style.color = "#C1022C"
      }  
        }
    },
    methods: {
        methodTest(){
            getCarList();
        }
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