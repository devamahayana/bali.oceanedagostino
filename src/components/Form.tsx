'use client';

import { useState, useEffect, useRef } from 'react';
import '../app/form.css';
import Title from './Title';

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [currentField, setCurrentField] = useState<number>(0);
  const [fields, setFields] = useState<NodeListOf<HTMLElement> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{message: string, isError: boolean} | null>(null);

  // Data form state
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    nom: '',
    email: '',
    number: ''
  });

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
        handleSubmit();
      }
    }
  };

  const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: value // Untuk checkbox, kita simpan value yang dipilih
      }));
      
      showNextField();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://bali.oceanedagostino.com/leads-api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: 'construction_questionnaire'
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }

      setSubmitStatus({ message: 'Formulaire envoyé avec succès!', isError: false });
      
      setTimeout(() => {
        window.location.href = '/remerciement';
      }, 2000);

      // Reset form after successful submission
      setFormData({
        question1: '',
        question2: '',
        question3: '',
        nom: '',
        email: '',
        number: ''
      });
      
      // Reset form fields visibility
      if (fields) {
        fields.forEach((field, index) => {
          field.classList.remove('visible', 'hidden');
          if (index === 0) {
            field.classList.add('visible');
          } else {
            field.classList.add('hidden');
          }
        });
        setCurrentField(0);
      }

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur inconnue est survenue';
      setSubmitStatus({ message: errorMessage, isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='realisations py-10 2xl:w-4/5 w-11/12 m-auto' id='form'>
      <Title
        pretitle=''
        title='Remplissez ce formulaire pour être mis en relation avec l un de nos experts :'
      />
      <div className="form__wrap">
        <form 
          ref={formRef} 
          onKeyPress={handleKeyPress} 
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
          action="remerciement"
        >        
          <div id="form-fields">                    
            {/* Question 1 */}
            <div className="form-field visible" id="field1-container" onChange={handleOptionClick}>
              <h1>1. Quand prévoyez-vous idéalement de commencer la construction de votre projet à Bali ?</h1>
              <div className="container__option">
                <span className="form__option">
                  <label>
                    <input 
                      type="checkbox" 
                      name="question1" 
                      value="Dans les 3 mois à venir" 
                      checked={formData.question1 === "Dans les 3 mois à venir"}
                      onChange={handleOptionClick}
                    />
                    <span className="form__option-label">Dans les 3 mois à venir</span>
                  </label>
                </span>
                {/* Other options for question 1 */}
              </div>
            </div>
          
            {/* Question 2 */}
            <div className="form-field" id="field2-container" onChange={handleOptionClick}>
              <h1>2. Quel est votre budget approximatif pour ce projet ?</h1>
              <div className="container__option">
                <span className="form__option">
                  <label>
                    <input 
                      type="checkbox" 
                      name="question2" 
                      value="Moins de 150 000 euros" 
                      checked={formData.question2 === "Moins de 150 000 euros"}
                      onChange={handleOptionClick}
                    />
                    <span className="form__option-label">Moins de 150 000 euros</span>
                  </label>
                </span>
                {/* Other options for question 2 */}
              </div>
            </div>
          
            {/* Question 3 */}
            <div className="form-field" id="field3-container" onChange={handleOptionClick}>
              <h1>3. Quand souhaitez-vous être contacté ?</h1>
              <div className="container__option">
                <span className="form__option">
                  <label>
                    <input 
                      type="checkbox" 
                      name="question3" 
                      value="Le matin" 
                      checked={formData.question3 === "Le matin"}
                      onChange={handleOptionClick}
                    />
                    <span className="form__option-label">Le matin</span>
                  </label>
                </span>
                {/* Other options for question 3 */}
              </div>       
            </div>
          
            {/* Name */}
            <div className="form-field" id="field4-container">
              <h1>4. Votre Nom</h1>
              <input 
                type="text" 
                name="nom" 
                value={formData.nom}
                onChange={handleInputChange}
                required 
                placeholder="Votre nom et prénom" 
              />
            </div>
          
            {/* Email */}
            <div className="form-field" id="field5-container">
              <h1>5. Votre Email</h1>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="Email" 
              />
            </div>
          
            {/* Phone */}
            <div className="form-field" id="field6-container">
              <h1>6. Votre Numéro de Téléphone</h1>
              <input 
                type="tel" 
                name="number" 
                value={formData.number}
                onChange={handleInputChange}
                pattern="\d{7,}" 
                required 
                placeholder="Numéro WhatsApp" 
              />
            </div>							
        
          </div>
          <div className="button__wrap">
            <button type="button" onClick={showPreviousField} className={currentField === 0 ? 'hidden' : ''}>Précédent</button>
            <button type="button" onClick={showNextField} className={currentField >= (fields?.length ?? 1) - 1 ? 'hidden' : ''}>Suivant</button>
            <button 
              type="submit" 
              id="submit-button" 
              className={currentField >= (fields?.length ?? 1) - 1 ? '' : 'hidden'}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Valider'}
            </button>

            <div className="info__Alert flex items-center">
              <h1>appuyez sur <b>Entrée</b></h1>
              <i className='bx bx-subdirectory-right text-xl'></i>
            </div>
          </div>

          {submitStatus && (
            <div className={`mt-4 p-3 rounded ${submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;