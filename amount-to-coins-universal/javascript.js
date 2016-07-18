/* amountToCoin(amount, levels) takes two arguments, first the amount as an integer, second the levels of coins as an array
(for Euro that would be [500, 200, 100, 50, 20, 10, 5, 2, 1] for example. The array of levels will start with the highest 
level and end with the smallest.

The function should always use the highest levels possible, this means that even if lower levels allow for less total coins, 
it should still take the highest coin as long as the remainder will still be solvable.

Examples:

amountToCoins(60, [50, 20, 1]) should use the 50 once and then solve the remainder with 1s so the return would be 
  {50: 1, 20: 0, 1: 10}.
amountToCoins(26, [10, 5, 2, 1]) should return {10: 2, 5: 1, 2: 0, 1: 1} and not {10: 0, 5: 5, 2: 0, 1: 1}.
amountToCoins(151, [5, 2]) should return {5: 29, 2: 3}.
As you can see the return value should be an object, containing a property for each level and how many times that level is 
used, for those that have not been used, the propery should still be there with 2: 0 for example.

If the amount can not be divided among the levels such that the remainder is 0 then the function should return null.

Hint: Always make sure that the amount cannot be divided among the levels in some way before you return null */

