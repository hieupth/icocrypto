import React from "react";

const Input_bordered: React.FC = () => {
    return (
        <div className="field-item">
            <label className="field-label">Input Element</label>
            <div className="field-wrap">
                <input name="inputname1" type="text" className="input-bordered" id="input-text-2" required />
            </div>
            <p>Use <code>.input-bordered</code> class with input element to make it bordered.</p>
        </div>
    );
}

const Form_Select: React.FC = () => {
    return (
        <div className="field-item">
            <label className="field-label">Select Element</label>
            <div className="field-wrap">
                <select name="option2" className="select2-container select-bordered select2-selection" data-select2-theme="bordered" required>
                    <option value="">Please select</option>
                    <option value="option_a">Option A</option>
                    <option value="option_b">Option B</option>
                    <option value="option_c">Option C</option>
                    <option value="option_d">Option D</option>
                </select>
            </div>
            <p>Use <code>.select</code> to activate select2 jQuery plugin for custom select field style. Use <code>data-select2-theme=&quot;bordered&quot;</code> for a bordered style.</p>
        </div>
    );
}

const Form_Select_WithSearch: React.FC = () => {
    return (
        <div className="field-item">
            <label className="field-label">Select Element (with search enabled)</label>
            <div className="field-wrap">
                <select name="option2.1" className="select select2-accessible error" data-select2-theme="bordered" data-search="on" required data-select2-id="4">
                    <option value="">Please select</option>
                    <option value="option_a">Option A</option>
                    <option value="option_b">Option B</option>
                    <option value="option_c">Option C</option>
                    <option value="option_d">Option D</option>
                </select>
            </div>
            <p>Use <code>data-search=&quot;on&quot;</code> to enable search for the select2 element.</p>
        </div>
    );
}

const Text_area: React.FC = () => {
    return (
        <div className="field-item">
            <label className="field-label">Textarea Element</label>
            <div className="field-wrap">
                <textarea name="textarea2" className="input-bordered input-textarea" required></textarea>
            </div>
            <p>Use <code>.input-textarea</code> with input classes for textarea.</p>
        </div>
    );
}

const Check_box: React.FC = () => {
    return (
        <>
            <ul className="d-flex flex-wrap gutter-30px">
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-checkbox" id="cbi-1" name="cbi[]" type="checkbox" required />
                        <label htmlFor="cbi-1">CheckBox Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-checkbox" id="cbi-2" name="cbi[]" type="checkbox" required />
                        <label htmlFor="cbi-2">CheckBox Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-checkbox" id="cbi-3" name="cbi[]" type="checkbox" required />
                        <label htmlFor="cbi-3">CheckBox Item</label>
                    </div>
                </li>
            </ul>
            <p>Use <code>.input-checkbox</code> class for checkbox inputs.</p>
        </>
    );
}

const Radio: React.FC = () => {
    return (
        <>
            <ul className="d-flex flex-wrap gutter-30px">
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-radio" id="rdi-1" name="rdi" type="radio" required />
                        <label htmlFor="rdi-1">Radio Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-radio" id="rdi-2" name="rdi" type="radio" required />
                        <label htmlFor="rdi-2">Radio Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-radio" id="rdi-3" name="rdi" type="radio" required />
                        <label htmlFor="rdi-3">Radio Item</label>
                    </div>
                </li>
            </ul>
            <p>Use <code>.input-radio</code> class for radio inputs.</p>
        </>
    );
}

const Switch: React.FC = () => {
    return (
        <>
            <ul className="d-flex flex-wrap gutter-30px">
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-switch" id="switch-1" name="switch[]" type="checkbox" required />
                        <label htmlFor="switch-1">Switch Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-switch" id="switch-2" name="switch[]" type="checkbox" required />
                        <label htmlFor="switch-2">Switch Item</label>
                    </div>
                </li>
                <li className="mb-3">
                    <div className="field-wrap">
                        <input className="input-switch" id="switch-3" name="switch[]" type="checkbox" required />
                        <label htmlFor="switch-3">Switch Item</label>
                    </div>
                </li>
            </ul>
            <p>Use <code>.input-switch</code> for switch inputs.</p>
        </>
    );
}

const Input_line: React.FC = () => {
    return (
        <div className="field-item">
            <div className="field-wrap input-focused">
                <input name="inputname2" type="text" className="input-line" id="input-text-1" required />
                <label className="field-label field-label-line">Input Element</label>
            </div>
            <p>Use <code>.input-line</code> class for line input. Add <code>.field-label .field-label-line</code> for label animation.</p>
        </div>
    );
}

const Form_line: React.FC = () => {
    return (
        <div className="field-item">
            <div className="field-wrap">
                <select name="option1" className="select" data-select2-theme="line" required>
                    <option value="">Please select</option>
                    <option value="option_a">Option A</option>
                    <option value="option_b">Option B</option>
                    <option value="option_c">Option C</option>
                    <option value="option_d">Option D</option>
                </select>
            </div>
            <p>Use <code>.select</code> to activate select2 plugin for custom style, and <code>data-select2-theme=&quot;line&quot;</code> for line style.</p>
        </div>
    );
}

const Text_area_input: React.FC = () => {
    return (
        <div className="field-item">
            <div className="field-wrap input-focused">
                <textarea name="textarea1" id="textarea" className="input-line input-textarea" required></textarea>
                <label className="field-label field-label-line">Textarea Element</label>
            </div>
            <p>Use <code>.input-textarea</code> for textarea input.</p>
        </div>
    );
}

const Banner: React.FC = () => {
    return (
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
            </div>
        </div>
    );
}

export {
    Banner, Input_bordered, Form_Select, Form_Select_WithSearch, Text_area, Check_box, Radio, Switch, Input_line, Form_line, Text_area_input
};
