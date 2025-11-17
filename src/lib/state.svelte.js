let persistent = $state(undefined);

export function getPersistent() {
  if (persistent === undefined) {
    persistent = JSON.parse(localStorage.getItem('state'));

    if (persistent === null) {
      savepersistent({
        passes: [
          garage: "Woodside",
          timeframe: "Spring 2026",
        ],
      })
    }
  }

  return persistent;

}


export function savepersistent(data) {
  persistent = data;
  localStorage.setItem('persistent', JSON.stringify(state));
}
