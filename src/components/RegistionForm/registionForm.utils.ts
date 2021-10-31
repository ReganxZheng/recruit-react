// https://github.com/s-yadav/react-number-format#custom-format-method--format-credit-card-expiry-time
const limit = (value: string, max: string): string => {
  if (value.length === 1 && value[0] > max[0]) {
    value = '0' + value;
  }

  if (value.length === 2) {
    if (Number(value) === 0) {
      value = '01';

      //this can happen when user paste number
    } else if (value > max) {
      value = max;
    }
  }

  return value;
};

export const cardExpiry = (value: string): string => {
  let month = limit(value.substring(0, 2), '12');
  let year = value.substring(2, 4);

  return month + (year.length ? '/' + year : '');
};
