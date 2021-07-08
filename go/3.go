package main

import "fmt"

func main() {
	n := 600851475143

	i := 2
	for i < n {
		for n%i == 0 {
			n /= i
			fmt.Println(n)
		}
		i++
	}

	fmt.Println(n)
}
