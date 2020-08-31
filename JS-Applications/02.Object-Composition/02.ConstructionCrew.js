function solve(input) {
   if (input.dizziness) {
      let water = (input.weight * input.experience) / 10;
      input.levelOfHydrated += water;
      input.dizziness = false;
   } else {
      input.levelOfHydrated;
   }

   return {
      weight: input.weight,
      experience: input.experience,
      levelOfHydrated: input.levelOfHydrated,
      dizziness: input.dizziness,
   };
}
