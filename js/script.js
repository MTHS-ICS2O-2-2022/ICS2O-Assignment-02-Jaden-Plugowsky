// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function calculateVolumePressed() {
  //This function calculates the Volume of a Pyramid/Cone
  //Input through Textfields
  const givenArea = parseFloat(document.getElementById("given-area").value)
  const height = parseFloat(document.getElementById("height").value)

  //Process
  const volume = (givenArea * height) / 3

  //Output
  document.getElementById("answer-volume").innerHTML =
    "The Volume of the Pyramid/Cone is: " + volume.toFixed(2) + "cm³"
}

function calculateAreaRectanglePressed() {
  //This function calculates the Area of a Rectangle with a given Length and Width
  //Input through Textfields
  const rectangleLength = parseFloat(
    document.getElementById("rectangle-length").value
  )
  const rectangleWidth = parseFloat(
    document.getElementById("rectangle-width").value
  )

  //Process
  const rectangleArea = rectangleLength * rectangleWidth

  //Output
  document.getElementById("answer-area-rectangle").innerHTML =
    "The Area of the Rectangle is: " + rectangleArea.toFixed(2) + "cm²"
}

function calculateAreaCirclePressed() {
  //This function calculates the Area of a Circle with a given Radius
  //Input through Textfields
  const circleRadius = parseFloat(
    document.getElementById("circle-radius").value
  )

  //Process
  const circleArea = Math.PI * circleRadius ** 2

  //Output
  document.getElementById("answer-area-circle").innerHTML =
    "The Area of the Circle is: " + circleArea.toFixed(2) + "cm²"
}
