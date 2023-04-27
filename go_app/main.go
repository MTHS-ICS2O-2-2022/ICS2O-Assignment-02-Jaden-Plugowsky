// Created by: Jaden Plugowsky
// Created on: April 2023
//
// This program finds the Volume of a Pyramid

package main

import "fmt"

func main() {
	// This function finds the Volume of a Pyramid
	var givenArea float64
	var height float64
	var volume float64

	// Input
	fmt.Println("\nThis program finds the Volume of a Pyramid using given values.")
	fmt.Println()
	fmt.Print("Enter the Area of the Pyramid/Cone's base (cm): ")
	fmt.Scanln(&givenArea)
	fmt.Println()
	fmt.Print("Enter the Height of the Pyramid/Cone (cm): ")
	fmt.Scanln(&height)

	// Process
	volume = (givenArea * height) / 3

	// Output
	fmt.Printf("\nThe Volume of the Pyramid/Cone is: %.2f cm³.", volume)

	fmt.Println("\n\nDone.")
}
