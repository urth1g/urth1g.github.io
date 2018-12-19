function getRandomInteger(min, max) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
}

const minPositionBasedOnWidth = 300;
const maxPositionBasedOnWidth = window.innerWidth - 350;
const minPositionBasedOnHeight = 150;
const maxPositionBasedOnHeight = 400;

function GenerateSpots() {
  const array = [];
  for (let i = 0; i < 15; i += 1) {
    let color = null;
    const rand = Math.floor(Math.random() * 3) + 1;
    switch (rand) {
      case 1:
        // color='#d1341f';
        color = '#ff5c38';
        break;
      case 2:
        color = '#ff5c38';
        break;
      case 3:
        color = '#ff5c38';
        break;
      default:
        color = '#ff5c38';
    }
    const spread = `${Math.floor(Math.random() * 15) + 10}px`;
    const radius = `${Math.floor(Math.random() * 20) + 20}px`;
    const randLeft = getRandomInteger(
      minPositionBasedOnWidth,
      maxPositionBasedOnWidth,
    );
    const randTop = getRandomInteger(
      minPositionBasedOnHeight,
      maxPositionBasedOnHeight,
    );

    array.push({
      leftPosition: randLeft,
      topPosition: randTop,
      radius,
      spread,
      color,
    });
  }
  return array;
}

export default GenerateSpots;
