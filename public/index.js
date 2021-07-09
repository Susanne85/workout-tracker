init();

async function init() {
  console.log('invoking init');
  if (location.search.split("=")[1] === undefined) {
    console.log('invoking init getLastWorkout');
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

