import rawFormData from "./rawFormData";

export default function getFormData(event: Event) {
    if (!(event.target instanceof HTMLFormElement)) { return {}; }
    const formData = new FormData(event.target);
    return rawFormData(formData);
}
