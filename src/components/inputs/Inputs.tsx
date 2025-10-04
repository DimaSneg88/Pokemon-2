import { useState } from "react";
import styles from "./Inputs.module.css";
import col from "/public/coolicon.png";

interface InputsProps {
   onFilterChange?: (filterType: string, value: string) => void;
}

export default function Inputs({ onFilterChange = () => {} }: InputsProps) {
   const [openSections, setOpenSections] = useState({
      strength: false,
      rarity: false,
      element: false,
   });

   const [selectedValues, setSelectedValues] = useState({
      strength: "",
      rarity: "",
      element: "",
   });

   const toggleSection = (section: string) => {
      setOpenSections((prev) => ({
         ...prev,
         [section]: !prev[section as keyof typeof prev],
      }));
   };

   const handleRadioChange = (filterType: string, value: string) => {
      setSelectedValues((prev) => ({
         ...prev,
         [filterType]: value,
      }));
      onFilterChange(filterType, value);
   };

   const handleCheckboxChange = (
      filterType: string,
      value: string,
      checked: boolean
   ) => {
      onFilterChange(filterType, checked ? value : "");
   };

   return (
      <div className={styles.filtersContainer}>
         {/* По силе - радиогруппа */}
         <div className={styles.filterGroup}>
            <div
               className={styles.filterHeader}
               onClick={() => toggleSection("strength")}
            >
               <h3 className={styles.filterSubtitle}>По силе</h3>
               <span className={styles.arrow}>
                  <img className={styles.cool} src={col} alt="top" />
               </span>
            </div>
            {openSections.strength && (
               <div className={styles.radioGroup}>
                  <label className={styles.customRadio}>
                     <input
                        type="radio"
                        name="strength"
                        checked={selectedValues.strength === "less50"}
                        onChange={() => handleRadioChange("strength", "less50")}
                     />
                     <span className={styles.radiomark}></span>
                     Меньше 50
                  </label>
                  <label className={styles.customRadio}>
                     <input
                        type="radio"
                        name="strength"
                        checked={selectedValues.strength === "more50"}
                        onChange={() => handleRadioChange("strength", "more50")}
                     />
                     <span className={styles.radiomark}></span>
                     Больше 50
                  </label>
               </div>
            )}
         </div>

         {/* По редкости - радиогруппа */}
         <div className={styles.filterGroup}>
            <div
               className={styles.filterHeader}
               onClick={() => toggleSection("rarity")}
            >
               <h3 className={styles.filterSubtitle}>По редкости</h3>
               <span className={styles.arrow}>
                  <img className={styles.cool} src={col} alt="top" />
               </span>
            </div>
            {openSections.rarity && (
               <div className={styles.radioGroup}>
                  <label className={styles.customRadio}>
                     <input
                        type="radio"
                        name="rarity"
                        checked={selectedValues.rarity === "common"}
                        onChange={() => handleRadioChange("rarity", "common")}
                     />
                     <span className={styles.radiomark}></span>
                     Обычный
                  </label>
                  <label className={styles.customRadio}>
                     <input
                        type="radio"
                        name="rarity"
                        checked={selectedValues.rarity === "medium"}
                        onChange={() => handleRadioChange("rarity", "medium")}
                     />
                     <span className={styles.radiomark}></span>
                     Средний
                  </label>
                  <label className={styles.customRadio}>
                     <input
                        type="radio"
                        name="rarity"
                        checked={selectedValues.rarity === "rare"}
                        onChange={() => handleRadioChange("rarity", "rare")}
                     />
                     <span className={styles.radiomark}></span>
                     Редкий
                  </label>
               </div>
            )}
         </div>

         {/* По стихии - чекбоксы */}
         <div className={styles.filterGroup}>
            <div
               className={styles.filterHeader}
               onClick={() => toggleSection("element")}
            >
               <h3 className={styles.filterSubtitle}>По стихии</h3>
               <span className={styles.arrow}>
                  <img className={styles.cool} src={col} alt="top" />
               </span>
            </div>
            {openSections.element && (
               <div className={styles.checkboxGroup}>
                  <label className={styles.customCheckbox}>
                     <input
                        type="checkbox"
                        onChange={(e) =>
                           handleCheckboxChange(
                              "element",
                              "electric",
                              e.target.checked
                           )
                        }
                     />
                     <span className={styles.checkmark}></span>
                     Электрический
                  </label>
                  <label className={styles.customCheckbox}>
                     <input
                        type="checkbox"
                        onChange={(e) =>
                           handleCheckboxChange(
                              "element",
                              "ground",
                              e.target.checked
                           )
                        }
                     />
                     <span className={styles.checkmark}></span>
                     Земляной
                  </label>
                  <label className={styles.customCheckbox}>
                     <input
                        type="checkbox"
                        onChange={(e) =>
                           handleCheckboxChange(
                              "element",
                              "water",
                              e.target.checked
                           )
                        }
                     />
                     <span className={styles.checkmark}></span>
                     Водный
                  </label>
                  <label className={styles.customCheckbox}>
                     <input
                        type="checkbox"
                        onChange={(e) =>
                           handleCheckboxChange(
                              "element",
                              "magic",
                              e.target.checked
                           )
                        }
                     />
                     <span className={styles.checkmark}></span>
                     Волшебный
                  </label>
               </div>
            )}
         </div>
      </div>
   );
}
