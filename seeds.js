var mongoose = require("mongoose");
var lecture = require("./models/lectures");
var classes = [
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-1 MATTER IN OUR SURROUNDINGS.",
   //    image: "https://i.imgur.com/BKXzK7w.jpg",
   //    url: "braPd57jHss",
   //    description:
   //       "Introduction to matter. Characteristics of particles of matter.  Physical classification of matter.  Solids, liquids and gases with their properties.  Change of states of matter.   Effect of temperature and pressure .   Evaporation. Factors affecting evaporation.    Evaporation and its cooling effect.",
   // },
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-2 IS MATTER AROUND IS PURE ( PART-1)",
   //    image: "https://i.imgur.com/fOWDqQ4.jpg",
   //    url: "_ArT6Txt0z0",
   //    description:
   //       " Chemical Classification of Matter   Mixtures  Homogeneous mixture  Heterogeneous mixture    Solution   Solute amd solvent         Solubility     Concentration of solute      Saturated amd unsaturated solution      Suspension        Colloidal solution      Types of colloidal solution",
   // },
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-2 IS MATTER AROUND US PURE ( PART 2)",
   //    image: "https://i.imgur.com/KBPQnpx.jpg",
   //    url: "sSl1E1zVtCs",
   //    description:
   //       "Separation methods of different  mixtures.    Separation of colour from dye or ink by evaporation.        Separating of two immiscible liquids by separating funnel.        Separation by sublimation.        Separation by centrifugation.        Separation by chromatography.       Separation by distillation amd fractional distillation.       Separation of gases present in air.        Separation by crystallization.        Purification of water.         Elements and compounds.",
   // },
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-3 ATOMS & MOLECULES (PART-1)",
   //    image: "https://i.imgur.com/Rbhkhby.jpg",
   //    url: "oufhmdkgP5I",
   //    description:
   //       "Discovery of atoms        Laws of chemical combination        Law of combination of mass        Law of  definite proportion        Daltons atomic theory        Elements with atomic number 1-20         Electronic Configuration        Valency",
   // },
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-3 ATOMS & MOLECULES (PART-2)",
   //    image: "https://i.imgur.com/X3qsbDT.jpg",
   //    url: "RYyVQl4X0Yk",
   //    description:
   //       "Valency   Atomic mass    Molecules    Molecular mass   Ions   Anions and cations   Polyatomic ions",
   // },
   // {
   //    class: "classIX",
   //    topic: "CLASS IX CH-3 ATOMS & MOLECULES (PART-3)",
   //    image: "https://i.imgur.com/DshaYeg.jpg",
   //    url: "rVjY-kNa7hg",
   //    description:
   //       "Valency  Polyatomic ion   Writing Chemical formula  Mole Concept",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-1 CHEMICAL REACTIONS AND EQUATIONS",
   //    image: "https://i.imgur.com/yQIz4j8.jpg",
   //    url: "VJzEdVz3oFM",
   //    description:
   //       "Introduction to chemical reactions and equations.       Balancing the chemicals equations.       Types of reactions in detail.       Combination reactions.       Decomposition reactions and its types.      Displacement reactions.       Double Displacement reactions.       Precipitation reactions.       Oxidation - Reduction reactions.       Endothermic reactions.      Exothermic reactions.       Corrosion.      Rancidity.",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-2 ACIDS BASIS AND SALTS (PART-1)",
   //    image: "https://i.imgur.com/N0JAC60.jpg",
   //    url: "z1Mf09C_Zqc",
   //    description:
   //       " Introduction to Acids and Bases.     Indicators in detail.     Physical properties of Acids and Bases.    Chemical properties of Acids and Bases.     pH value.     Conductance through Acids and Bases.     Strong &weak Acids and Bases.",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-2 ACIDS BASIS AND SALTS (PART-2)",
   //    image: "https://i.imgur.com/N0JAC60.jpg",
   //    url: "cFCtyY3TkBo",
   //    description:
   //       "Salts and their properties.    Sodium chloride.    Bleaching powder.    Baking Soda.    Washing Soda.     Gypsum and plaster of paris.     Water of crystallization..",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-3 METALS AND NON METALS (PART 1)",
   //    image: "https://i.imgur.com/6LiqYHl.jpg",
   //    url: "FPdrheKLc3A",
   //    description:
   //       "Physical properties of metals and non metals. Chemical properties of metals and non metals.",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-3 METALS AND NON METALS (PART 2)",
   //    image: "https://i.imgur.com/cO8bXA2.jpg",
   //    url: "ntXKIO19EuQ",
   //    description:
   //       "How metals and non metals combine Ionic bond formation  Properties of ionic compounds  Occurrence of metals  Extraction of metals of low reactivity, medium reactivity and most reactivity.",
   // },
   // {
   //    class: "classX",
   //    topic: "CLASS X CH-3 METALS AND NON METALS (PART 3)",
   //    image: "https://i.imgur.com/k6pU8y4.jpg",
   //    url: "vLrEy84unMU",
   //    description:
   //       "Purification of metals       Electrolytic refining        Corrosion        Prevention of corrosio         Alloys and their uses.",
   // },
];
classes.forEach(function (seed) {
   lecture.create(seed, function (err) {
      console.log("seed");
   });
});
