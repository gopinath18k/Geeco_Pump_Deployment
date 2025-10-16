// src/PumpSelectionTool.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./PumpSelectionTool.css";
import { pumpSelectionQuestions } from "./../data/questions.jsx";
import { pumps } from "./../data/products.jsx";
import SelectionTool from "./../PumpSelectionTool/SelectionTool.jsx";
import ProductList from "./../PumpSelectionTool/ProductList.jsx";
import { motion, AnimatePresence } from "framer-motion";

function PumpSelectionTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [filteredPumps, setFilteredPumps] = useState([]);
  const [currentQuestionFlow, setCurrentQuestionFlow] = useState([
    pumpSelectionQuestions[0],
  ]);
  const [allAnswered, setAllAnswered] = useState(false);
  const questionRefs = useRef([]);
  const [visibleQuestions, setVisibleQuestions] = useState([0]);

  const filterProducts = useCallback(() => {
    let tempPumps = [...pumps];

     // Domestic Question //

    if (answers.applicationType) {
      tempPumps = tempPumps.filter(pump => pump.application === answers.applicationType);
    }
    if (answers.domesticUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.domesticUse_waterSource);
    }

    // Domestic Question SumpTank surface//

    if (answers.domesticUse_sumpTank_installLocation) {
      tempPumps = tempPumps.filter(pump => pump.installLocation === answers.domesticUse_sumpTank_installLocation);
    }
    if (answers.domesticUse_sumpTank_surface_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_surface_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_surface_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_surface_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_surface_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_surface_deliverySize));
    }

    // Domestic Question SumpTank submerged//

    if (answers.domesticUse_sumpTank_submerged_head) {
      const headValue = parseInt(answers.domesticUse_sumpTank_submerged_head);
      tempPumps = tempPumps.filter(pump => headValue >= pump.headMin && headValue <= pump.headMax);
    }
    if (answers.domesticUse_sumpTank_submerged_discharge) {
      const dischargeValue = parseInt(answers.domesticUse_sumpTank_submerged_discharge);
      tempPumps = tempPumps.filter(pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax);
    }
    if (answers.domesticUse_sumpTank_submerged_deliverySize) {
      tempPumps = tempPumps.filter(pump => pump.deliverySize.includes(answers.domesticUse_sumpTank_submerged_deliverySize));
    }

    // Domestic Question Openwell surface//

    // --- Domestic Question Openwell Surface ---
    
    if (answers.domesticUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_openwell_installLocation
      );
    }

    if (answers.domesticUse_openwell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }

    // --- Domestic Question Openwell Submerged ---

    if (answers.domesticUse_openwell_Submerged_head) {
      const headValue = parseFloat(answers.domesticUse_openwell_Submerged_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_openwell_Submerged_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_openwell_Submerged_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }

    if (answers.domesticUse_openwell_surface_deliverySize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.domesticUse_openwell_surface_deliverySize)
      );
    }


      // Domestic Question Borewell //

    // --- Domestic Question Borewell Surface --- //
    
    if (answers.domesticUse_borewell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.domesticUse_borewell_installLocation
      );
    }
    if (answers.domesticUse_borewell_surface_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.domesticUse_borewell_surface_phase
      );
    }

    if (answers.domesticUse_borewell_surface_depth) {
      const depthValue = parseFloat(answers.domesticUse_borewell_surface_depth);
      tempPumps = tempPumps.filter(
        pump => depthValue >= pump.depthMin && depthValue <= pump.depthMax
      );
    }
     
    if (answers.domesticUse_borewell_surface_head) {
      const headValue = parseFloat(answers.domesticUse_borewell_surface_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.headMin && headValue <= pump.headMax
      );
    }

    if (answers.domesticUse_borewell_surface_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_borewell_surface_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }


    // --- Domestic Question Borewell Submersible --- //

    

    if (answers.domesticUse_borewell_submersible_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.borewellSize.includes(answers.domesticUse_borewell_submersible_borewellSize)
      );
    }
     
    if (answers.domesticUse_borewell_submersible_phase) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.domesticUse_borewell_submersible_phase
      );
    }

    if (answers.domesticUse_borewell_submersible_head) {
      const headValue = parseFloat(answers.domesticUse_borewell_submersible_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }

    if (answers.domesticUse_borewell_submersible_discharge) {
      const dischargeValue = parseFloat(answers.domesticUse_borewell_submersible_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.lpmMin && dischargeValue <= pump.lpmMax
      );
    }

    //--------- Agriculture Section Question -------------//

    if (answers.agricultureUse_waterSource) {
      tempPumps = tempPumps.filter(pump => pump.waterSource === answers.agricultureUse_waterSource);
    }
    if (answers.agricultureUse_openwell_powersource) {
      tempPumps = tempPumps.filter(
        pump => pump.phase === answers.agricultureUse_openwell_powersource
      );
    }
    if (answers.agricultureUse_openwell_installLocation) {
      tempPumps = tempPumps.filter(
        pump => pump.installLocation === answers.agricultureUse_openwell_installLocation
      );
    }
     if (answers.agricultureUse_openwell_surface_irrigation_head) {
      const headValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_head);
      tempPumps = tempPumps.filter(
        pump => headValue >= pump.totalHeadMin && headValue <= pump.totalHeadMax
      );
    }

    if (answers.agricultureUse_openwell_surface_irrigation_discharge) {
      const dischargeValue = parseFloat(answers.agricultureUse_openwell_surface_irrigation_discharge);
      tempPumps = tempPumps.filter(
        pump => dischargeValue >= pump.dischargeMin && dischargeValue <= pump.dischargeMax
      );
    }
    if (answers.agricultureUse_openwell_surface_irrigation_borewellSize) {
      tempPumps = tempPumps.filter(
        pump => pump.deliverySize?.includes(answers.agricultureUse_openwell_surface_irrigation_borewellSize)
      );
    }

    setFilteredPumps(tempPumps);
  }, [answers]);

  useEffect(() => {
    if (allAnswered) filterProducts();
  }, [answers, filterProducts, allAnswered]);

  // ---------------------- HANDLE ANSWER ----------------------
  const handleAnswer = (questionId, answer, nextSectionId) => {
  setAnswers((prev) => ({ ...prev, [questionId]: answer }));

  if (nextSectionId) {
    // Add next section questions
    const nextQuestions = pumpSelectionQuestions.filter(
      (q) => q.section === nextSectionId
    );
    setCurrentQuestionFlow((prev) => [
      ...prev.slice(0, currentStep + 1),
      ...nextQuestions,
    ]);
    setCurrentStep((prev) => prev + 1);
    setVisibleQuestions((prev) => [...prev, prev.length]);
  } else if (currentStep < currentQuestionFlow.length - 1) {
    // Move to the next question in the current flow
    setCurrentStep((prev) => prev + 1);
  } else {
    // Only after finishing the last question
    setAllAnswered(true);
  }
};


  // ---------------------- AUTO-SCROLL ----------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      if (questionRefs.current[currentStep]) {
        questionRefs.current[currentStep].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 600); // delay scroll until fade-in completes
    return () => clearTimeout(timer);
  }, [currentStep]);

  // ---------------------- OBSERVE VISIBILITY (Scroll Up/Down) ----------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            // When visible, fade in
            setVisibleQuestions((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            // When out of view (scroll up), fade out
            setVisibleQuestions((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    questionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentQuestionFlow]);

  // ---------------------- GO BACK ----------------------
  const goToPreviousStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  // ---------------------- RESET ----------------------
  const resetSelection = () => {
    setAnswers({});
    setCurrentStep(0);
    setCurrentQuestionFlow([pumpSelectionQuestions[0]]);
    setFilteredPumps([]);
    setAllAnswered(false);
    setVisibleQuestions([0]);
  };

  // ---------------------- ANIMATION VARIANTS ----------------------
  const fadeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // ---------------------- RENDER ----------------------
  return (
    <div className="Pump_Selction_Tool_Container">
      <h1>Pump Selector Tool</h1>
      <button className="Pump_selection_Reset_Button" onClick={resetSelection}>
        Reset Selection
      </button>

      {!allAnswered ? (
        <div className="questions-container">
          <AnimatePresence mode="wait">
            {currentQuestionFlow.map((question, index) => (
              <motion.div
                key={question.id}
                variants={fadeVariant}
                initial="hidden"
                animate={visibleQuestions.includes(index) ? "visible" : "hidden"}
                exit="exit"
                ref={(el) => (questionRefs.current[index] = el)}
                data-index={index}
              >
                <SelectionTool
                  question={question}
                  onAnswer={handleAnswer}
                  currentAnswer={answers[question.id]}
                  goToPreviousStep={goToPreviousStep}
                  canGoBack={index > 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Selection Complete!</h2>
          {filteredPumps.length === 0 ? (
            <p>No pumps match your criteria. Try adjusting your selections.</p>
          ) : (
            <ProductList pumps={filteredPumps} />
          )}
        </motion.div>
      )}
    </div>
  );
}

export default PumpSelectionTool;