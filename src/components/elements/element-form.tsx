"use client";

import React, { useState, useEffect, useCallback,TextareaHTMLAttributes  } from "react"
import Select, {components, SingleValue} from "react-select"; 




interface InputProps {
    name: string;
    label: string;
}

export const FormInputBordered: React.FC<InputProps> = ({ name, label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    }, []);
  
    return (
      <div className="field-item">
        <label className={`field-label ${isFocused || inputValue ? 'field-label-float' : ''}`}>{label}</label>
        <div className="field-wrap">
          <input
            name={name}
            type="text"
            className="input-bordered"
            required
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  };
  




interface SelectProps {
    name: string;
    label: string;
    options: { value: string; label: string }[];
}

export const FormSelect: React.FC<SelectProps> = ({ name, label, options }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    }, []);

    return (
        <div className="field-item">
            <label className={`field-label ${isFocused || selectedValue ? 'field-label-float' : ''}`}>{label}</label>
            <div className="field-wrap">
                <select
                    name={name}
                    className="select-bordered" 
                    value={selectedValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                >
                    <option value="">Please select</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
  


interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
}

const CustomMenu = (props: any) => {
  return (
    <div>
      <components.Menu { ...props}>
        <div style={ { padding: '10px' }}>
          { props.children}
        </div>
      </components.Menu>
    </div>
  );
};

export const FormSelectWithSearch: React.FC<SelectProps> = ({  name, label, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SingleValue<Option>>(null);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const handleChange = (option: SingleValue<Option>) => {
    setSelectedOption(option);
  };

  return (
    <div className="field-item">
      <label className={ `field-label ${isFocused || selectedOption ? 'field-label-float' : ''}`}>
        { label}
      </label>
      <div className="field-wrap">
        <Select
          options={ options}
          onFocus={ handleFocus}
          onBlur={ handleBlur}
          onChange={ handleChange}
          value={ selectedOption}
          placeholder="Select an option"
          isClearable
          classNamePrefix={ `select-${name}`}
          components={ { Menu: CustomMenu }}
        />
      </div>
    </div>
  );
};


// export const FormSelectWithSearch: React.FC<SelectProps> = ({ name, label, options }) => {
//     const [isFocused, setIsFocused] = useState(false);
//     const [selectedValue, setSelectedValue] = useState('');

//     const handleFocus = useCallback(() => setIsFocused(true), []);
//     const handleBlur = useCallback(() => setIsFocused(false), []);

//     const handleChange = useCallback((e: JQuery.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedValue(e.target.value);
//     }, []);

//     useEffect(() => {
//         $(`.select-${name}`).select2({
//             theme: 'bordered',
//             placeholder: "Please select",
//             allowClear: true,
//             width: '100%'
//         });


//         return () => {
//             $(`.select-${name}`).select2('destroy');
//         };
//     }, [name, handleChange]);

//     return (
//         <div className="field-item">
//             <label className={`field-label ${isFocused || selectedValue ? 'field-label-float' : ''}`}>{label}</label>
//             <div className="field-wrap">
//                 <select
//                     name={name}
//                     className={`select select-${name} select-bordered`} 
//                     value={selectedValue}
//                     onFocus={handleFocus}
//                     onBlur={handleBlur}
//                     required
//                 >
//                     <option value="">Please select</option>
//                     {options.map(option => (
//                         <option key={option.value} value={option.value}>{option.label}</option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// };

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}



export const FormTextArea: React.FC<TextAreaProps> = ({ name, label, required, ...rest }) => {
    return (
        <div className="field-item">
            <label className="field-label">{label}</label>
            <div className="field-wrap">
                <textarea
                    name={name}
                    className="input-bordered input-textarea"
                    required={required}
                    {...rest} // Phân phối các props còn lại cho textarea
                ></textarea>
            </div>
        </div>
    );
};
  


interface CheckboxItem {
    id: string;
    label: string;
}

interface CheckboxProps {
    name: string;
    items: CheckboxItem[];
    required?: boolean;
}

export const FormCheckbox: React.FC<CheckboxProps> = ({ name, items, required }) => {
    return (
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map(item => (
                <li className="mb-3" key={item.id}>
                    <div className="field-wrap">
                        <input
                            className="input-checkbox"
                            id={item.id}
                            name={`${name}[]`} 
                            type="checkbox"
                            required={required}
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                </li>
            ))}
        </ul>
    );
};

interface RadioItem {
    id: string;
    label: string;
}

