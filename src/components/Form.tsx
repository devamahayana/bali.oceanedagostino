'use client';

import { useState, useEffect, useRef } from 'react';
import '../app/form.css';
import Title from './Title';

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [currentField, setCurrentField] = useState<number>(0);
  const [fields, setFields] = useState<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    if (formRef.current) {
      setFields(formRef.current.querySelectorAll('.form-field'));
    }
  }, []);

  useEffect(() => {
    if (fields) {
      fields.forEach((field, index) => {
        if (index === 0) {
          field.classList.add('visible');
        } else {
          field.classList.add('hidden');
        }
      });
    }
  }, [fields]);

  const isFieldFilled = (fieldIndex: number): boolean => {
    if (!fields) return false;
    const field = fields[fieldIndex];
    const input = field.querySelector('input[type="text"], input[type="email"], input[type="tel"]') as HTMLInputElement | null;
    const checkboxes = field.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    
    if (input) {
      return input.checkValidity();
    } else if (checkboxes.length > 0) {
      return Array.from(checkboxes).some(checkbox => checkbox.checked);
    }
    return true;
  };

  const showNextField = () => {
    if (!fields) return;
    if (!isFieldFilled(currentField)) {
      alert('Veuillez remplir le champ actuel.');
      return;
    }

    fields[currentField].classList.remove('visible');
    fields[currentField].classList.add('hidden');
    
    const nextIndex = currentField + 1;
    if (nextIndex < fields.length) {
      fields[nextIndex].classList.remove('hidden');
      fields[nextIndex].classList.add('visible');
      setCurrentField(nextIndex);
    }
  };

  const showPreviousField = () => {
    if (!fields || currentField === 0) return;
    
    fields[currentField].classList.remove('visible');
    fields[currentField].classList.add('hidden');
    
    const prevIndex = currentField - 1;
    fields[prevIndex].classList.remove('hidden');
    fields[prevIndex].classList.add('visible');
    setCurrentField(prevIndex);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      
      if (!isFieldFilled(currentField)) {
        alert('Veuillez remplir le champ actuel.');
        return;
      }
      
      if (currentField < (fields?.length ?? 0) - 1) {
        showNextField();
      } else {
        formRef.current?.submit();
      }
    }
  };

  const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'checkbox' || event.target.type === 'radio') {
      showNextField();
    }
  };

  return (
    <section className='realisations py-10 2xl:w-4/5 w-11/12 m-auto' id='form'>
      <Title
        pretitle=''
        title='Remplissez ce formulaire pour être mis en relation avec l’un de nos experts :'
      />
      <div className="form__wrap">
        <form ref={formRef} onKeyPress={handleKeyPress} id="dynamic-form" action="remerciement" data-netlify="true" name="option-form" className='flex flex-col gap-4'>        
          <div id="form-fields">                    
            {/* <!-- 1. Quand prévoyez-vous idéalement de commencer la construction de votre projet à Bali ? --> */}
            <div className="form-field visible" id="field1-container" onChange={handleOptionClick}>
            <h1>1. Quand prévoyez-vous idéalement de commencer la construction de votre projet à Bali ?</h1>
            <div className="container__option">
              <span className="form__option">
              <label>
                <input type="checkbox" name="question-1" value="Dans les 3 mois à venir" />
                <span className="form__option-label">Dans les 3 mois à venir</span>
              </label>
              </span>
              <span className="form__option">
              <label>
                <input type="checkbox" name="question-1" value="Dans les 6 mois à venir" />
                <span className="form__option-label">Dans les 6 mois à venir</span>
              </label>
              </span>
              <span className="form__option">
              <label>
                <input type="checkbox" name="question-1" value="Entre 6 et 12 mois" />
                <span className="form__option-label">Entre 6 et 12 mois</span>
              </label>
              </span>
              <span className="form__option">
              <label>
                <input type="checkbox" name="question-1" value="Plus d’un an" />
                <span className="form__option-label">Plus d’un an</span>
              </label>
              </span>
            </div>
            </div>
          
            {/* <!-- 2. Quel est votre budget approximatif pour ce projet ? --> */}
            <div className="form-field" id="field2-container" onChange={handleOptionClick}>
            <h1>2. Quel est votre budget approximatif pour ce projet ?</h1>
            <div className="container__option">
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-2" value="Moins de 150 000 euros" />
              <span className="form__option-label">Moins de 150 000 euros</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-2" value="Entre 150 000 euros et 250 000 euros" />
              <span className="form__option-label">Entre 150 000 euros et 250 000 euros</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-2" value="Entre 250 000 euros et 500 000 euros" />
              <span className="form__option-label">Entre 250 000 euros et 500 000 euros</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-2" value="Entre 500 000 euros et 999 000 euros" />
              <span className="form__option-label">Entre 500 000 euros et 999 000 euros</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-2" value="Plus de 1 million d'euros" />
              <span className="form__option-label">Plus de 1 million d`euros</span>
              </label>
            </span>
            </div>
            </div>
          
            {/* <!-- 3. Quand souhaitez-vous être contacté ? --> */}
            <div className="form-field" id="field3-container" onChange={handleOptionClick}>
            <h1>3. Quand souhaitez-vous être contacté ?</h1>
            <div className="container__option">
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-3" value="Le matin" />
              <span className="form__option-label">Le matin</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-3" value="L’après midi" />
              <span className="form__option-label">L’après midi</span>
              </label>
            </span>
            <span className="form__option">
              <label>
              <input type="checkbox" name="question-3" value="Le soir" />
              <span className="form__option-label">Le soir</span>
              </label>
            </span>
            </div>       
            </div>
          
            {/* <!-- 4. Votre Nom --> */}
            <div className="form-field" id="field4-container">
            <h1 > 4. Votre Nom</h1>
            <input type="text" id="nom" name="nom" required placeholder="Votre nom et prénom" />
            </div>
          
            {/* <!-- 5. Votre Email --> */}
            <div className="form-field" id="field5-container">
            <h1 >5. Votre Email</h1>
            <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
          
            {/* <!-- 6. Votre Numéro de Téléphone --> */}
            <div className="form-field" id="field6-container">
            <h1 >6. Votre Numéro de Téléphone</h1>
            <input type="tel" id="number" name="number" pattern="\d{7,}" required placeholder="Numéro WhatsApp" />
            </div>							
        
          </div>
          <div className="button__wrap">
            <button type="button" onClick={showPreviousField} className={currentField === 0 ? 'hidden' : ''}>Précédent</button>
            <button type="button" onClick={showNextField} className={currentField >= (fields?.length ?? 1) - 1 ? 'hidden' : ''}>Suivant</button>
            <input type="submit" id="submit-button" className={currentField >= (fields?.length ?? 1) - 1 ? '' : 'hidden'} value="Valider" />

            <div className="info__Alert flex items-center">
              <h1>appuyez sur <b>Entrée</b></h1>
              <i className='bx bx-subdirectory-right text-xl'></i>
            </div>
          </div>

          <input type="hidden" value="With Video" name="branch" />
          </form>

        </div>
    </section>
  )
}

export default Form