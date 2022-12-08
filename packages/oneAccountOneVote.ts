export function hasDotBitAccount(wallet) {
  return true;
}

export function oneAccountOneVote(wallet) {
  return hasDotBitAccount(wallet) ? 1 : 0;
}
