"use client";

import React from "react";

// Input Bordered Component
interface InputProps {
    name: string;
    label: string;
}

const InputBordered: React.FC<InputProps> = ({ name, label }) => (
    <div className="field-item">
        <label className="field-label">{label}</label>
        <div className="field-wrap">
            <input name={name} type="text" className="input-bordered" required />
        </div>
        <p>Use <code>.input-bordered</code> class with input element to make it bordered.</p>
    </div>
);

// Form Select Component
interface SelectProps {
    name: string;
    label: string;
    options: { value: string; label: string }[];
}

const FormSelect: React.FC<SelectProps> = ({ name, label, options }) => (
    <div className="field-item">
        <label className="field-label">{label}</label>
        <div className="field-wrap">
            <select name={name} className=".select2-container.select-bordered .select2-selection" data-select2-theme="bordered" required>
                <option value="">Please select</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
        <p>Use <code>.select-bordered</code> for bordered select element styling.</p>
    </div>
);

// Text Area Component
const TextArea: React.FC<InputProps> = ({ name, label }) => (
    <div className="field-item">
        <label className="field-label">{label}</label>
        <div className="field-wrap">
            <textarea name={name} className="input-bordered input-textarea" required></textarea>
        </div>
        <p>Use <code>.input-textarea</code> class for textarea.</p>
    </div>
);

// Checkbox Component
const CheckBox: React.FC<{ items: string[] }> = ({ items }) => (
    <>
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map((item, index) => (
                <li className="mb-3" key={index}>
                    <div className="field-wrap">
                        <input className="input-checkbox" id={`cbi-${index}`} name={`cbi[]`} type="checkbox" required />
                        <label htmlFor={`cbi-${index}`}>{item}</label>
                    </div>
                </li>
            ))}
        </ul>
        <p>Use <code>.input-checkbox</code> class for checkbox inputs.</p>
    </>
);

// Radio Component
const Radio: React.FC<{ items: string[] }> = ({ items }) => (
    <>
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map((item, index) => (
                <li className="mb-3" key={index}>
                    <div className="field-wrap">
                        <input className="input-radio" id={`rdi-${index}`} name="rdi" type="radio" required />
                        <label htmlFor={`rdi-${index}`}>{item}</label>
                    </div>
                </li>
            ))}
        </ul>
        <p>Use <code>.input-radio</code> class for radio inputs.</p>
    </>
);

// Switch Component
const Switch: React.FC<{ items: string[] }> = ({ items }) => (
    <>
        <ul className="d-flex flex-wrap gutter-30px">
            {items.map((item, index) => (
                <li className="mb-3" key={index}>
                    <div className="field-wrap">
                        <input className="input-switch" id={`switch-${index}`} name={`switch[]`} type="checkbox" required />
                        <label htmlFor={`switch-${index}`}>{item}</label>
                    </div>
                </li>
            ))}
        </ul>
        <p>Use <code>.input-switch</code> for switch inputs.</p>
    </>
);

// Banner Component
const Banner: React.FC = () => (
    <div className="header-banner bg-theme-grad">
        <div className="nk-banner">
            <div className="banner banner-page">
                <div className="banner-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-9">
                                <div className="banner-caption cpn tc-light text-center">
                                    <div className="cpn-head">
                                        <h2 className="title ttu">Form</h2>
                                        <p>We designed a brand-new cool design and lots of features, the latest version of the template supports advanced block base scenarios, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-ovm shape-a-sm"></div>
        </div>
    </div>
);

// Main Form Component
const Form: React.FC = () => {
    const selectOptions = [
        { value: "option_a", label: "Option A" },
        { value: "option_b", label: "Option B" },
        { value: "option_c", label: "Option C" },
        { value: "option_d", label: "Option D" }
    ];

    const checkBoxItems = ["CheckBox Item 1", "CheckBox Item 2", "CheckBox Item 3"];
    const radioItems = ["Radio Item 1", "Radio Item 2", "Radio Item 3"];
    const switchItems = ["Switch Item 1", "Switch Item 2", "Switch Item 3"];

    return (
        <>
            {/* <Banner /> */}
            <main className="nk-pages">
                <section className="section">
                    <div className="container">
                        <h3 className="title title-md">Form Element Bordered</h3>
                        <form className="form-validate">
                            <InputBordered name="inputname1" label="Input Element" />
                            <FormSelect name="option2" label="Select Element" options={selectOptions} />
                            <TextArea name="textarea2" label="Textarea Element" />
                            <CheckBox items={checkBoxItems} />
                            <Radio items={radioItems} />
                            <Switch items={switchItems} />
                            <button className="btn btn-grad">Verify</button>
                        </form>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h3 className="title title-md">Form Element Line</h3>
                        <form className="form-validate">
                            <InputBordered name="inputname2" label="Input Element (Line)" />
                            <FormSelect name="option1" label="Select Element (Line)" options={selectOptions} />
                            <TextArea name="textarea1" label="Textarea Element (Line)" />
                            <button className="btn btn-grad">Verify</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Form;
