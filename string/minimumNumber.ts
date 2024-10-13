const minimumNumber: (n: number, password: string) => number = (
  n,
  password
) => {
  let missingNo = 0;

  if (!/[0-9]/.test(password)) {
    missingNo++;
  }
  if (!/[a-z]/.test(password)) {
    missingNo++;
  }
  if (!/[A-Z]/.test(password)) {
    missingNo++;
  }
  if (!/[!@#$%^&*()\-+]/.test(password)) {
    missingNo++;
  }
  if (n < 6) {
    missingNo += 6 - (missingNo + n);
  }
  return missingNo;
};
