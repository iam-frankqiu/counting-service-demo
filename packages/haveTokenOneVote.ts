export function getTokenNumber(wallet) {
  return 1;
}

export async function haveTokenOneVote(wallet) {
  const number = await getTokenNumber(wallet);
  return number > 0 ? 1 : 0;
}
