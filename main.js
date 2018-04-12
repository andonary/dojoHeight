function Hamming(phraseOne, phraseTwo) {
  if (typeof phraseOne !== "string" || typeof phraseTwo !== "string") {
    try {
      throw new Error("Bah alors, vous ne respectez pas le format ?");
    } catch (e) {
      console.log(e);
    }
  }
  const Tab1 = phraseOne.split("");
  const Tab2 = phraseTwo.split("");
  Tab1.forEach((lettre, index) => {
    lettre === " " ? Tab1.splice(index, 1) : null;
  });
  Tab2.forEach((lettre, index) => {
    lettre === " " ? Tab2.splice(index, 1) : null;
  });
  let compteur = 0;
  if (Tab1.length === Tab2.length) {
    Tab1.map((lettre, index) => (lettre !== Tab2[index] ? compteur++ : null));
  } else {
    return (compteur = -1);
  }
  return compteur;
}

try {
  console.log(Hamming("Je suis le gouroux de la galaxie", 132));
} catch (e) {}
