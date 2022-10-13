<template>
  <div>
    <h1>Comparavroum</h1>
  </div>
  <div id="presentation">
    <p>Nous sommes le meilleur comparateur de bagnoles sur l'internet du monde tout entier</p>   
  </div>
  <div id="boutons">
    <button v-on:click="isHidden = true">Comparateur</button>
    <button>Tous les véhicules</button>
  </div>

  <div id="conteneur">
        <div id="choix1">
            <img src="../assets/ajout_vehicule.png"/>
        </div>
        <div id="choix2">
            <img src="../assets/ajout_vehicule.png"/>
        </div>
    </div>
    <div id="choixVehicule" v-if="isHidden">
        <div>
            <h2 id="exit" v-on:click="isHidden = false">X</h2>
        </div>
        <h1>Sélectionnez un véhicule</h1>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        isHidden: false,
        }
    }
    };
</script>


<style>
    #conteneur{
        display : flex;
        justify-content : center;
        align-items: center;
        justify-content: center;
    }
    #conteneur div{
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
    background-color : #C1022C;
    color : white;
    padding : 10px;
    border-radius : 30px;
  }

  #boutons button:hover {
    color: red;
    background-color : white;
    cursor: pointer;    
  }
</style>