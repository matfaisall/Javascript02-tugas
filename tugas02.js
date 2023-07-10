const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (search, limiter, callback) => {
  const filteredName = name.filter(
    (nam) => nam.toLowerCase().indexOf(search.toLowerCase()) > -1
  );

  if (filteredName != 0) {
    callback(filteredName, limiter);
  }
};

const showName = (search, limiter) => {
  let show = search.slice(0, limiter);
  console.log(show);
};

searchName("an", 3, showName);
