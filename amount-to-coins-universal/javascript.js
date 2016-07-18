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

function buildGraph (amount, coins) {
  var start = 0;
  var graph = {};
  var queue = [start];
  
  while (queue.length > 0) {
    var current = queue.shift();
    graph[current] = [];
    for (var coin of coins) {
      var next = current + coin;
      graph[current].push(next);
      if (next <= amount && queue.indexOf(next) == -1)
        queue.push(next);
    }
  }
  return graph;
}

function traverseGraph (graph, goal) {
	var frontier = [];
	frontier.push(0);
	cameFrom = {};
	cameFrom[0] = null;
	
	while (frontier.length > 0) {
		var current = frontier.shift();
		if (current == goal)
			break;
		if (current in graph) {
			for (var next of graph[current]) {
				if (!(next in cameFrom)) {
					frontier.push(next);
					cameFrom[next] = current;
				}
			}
		}
	}
	return cameFrom;
}

function buildPath (cameFrom, goal, coins) {
	if (!(goal in cameFrom))
		return null;
	var change = {};
	for (var coin of coins) {
		change[coin] = 0;
	}
	var current = goal;
	while (current != '0') {
		var previous = cameFrom[current];
		coin = parseInt(current) - parseInt(previous);
		change[coin] += 1;
		current = previous;
	}
	return change;
}

function amountToCoins(amount, coins) {
  var graph = buildGraph(amount, coins);
  var traversedGraph = traverseGraph(graph, amount);
  var change = buildPath(traversedGraph, amount, coins);
  return change;
}
