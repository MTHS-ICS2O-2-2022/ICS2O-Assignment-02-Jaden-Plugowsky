// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function buttonOneClicked() {
  //This function calculates the Volume of a Pyramid/Cone
  //Input through Textfields
  const baseLength = parseFloat(document.getElementById("base-length").value)
  const baseWidth = parseFloat(document.getElementById("base-width").value)
  const height = parseFloat(document.getElementById("height").value)

  //Process
  const area = baseLength * baseWidth
  const volume = (area * height) / 3

  //Output
  document.getElementById("answer-area").innerHTML =
    "The Area of the Pyramid/Cone's base is: " + area + "cm²"
  document.getElementById("answer-volume").innerHTML =
    "The Volume of the Pyramid/Cone is: " + volume.toFixed(2) + "cm³"
}
