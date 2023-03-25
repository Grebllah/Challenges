// https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/

// Given the array orders, which represents the orders that customers have done in a restaurant. 
// More specifically orders[i]=[customerName[i],tableNumber[i],foodItem[i]]
// where customerName[i] is the name of the customer,
// tableNumber[i] is the table customer sit at,
// and foodItem[i] is the item customer orders.

// Return the restaurant's “display table”.
// The “display table” is a table whose row entries denote how many of each food item each table ordered.
// The first column is the table number and the remaining columns correspond to each food item in alphabetical order.
// The first row should be a header whose first column is “Table”, followed by the names of the food items.
// Note that the customer names are not part of the table.
// Additionally, the rows should be sorted in numerically increasing order.

// Example 1:
// Input: orders =
// [["David","3","Ceviche"],
// ["Corina","10","Beef Burrito"],
// ["David","3","Fried Chicken"],
// ["Carla","5","Water"],
// ["Carla","5","Ceviche"],
// ["Rous","3","Ceviche"]]
// Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],
// ["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
// Explanation:
// The displaying table looks like:
// Table,Beef Burrito,Ceviche,Fried Chicken,Water
// 3    ,0           ,2      ,1            ,0
// 5    ,0           ,1      ,0            ,1
// 10   ,1           ,0      ,0            ,0
// For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
// For the table 5: Carla orders "Water" and "Ceviche".
// For the table 10: Corina orders "Beef Burrito". 

// Example 2:
// Input: orders = 
// [["James","12","Fried Chicken"],
// ["Ratesh","12","Fried Chicken"],
// ["Amadeus","12","Fried Chicken"],
// ["Adam","1","Canadian Waffles"],
// ["Brianna","1","Canadian Waffles"]]
// Output: [["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]] 
// Explanation: 
// For the table 1: Adam and Brianna order "Canadian Waffles".
// For the table 12: James, Ratesh and Amadeus order "Fried Chicken".

// Example 3:
// Input: orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
// Output: [["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]

// Constraints:
// 1 <= orders.length <= 5 * 10^4
// orders[i].length == 3
// 1 <= customerName[i].length, foodItem[i].length <= 20
// customerName[i] and foodItem[i] consist of lowercase and uppercase English letters and the space character.
// tableNumber[i] is a valid integer between 1 and 500.

//Plan: loop over the array, and create an object with the orders and table numbers as keys - check
// and the number of them per table as values -check
// create an array starting with "["Table"], X..." where X is the food orders in alphabetical order
// create an array starting with the lowest number table,
// followed by each amount of orders of that item from that table (as found in the object)
// repeat for the rest of the tables
// return an array, with the starting array first followed by the tables arrays in ascending order

const displayTable = (orders) => {
    let tables = []
    for (let order of orders) {
        tables.push([order[1], order[2]])
    }
    const tablesObject = {}
    
    for (i = 0; i < tables.length; i++) {
        let key = tables[i]
        if (!tablesObject[key]) tablesObject[key] = 1
        else tablesObject[key]++
    }
    console.log(tables, tablesObject)

    const tableSet = new Set()
    const foodSet = new Set()
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i]
        tableSet.add(order[1])
        foodSet.add(order[2])
    }
    const sortedTables = [...tableSet].sort((a, b) => parseInt(a) - parseInt(b))
    const sortedFoods = [...foodSet].sort()
    const columnNames = ["Table", ...sortedFoods]
    const table = [columnNames]
    // console.log(sortedTables, sortedFoods, columnNames)
    for (let i = 0; i < sortedTables.length; i++) {
        const row = [sortedTables[i]]
        for (let j = 0; j < sortedFoods.length; j++) {
            let key = `${sortedTables[i]},${sortedFoods[j]}`
            if (tablesObject[key]) {
                row.push(tablesObject[key].toString())
            }
            else row.push("0")
        }
        table.push(row)
        console.log(table)
    }
    return table
}

displayTable([["David","3","Ceviche"], ["Corina","10","Beef Burrito"], ["David","3","Fried Chicken"], ["Carla","5","Water"], ["Carla","5","Ceviche"], ["Rous","3","Ceviche"]])