interface RadioProps {
    name: string;
    items: RadioItem[];
    required?: boolean;
    selectedValue?: string; 
    onChange: (value: string) => void; 
}

export const FormRadio: React.FC<RadioProps> = ({ name, items, required, selectedValue, onChange }) => {
    return (
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map(item => (
                <li className="mb-3" key={item.id}>
                    <div className="field-wrap">
                        <input
                            className="input-radio"
                            id={item.id}
                            name={name}
                            type="radio"
                            required={required}
                            checked={selectedValue === item.id} 
                            onChange={() => onChange(item.id)} 
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                </li>
            ))}
        </ul>
    );
};

interface SwitchItem {
    id: string;
    label: string;
}

interface SwitchProps {
    name: string;
    items: SwitchItem[];
    onChange: (id: string, checked: boolean) => void; 
    checkedItems: string[]; 
}

export const FormSwitch: React.FC<SwitchProps> = ({ name, items, onChange, checkedItems }) => {
    return (
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map(item => (
                <li className="mb-3" key={item.id}>
                    <div className="field-wrap">
                        <input
                            className="input-switch"
                            id={item.id}
                            name={`${name}[]`} 
                            type="checkbox"
                            checked={checkedItems.includes(item.id)} 
                            onChange={(e) => onChange(item.id, e.target.checked)} 
                        />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                </li>
            ))}
        </ul>
    );
};

interface InputLineProps {
    name: string;
    label: string;
    required?: boolean; 
}

export const FormInputLine: React.FC<InputLineProps> = ({ name, label, required }) => {
    const [value, setValue] = useState(''); 
    const [isFocused, setIsFocused] = useState(false); 

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (value === '') {
            setIsFocused(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const fieldWrapStyle: React.CSSProperties = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px',
    };
    
    const inputStyle: React.CSSProperties = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
        width: '100%',
        fontSize: '16px',
    };
    
    const inputFocusStyle: React.CSSProperties = {
        border: '1px solid #007bff', 
    };
    
    const labelStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        transition: '0.2s ease all',
        fontSize: '16px',
        color: '#999',
    };
    
    const labelFloatStyle: React.CSSProperties = {
        top: '0',
        fontSize: '12px',
        color: '#007bff',
    };

    return (
        <div className="field-item">
            <div style={ fieldWrapStyle}>
                <input
                    name={name}
                    type="text"
                    style={{ ...inputStyle, ...(isFocused || value ? inputFocusStyle : {}) }}
                    id={`input-${name}`} 
                    required={required}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <label style={{ ...labelStyle, ...(isFocused || value ? labelFloatStyle : {}) }}>
                    {label}
                </label>
            </div>
        </div>
    );
};
interface FormSelectLineProps {
    name: string;
    options: { value: string; label: string }[];
    required?: boolean;
}

export const FormSelectLine: React.FC<FormSelectLineProps> = ({ name, options, required }) => {
    const [selectedValue, setSelectedValue] = useState('');

    // Xử lý khi người dùng chọn một tùy chọn
    const handleSelect = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div className="field-item">
            <div className="field-wrap">
                <select 
                    name={name}
                    value={selectedValue}
                    onChange={(e) => handleSelect(e.target.value)} // Khi thay đổi giá trị
                    required={required}
                    className="form-select-line" // Thêm className để style
                >
                    <option value="">Please select</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
interface FormTextareaLineProps {
    name: string;
    label: string; 
    required?: boolean;
}

export const FormTextareaLine: React.FC<FormTextareaLineProps> = ({ name, label, required }) => {
    const [textValue, setTextValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value);
    };

    return (
        <div className="field-item">
            <div className="field-wrap">
                <textarea
                    name={name}
                    id="textarea"
                    className={`input-line input-textarea ${textValue ? 'filled' : ''}`}
                    required={required}
                    onChange={handleChange}
                ></textarea>
                <label className={`field-label field-label-line ${textValue ? 'label-float' : ''}`}>
                    {label} 
                </label>
            </div>

            <style jsx>{`
                .field-wrap {
                    position: relative;
                }

                .input-line {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    resize: vertical;
                }

                .field-label {
                    position: absolute;
                    left: 10px;
                    top: 14px;
                    transition: 0.2s ease all;
                    color: #aaa;
                }

                .label-float {
                    top: -10px;
                    left: 10px;
                    font-size: 12px;
                    color: white;
                }

                .input-textarea {
                    min-height: 100px; 
                }
            `}</style>
        </div>
    );
};

