function findWaldo(arr, callback) {
  arr.forEach(function(arrAt) {
    if (arrAt === "Waldo") {
      callback(arr, arrAt);   // execute callback
    }
});
}

function actionWhenFound(blank1, blank2) {
  console.log("Found Waldo at index " + blank1.indexOf(blank2) + " !");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);