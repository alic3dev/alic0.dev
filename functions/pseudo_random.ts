export function pseudo_random_get(
  seed_pseudo_random: number,
  multiplier: number
): () => number {
  const j: number[] = [];
  for (let w = 0; w < 100; ++w) {
    j[w] = 0;
  }

  return function pseudo_random(): number {
    seed_pseudo_random /= 2;

    if (seed_pseudo_random > 1) {
      return pseudo_random();
    }

    let value_seed_psuedo_random = (
      (seed_pseudo_random - 0.5) / 0.5
    );

    let q = (
      value_seed_psuedo_random * 100
    );

    while (q > 1) {
      q -= 1;
    }

    q = (
      value_seed_psuedo_random * 100
    ) - q;

    j[q] = (j[q] + 1) % (q + 3);

    if ((q + 1) % j[q] === 0) {
      value_seed_psuedo_random = 1.0 - value_seed_psuedo_random;
    }

    seed_pseudo_random *= multiplier;

    return value_seed_psuedo_random;
  }
}
