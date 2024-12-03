import React from "react";
import SuraScreen from "@/components/SuraScreen";
import { fatihaTextGerman } from "@/components/suren";

export default function Fatiha() {
  return (
    <SuraScreen
      informationText="Die Fatiha ist die erste Sure im Quran. Darin danken wir Allah, dass Er uns erschaffen hat und uns lieb hat. Wir bitten Ihn, uns zu helfen, immer das Richtige zu tun und auf einem guten Weg zu bleiben"
      titleText="Schauen wir uns als erstes die Sura auf Deutsch an:"
      suraText={fatihaTextGerman}
    />
  );
}
