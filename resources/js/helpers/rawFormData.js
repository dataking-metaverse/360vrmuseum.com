function rawFormData(formData: FormData): ({[string]: string | number | bool}) {
    const output = {};
    formData.forEach((value, key) => { output[key] = value; });
    return output;
}

export default rawFormData;
