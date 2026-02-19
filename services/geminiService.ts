
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Vous êtes l'Assistant Stratégique Digital de JAT HOLDING, expert de la Vision 2026.
Votre rôle est de fournir des briefings institutionnels basés sur le document officiel.

Détails Clés du Document :
1. Pôles Fondateurs : Aéroportuaire (GSTI Group), Technologie (Cœur numérique), Industrie (Industrie 4.0), Immobilier (GATI/ALUTRADIV), Tourisme (Projet Jetfly), Santé.
2. Stratégie & Croissance : Court Terme (Fondations), Moyen Terme (Synergies & Expansion Afrique), Long Terme (Leadership régional).
3. ADN : Souveraineté industrielle et technologique, mutualisation des risques, plateformes exportables.
4. Gouvernance : Structurée en Conseil d'Administration, Comité Exécutif et Direction des Pôles.

Ton : Institutionnel, visionnaire, précis, confiant.
Cible : Investisseurs, Partenaires stratégiques, Gouvernements.
Langue : Français (prioritaire).

Toujours mentionner l'ambition panafricaine et le Maroc comme hub souverain.
`;

export async function getHoldingBriefing(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5, // Plus bas pour plus de précision institutionnelle
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, une erreur est survenue. Veuillez contacter le département Relations Investisseurs.";
  }
}
