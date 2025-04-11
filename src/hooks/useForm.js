import { useState, useEffect, useCallback, useMemo } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setformValidation] = useState({});

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const createValidator = useCallback(() => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        // Evitar actualizaciones innecesarias
        setformValidation((prevValidation) => {
            if (JSON.stringify(prevValidation) === JSON.stringify(formCheckedValues)) {
                return prevValidation;
            }
            return formCheckedValues;
        });
    }, [formState, formValidations]);

    useEffect(() => {
        createValidator();
    }, [formState, createValidator]);

    useEffect(() => {
       setFormState(initialForm);
    },[initialForm]);

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    };
};