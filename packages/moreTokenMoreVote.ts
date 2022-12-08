export function getTokenNumber(wallet) {
  return 5;
}

export async function haveTokenOneVote(wallet) {
  const number = await getTokenNumber(wallet);
  return Math.ceil(number);
}
